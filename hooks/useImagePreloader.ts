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

        const images: HTMLImageElement[] = []
        let loadedCount = 0

        function padIndex(i: number) {
            return String(i).padStart(digits, '0')
        }

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image()
            const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
            img.src = `${basePath}/${folder}/${padIndex(i)}.${extension}`

            img.onload = () => {
                loadedCount++
                setProgress(loadedCount / totalFrames)
                if (loadedCount === totalFrames) {
                    imageCache.set(cacheKey, images)
                    setLoaded(true)
                }
            }

            img.onerror = () => {
                loadedCount++
                setProgress(loadedCount / totalFrames)
                if (loadedCount === totalFrames) {
                    imageCache.set(cacheKey, images)
                    setLoaded(true)
                }
            }

            images.push(img)
        }

        imagesRef.current = images
    }, [folder, totalFrames, digits, extension])

    return { images: imagesRef.current, loaded, progress }
}
