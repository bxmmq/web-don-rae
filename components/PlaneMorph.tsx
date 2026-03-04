'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useImagePreloader } from '@/hooks/useImagePreloader'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export default function PlaneMorph() {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const progress = useScrollProgress(containerRef as React.RefObject<HTMLElement>)
    const { images, loaded, progress: loadProgress } = useImagePreloader({
        folder: 'sequence-2',
        totalFrames: 192,
    })

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

        const dpr = window.devicePixelRatio || 1
        const w = canvas.clientWidth * dpr
        const h = canvas.clientHeight * dpr
        if (canvas.width !== w || canvas.height !== h) {
            canvas.width = w
            canvas.height = h
        }

        ctx.clearRect(0, 0, w, h)

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

    // Text reveals based on progress
    const showIntro = progress < 0.4
    const showOutro = progress >= 0.6

    return (
        <section ref={containerRef} className="relative h-[400vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
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

                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-transparent to-bg/70 pointer-events-none" />

                {/* Natural light — top right */}
                <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'radial-gradient(ellipse 50% 35% at 80% 10%, rgba(201,169,110,0.08) 0%, transparent 70%)'
                }} />

                {/* Intro text */}
                <motion.div
                    animate={{ opacity: showIntro ? 1 : 0, y: showIntro ? 0 : -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full px-6 pointer-events-none"
                >
                    <div className="glass-card p-6 sm:p-10 max-w-2xl bg-black/20 border-white/10 backdrop-blur-sm flex flex-col items-center">
                        <p className="section-label text-accent mb-4 text-center font-medium">ภูมิประเทศและธรรมชาติ</p>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-center text-text-primary leading-tight">
                            ผืนดินที่อบอวลด้วย<br />
                            <span className="gold-text">ธรรมชาติและวัฒนธรรม</span>
                        </h2>
                    </div>
                </motion.div>

                {/* Outro text */}
                <motion.div
                    animate={{ opacity: showOutro ? 1 : 0, y: showOutro ? 0 : 20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-0 left-0 right-0 pb-16 md:pb-24 px-6 sm:px-10 md:px-16 pointer-events-none"
                >
                    <div className="glass-card p-6 sm:p-8 md:p-10 max-w-lg bg-black/20 border-white/10 backdrop-blur-sm">
                        <p className="section-label text-accent mb-3 font-medium">วิสัยทัศน์ อบต.ดอนแร่</p>
                        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-text-primary mb-3 leading-tight">
                            &quot;ดอนแร่น่าอยู่ ประชาชนมีคุณภาพชีวิตที่ดี&quot;
                        </h2>
                        <p className="text-text-secondary text-base font-sans leading-relaxed">
                            <span className="block text-[10px] md:text-sm text-[#B39352] uppercase font-sans mb-1 font-medium">
                                &quot;Vision of Development&quot; <br></br> &quot;วิสัยทัศน์การพัฒนา&quot;
                            </span>
                            พัฒนาโครงสร้างพื้นฐานและสังคม เพื่อความเป็นอยู่ที่ดีของชาวดอนแร่ทุกคน
                        </p>
                    </div>
                </motion.div>

                {/* Frame counter */}
                <div className="absolute top-6 right-6 text-text-muted text-[10px] font-sans tracking-widest opacity-40 pointer-events-none hidden md:block">
                    {Math.floor(progress * 191) + 1} / 192
                </div>
            </div>
        </section>
    )
}
