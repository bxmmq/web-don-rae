'use client'

import { useEffect, useState, RefObject } from 'react'

export function useScrollProgress(containerRef: RefObject<HTMLElement>): number {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        function handleScroll() {
            const el = containerRef.current
            if (!el) return

            const rect = el.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const totalScrollDistance = el.offsetHeight - windowHeight
            const scrolled = -rect.top

            const p = Math.max(0, Math.min(1, scrolled / totalScrollDistance))
            setProgress(p)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [containerRef])

    return progress
}
