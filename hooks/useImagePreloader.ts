'use client'

import { useEffect, useRef, useState } from 'react'

// Module-level cache so images survive re-renders and route changes
const imageCache = new Map<string, HTMLImageElement[]>()

interface PreloaderOptions {
    folder: string
    totalFrames?: number
    digits?: number
    extension?: string
}

interface PreloaderResult {
    images: HTMLImageElement[]
    loaded: boolean
    progress: number
}

export function useImagePreloader({
    folder,
    totalFrames = 192,
    digits = 5,
    extension = 'png',
}: PreloaderOptions): PreloaderResult {
    const [loaded, setLoaded] = useState(false)
    const [progress, setProgress] = useState(0)
    const imagesRef = useRef<HTMLImageElement[]>([])

    useEffect(() => {
        const cacheKey = `${folder}-${totalFrames}`

        if (imageCache.has(cacheKey)) {
            imagesRef.current = imageCache.get(cacheKey)!
            setProgress(1)
            setLoaded(true)
            return
        }

        const images: HTMLImageElement[] = new Array(totalFrames)
        imagesRef.current = images

        let loadedCount = 0
        let isCancelled = false

        function padIndex(i: number) {
            return String(i).padStart(digits, '0')
        }

        const loadImages = async () => {
            const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

            // Priority: Load first frame immediately to unblock UI
            await new Promise<void>((resolve) => {
                const img = new Image()
                img.onload = () => {
                    loadedCount++
                    if (!isCancelled) {
                        setProgress(loadedCount / totalFrames)
                        setLoaded(true)
                    }
                    images[0] = img
                    resolve()
                }
                img.onerror = () => {
                    loadedCount++
                    if (!isCancelled) {
                        setProgress(loadedCount / totalFrames)
                        setLoaded(true)
                    }
                    images[0] = img
                    resolve()
                }
                img.src = `${basePath}/${folder}/${padIndex(1)}.${extension}`
            })

            if (isCancelled) return

            // Load the rest in batches to prevent network clogging
            const batchSize = 10
            for (let i = 2; i <= totalFrames; i += batchSize) {
                if (isCancelled) break

                const batchPromises = []
                for (let j = 0; j < batchSize && (i + j) <= totalFrames; j++) {
                    const currentIndex = i + j
                    batchPromises.push(new Promise<void>((resolve) => {
                        const img = new Image()
                        img.onload = () => {
                            loadedCount++
                            if (!isCancelled) {
                                setProgress(loadedCount / totalFrames)
                            }
                            images[currentIndex - 1] = img
                            resolve()
                        }
                        img.onerror = () => {
                            loadedCount++
                            if (!isCancelled) {
                                setProgress(loadedCount / totalFrames)
                            }
                            images[currentIndex - 1] = img
                            resolve()
                        }
                        img.src = `${basePath}/${folder}/${padIndex(currentIndex)}.${extension}`
                    }))
                }
                await Promise.all(batchPromises)
            }

            if (!isCancelled) {
                imageCache.set(cacheKey, images)
            }
        }

        loadImages()

        return () => {
            isCancelled = true
        }
    }, [folder, totalFrames, digits, extension])

    return { images: imagesRef.current, loaded, progress }
}
