'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

let lenisInstance: Lenis | null = null

export function useLenis() {
    const rafRef = useRef<number>(0)

    useEffect(() => {
        lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: true,
        })

        function raf(time: number) {
            lenisInstance?.raf(time)
            rafRef.current = requestAnimationFrame(raf)
        }

        rafRef.current = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(rafRef.current)
            lenisInstance?.destroy()
            lenisInstance = null
        }
    }, [])

    return lenisInstance
}
