'use client'

import { useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import Link from 'next/link'

const services = [
    {
        icon: '📋',
        title: 'บริการร้องทุกข์/ร้องเรียน',
        description: 'ยื่นเรื่องร้องทุกข์ แจ้งปัญหาในพื้นที่ ผ่านช่องทางออนไลน์หรือที่สำนักงาน',
        href: '#contact',
        featured: true,
    },
    {
        icon: '🏠',
        title: 'ทะเบียนและเอกสาร',
        description: 'ขอเอกสารทะเบียนราษฎร์ ใบรับรองต่าง ๆ และงานทะเบียนท้องถิ่น',
        href: '/basic-info',
        featured: false,
    },
    {
        icon: '💰',
        title: 'ชำระภาษีที่ดิน',
        description: 'ภาษีที่ดินและสิ่งปลูกสร้าง ภาษีป้าย และค่าธรรมเนียมต่าง ๆ',
        href: '#services',
        featured: false,
    },
    {
        icon: '🏗️',
        title: 'สาธารณูปโภคและโครงสร้าง',
        description: 'แจ้งซ่อมถนน ไฟฟ้า ประปา ท่อระบายน้ำ และสิ่งสาธารณะ',
        href: '/infrastructure',
        featured: false,
    },
    {
        icon: '🌱',
        title: 'สิ่งแวดล้อมและสุขาภิบาล',
        description: 'จัดเก็บขยะ รักษาความสะอาด และดูแลสิ่งแวดล้อมชุมชน',
        href: '/social',
        featured: false,
    },
    {
        icon: '🎓',
        title: 'การศึกษาและสวัสดิการ',
        description: 'ศูนย์พัฒนาเด็กเล็ก ทุนการศึกษา และสวัสดิการผู้สูงอายุ',
        href: '/social',
        featured: false,
    },
]

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function ServicesSection() {
    const ref = useRef<HTMLDivElement>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const firstChild = container.firstElementChild as HTMLElement;

            if (firstChild) {
                // Width of one item including the gap
                const itemWidth = firstChild.offsetWidth + 16;
                const currentScroll = container.scrollLeft;

                // Calculate next scroll position perfectly aligned to the items
                let targetScroll;

                if (direction === 'left') {
                    // Find the precise previous snap point
                    targetScroll = Math.floor(currentScroll - itemWidth);
                } else {
                    // Find the precise next snap point
                    targetScroll = Math.ceil(currentScroll + itemWidth);
                }

                // Let native smooth scrolling handle the animation and snapping
                container.scrollTo({
                    left: targetScroll,
                    behavior: 'smooth'
                });
            }
        }
    }

    return (
        <section id="services" ref={ref} className="py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
                >
                    <div>
                        <p className="section-label text-accent/70 mb-3">บริการหลัก</p>
                        <h2 className="section-heading">
                            บริการ<span className="gold-text">ประชาชน</span>
                        </h2>
                    </div>
                    <Link href="/#services" className="btn-outline self-start sm:self-auto">
                        ดูทั้งหมด →
                    </Link>
                </motion.div>

                {/* Grid — Von Restorff: featured card stands out */}
                <motion.div
                    ref={scrollContainerRef}
                    variants={container}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-8 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
                >
                    {services.map((s) => (
                        <motion.div
                            key={s.title}
                            variants={item}
                            className="w-[85vw] shrink-0 snap-center sm:w-auto sm:shrink sm:snap-align-none flex"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href={s.href}
                                className={`group flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-300 w-full min-h-[44px] block
                  ${s.featured
                                        ? 'bg-accent text-bg border-accent hover:bg-accent-light shadow-lg shadow-accent/20'
                                        : 'glass-card hover:border-accent/25 hover:-translate-y-1'
                                    }`}
                            >
                                <motion.span
                                    className="text-3xl inline-block"
                                    whileHover={{ rotate: [0, -10, 10, -10, 10, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {s.icon}
                                </motion.span>
                                <div>
                                    <h3 className={`font-serif text-lg font-semibold mb-2 leading-snug ${s.featured ? 'text-bg' : 'text-text-primary'}`}>
                                        {s.title}
                                    </h3>
                                    <p className={`text-sm font-sans leading-relaxed ${s.featured ? 'text-bg/70' : 'text-text-secondary'}`}>
                                        {s.description}
                                    </p>
                                </div>
                                <div className={`mt-auto text-sm font-sans font-semibold flex items-center gap-1 transition-gap duration-200 group-hover:gap-2 ${s.featured ? 'text-bg' : 'text-accent'}`}>
                                    เข้าถึงบริการ <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile scroll controls */}
                <div className="flex sm:hidden justify-center items-center gap-4 mt-6">
                    <button
                        onClick={() => scroll('left')}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-accent bg-bg/50 backdrop-blur-sm text-accent transition-all duration-300 hover:bg-accent/10 active:scale-95"
                        aria-label="Scroll left"
                    >
                        <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-border bg-bg/50 backdrop-blur-sm text-text-secondary transition-all duration-300 hover:bg-border/30 hover:text-text-primary active:scale-95"
                        aria-label="Scroll right"
                    >
                        <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
