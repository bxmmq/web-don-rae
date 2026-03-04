'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useImagePreloader } from '@/hooks/useImagePreloader'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export default function HeroScroll() {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const progress = useScrollProgress(containerRef as React.RefObject<HTMLElement>)
    const { images, loaded, progress: loadProgress } = useImagePreloader({
        folder: 'sequence-1',
        totalFrames: 192,
    })

    // Draw frame on canvas whenever progress or images change
    useEffect(() => {
        if (!loaded || images.length === 0) return
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const frameIndex = Math.min(
            Math.floor(progress * (images.length - 1)),
            images.length - 1
        )
        const img = images[frameIndex]
        if (!img || !img.complete) return

        // Maintain canvas pixel dimensions
        const dpr = window.devicePixelRatio || 1
        const w = canvas.clientWidth * dpr
        const h = canvas.clientHeight * dpr
        if (canvas.width !== w || canvas.height !== h) {
            canvas.width = w
            canvas.height = h
        }

        ctx.clearRect(0, 0, w, h)

        // Cover fit — maintain aspect ratio
        const imgAspect = img.naturalWidth / img.naturalHeight
        const canvasAspect = w / h
        let drawW: number, drawH: number, dx: number, dy: number

        if (canvasAspect > imgAspect) {
            drawW = w
            drawH = w / imgAspect
            dx = 0
            dy = (h - drawH) / 2
        } else {
            drawH = h
            drawW = h * imgAspect
            dx = (w - drawW) / 2
            dy = 0
        }

        ctx.drawImage(img, dx, dy, drawW, drawH)
    }, [progress, images, loaded])

    // Resize handler
    useEffect(() => {
        function handleResize() {
            const canvas = canvasRef.current
            if (!canvas) return
            const dpr = window.devicePixelRatio || 1
            canvas.width = canvas.clientWidth * dpr
            canvas.height = canvas.clientHeight * dpr
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <section ref={containerRef} className="relative h-[400vh]">
            {/* Sticky canvas viewport */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Loading overlay */}
                {!loaded && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-bg gap-4">
                        <div className="w-48 h-px bg-border relative overflow-hidden">
                            <motion.div
                                className="absolute inset-y-0 left-0 bg-accent"
                                animate={{ width: `${loadProgress * 100}%` }}
                                transition={{ duration: 0.1 }}
                            />
                        </div>
                        <p className="text-text-muted text-xs font-sans uppercase">
                            กำลังโหลด... {Math.round(loadProgress * 100)}%
                        </p>
                    </div>
                )}

                {/* Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
                />

                {/* Dark gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-transparent to-bg/80 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-bg/30 via-transparent to-transparent pointer-events-none" />

                {/* Natural light leak */}
                <div className="light-leak" />

                {/* Hero text overlay */}
                <div className="absolute inset-0 flex flex-col items-start justify-end pb-16 md:pb-24 px-6 sm:px-10 md:px-16 lg:px-24 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="max-w-2xl"
                    >
                        <div className="glass-card p-6 sm:p-8 md:p-10 bg-black/20 border-white/5 backdrop-blur-sm">
                            <p className="section-label mb-3 text-accent font-medium">
                                องค์การบริหารส่วนตำบลดอนแร่ · ราชบุรี
                            </p>
                            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-text-primary leading-tight mb-4">
                                ดอนแร่<br />
                                <span className="gold-text">ถิ่นแห่งความงาม</span>
                            </h1>
                            <p className="font-sans text-text-secondary text-base md:text-lg max-w-md leading-relaxed mb-6">
                                มุ่งพัฒนาคุณภาพชีวิต สร้างชุมชนที่เข้มแข็ง ด้วยการบริหารท้องถิ่นที่โปร่งใสและมีประสิทธิภาพ
                            </p>
                            <div className="flex flex-wrap gap-3 pointer-events-auto">
                                <a href="#services" className="btn-primary">
                                    บริการประชาชน
                                </a>
                                <a href="#about" className="btn-outline">
                                    เรียนรู้เพิ่มเติม
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll cue — Zeigarnik Effect */}
                <motion.div
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none"
                    animate={{ opacity: progress > 0.05 ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <span className="text-text-muted text-[10px] font-sans uppercase">เลื่อนลง</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                        className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent"
                    />
                </motion.div>

                {/* Frame counter (dev/aesthetic) */}
                <div className="absolute top-6 right-6 text-text-muted text-[10px] font-sans tracking-widest opacity-40 pointer-events-none hidden md:block">
                    {Math.floor(progress * 191) + 1} / 192
                </div>
            </div>
        </section>
    )
}
