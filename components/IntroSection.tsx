'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

const facts = [
    { label: 'ประชากร', value: '4,379', unit: 'คน', icon: '👥' },
    { label: 'ครัวเรือน', value: '131', unit: 'หลัง', icon: '🏡' },
    { label: 'พื้นที่', value: '22.6', unit: 'ตร.กม.', icon: '🗺️' },
    { label: 'หมู่บ้าน', value: '10', unit: 'หมู่บ้าน', icon: '🏘️' },
]

function AnimatedNumber({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: '-50px' })

    const numValue = parseFloat(value.replace(/,/g, ''))
    const isFloat = value.includes('.')

    const motionValue = useMotionValue(0)
    const displayValue = useTransform(motionValue, (latest) => {
        if (isFloat) {
            return latest.toFixed(1)
        }
        return Math.floor(latest).toLocaleString('en-US')
    })

    useEffect(() => {
        if (inView) {
            const controls = animate(motionValue, numValue, {
                duration: 2.5,
                ease: "easeOut",
            })
            return controls?.stop
        }
    }, [inView, motionValue, numValue])

    return <motion.span ref={ref}>{displayValue}</motion.span>
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
}

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function IntroSection() {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" ref={ref} className="relative py-24 md:py-36 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
            {/* Background subtle radial */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Left: Text */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate={inView ? 'show' : 'hidden'}
                    >
                        <motion.p variants={item} className="section-label text-accent/70 mb-4">
                            เกี่ยวกับ อบต.ดอนแร่
                        </motion.p>
                        <motion.h2 variants={item} className="section-heading mb-6">
                            บริหารท้องถิ่น<br />
                            <span className="gold-text">เพื่อประชาชน</span>
                        </motion.h2>
                        <motion.p variants={item} className="text-text-secondary font-sans text-base leading-relaxed mb-4">
                            องค์การบริหารส่วนตำบลดอนแร่ ตั้งอยู่ที่ตำบลดอนแร่ อำเภอเมืองราชบุรี จังหวัดราชบุรี มีหน้าที่ดูแลและพัฒนาท้องถิ่นในทุกด้าน ทั้งโครงสร้างพื้นฐาน การศึกษา สาธารณสุข และคุณภาพชีวิตของประชาชน
                        </motion.p>
                        <motion.p variants={item} className="text-text-secondary font-sans text-base leading-relaxed mb-8">
                            ด้วยนโยบายการบริหารที่โปร่งใส มีส่วนร่วม และมุ่งเน้นการพัฒนาอย่างยั่งยืน อบต.ดอนแร่ พร้อมเป็นหน่วยงานที่ประชาชนไว้วางใจได้
                        </motion.p>
                        <motion.div variants={item} className="flex flex-wrap gap-3">
                            <a href="#services" className="btn-primary">ดูบริการทั้งหมด</a>
                            <a href="/general" className="btn-outline">ข้อมูลตำบล</a>
                        </motion.div>
                    </motion.div>

                    {/* Right: Stats grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate={inView ? 'show' : 'hidden'}
                        className="grid grid-cols-2 gap-4"
                    >
                        {facts.map((f) => (
                            <motion.div
                                key={f.label}
                                variants={item}
                                className="glass-card p-6 flex flex-col gap-2 hover:border-accent/30 transition-colors duration-300 group"
                            >
                                <span className="text-3xl">{f.icon}</span>
                                <div>
                                    <div className="font-serif text-3xl md:text-4xl text-text-primary group-hover:gold-text transition-all duration-300">
                                        <AnimatedNumber value={f.value} />
                                    </div>
                                    <div className="text-text-muted text-xs font-sans">{f.unit}</div>
                                </div>
                                <div className="text-text-secondary text-sm font-sans">{f.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
