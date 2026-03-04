'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const news = [
    {
        date: '28 กุมภาพันธ์ 2568',
        tag: 'ประกาศ',
        tagColor: 'text-blue-400 bg-blue-400/10',
        title: 'ประกาศรับสมัครพนักงานจ้างเหมาบริการ ประจำปีงบประมาณ 2568',
        excerpt: 'อบต.ดอนแร่ เปิดรับสมัครบุคคลเพื่อคัดเลือกเป็นพนักงานจ้างเหมาบริการ ตำแหน่งพนักงานทั่วไป จำนวน 3 อัตรา ตั้งแต่วันที่ 1–15 มีนาคม 2568',
        href: '#',
        primary: true,
    },
    {
        date: '25 กุมภาพันธ์ 2568',
        tag: 'ข่าวสาร',
        tagColor: 'text-green-400 bg-green-400/10',
        title: 'โครงการฝึกอบรมชุมชน "เกษตรอินทรีย์สู่รายได้ที่ยั่งยืน"',
        excerpt: 'อบต.ดอนแร่ ร่วมกับสำนักงานเกษตรจังหวัดราชบุรี จัดโครงการฝึกอบรม ณ ศูนย์เรียนรู้ชุมชนดอนแร่ ในวันที่ 10 มีนาคม 2568',
        href: '#',
        primary: false,
    },
    {
        date: '20 กุมภาพันธ์ 2568',
        tag: 'งบประมาณ',
        tagColor: 'text-yellow-400 bg-yellow-400/10',
        title: 'รายงานผลการดำเนินงานและงบประมาณรายจ่าย ประจำไตรมาสที่ 1/2568',
        excerpt: 'อบต.ดอนแร่ ขอรายงานผลการดำเนินงานตามแผนพัฒนาท้องถิ่นและการใช้จ่ายงบประมาณประจำไตรมาสที่ 1 ปีงบประมาณ 2568',
        href: '#',
        primary: false,
    },
]

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function NewsSection() {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="news" ref={ref} className="py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-24 bg-bg-card/40">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
                >
                    <div>
                        <p className="section-label text-accent/70 mb-3">ข่าวประชาสัมพันธ์</p>
                        <h2 className="section-heading">
                            ข่าวสาร<span className="gold-text">ล่าสุด</span>
                        </h2>
                    </div>
                    <Link href="#news" className="btn-outline self-start sm:self-auto text-sm">
                        ดูข่าวทั้งหมด →
                    </Link>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5"
                >
                    {news.map((n, i) => (
                        <motion.article
                            key={n.title}
                            variants={item}
                            className={`glass-card overflow-hidden hover:border-accent/25 transition-all duration-300 hover:-translate-y-1 group cursor-pointer
                ${n.primary ? 'md:col-span-2 md:row-span-1' : ''}`}
                        >
                            <Link href={n.href} className="block p-6 h-full flex flex-col gap-3">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-sans font-semibold uppercase ${n.tagColor}`}>
                                        {n.tag}
                                    </span>
                                    <time className="text-text-muted text-[11px] font-sans">{n.date}</time>
                                </div>
                                <h3 className={`font-serif text-text-primary group-hover:text-accent transition-colors duration-200 leading-snug ${n.primary ? 'text-xl' : 'text-base'}`}>
                                    {n.title}
                                </h3>
                                <p className="text-text-secondary text-sm font-sans leading-relaxed flex-1">
                                    {n.excerpt}
                                </p>
                                <span className="text-accent text-xs font-sans font-semibold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                                    อ่านต่อ <span>→</span>
                                </span>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
