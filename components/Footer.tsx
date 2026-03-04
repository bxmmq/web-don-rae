'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const quickLinks = [
    { label: 'หน้าแรก', href: '/' },
    { label: 'ข้อมูลพื้นฐาน', href: '/basic-info' },
    { label: 'สภาพทั่วไป', href: '/general' },
    { label: 'บุคลากร', href: '/personnel' },
    { label: 'กฎหมาย/ระเบียบ', href: '/laws' },
    { label: 'ประมวลภาพกิจกรรม', href: '/gallery' },
]

const services = [
    { label: 'ร้องทุกข์ / ร้องเรียน', href: '#contact' },
    { label: 'ชำระภาษีที่ดิน', href: '#services' },
    { label: 'ขอข้อมูลข่าวสาร', href: '#news' },
    { label: 'ติดต่อสอบถาม', href: '#contact' },
]

export default function Footer() {
    return (
        <footer className="relative bg-bg border-t border-border overflow-hidden">
            {/* Natural light effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <div className="font-serif text-2xl font-semibold text-text-primary">อบต.ดอนแร่</div>
                            <div className="text-[10px] font-sans text-text-muted tracking-widest uppercase mt-1">
                                Don Rae SAO
                            </div>
                        </Link>
                        <p className="text-text-secondary text-sm leading-relaxed font-sans mt-4 max-w-xs">
                            องค์การบริหารส่วนตำบลดอนแร่ มุ่งพัฒนาคุณภาพชีวิตของประชาชน ด้วยความโปร่งใส ซื่อสัตย์ และมีประสิทธิภาพ
                        </p>
                        {/* Emergency Numbers */}
                        <div className="mt-6 p-4 rounded-xl bg-red-950/30 border border-red-900/30">
                            <p className="text-[10px] font-sans uppercase text-red-400/70 mb-2">เบอร์ฉุกเฉิน</p>
                            <div className="flex flex-col gap-1">
                                <a href="tel:1669" className="flex items-center gap-2 text-red-400 font-sans font-semibold text-sm hover:text-red-300 transition-colors">
                                    <span className="text-lg">🚑</span> 1669 — กู้ชีพฉุกเฉิน
                                </a>
                                <a href="tel:199" className="flex items-center gap-2 text-orange-400 font-sans font-semibold text-sm hover:text-orange-300 transition-colors">
                                    <span className="text-lg">🚒</span> 199 — ดับเพลิง
                                </a>
                                <a href="tel:191" className="flex items-center gap-2 text-blue-400 font-sans font-semibold text-sm hover:text-blue-300 transition-colors">
                                    <span className="text-lg">👮</span> 191 — ตำรวจ
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="section-label mb-4">ลิงก์ด่วน</h3>
                        <ul className="flex flex-col gap-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-text-secondary text-sm font-sans hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="section-label mb-4">บริการประชาชน</h3>
                        <ul className="flex flex-col gap-2">
                            {services.map((s) => (
                                <li key={s.href}>
                                    <Link
                                        href={s.href}
                                        className="text-text-secondary text-sm font-sans hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="section-label mb-4">ที่อยู่และติดต่อ</h3>
                        <address className="not-italic text-text-secondary text-sm font-sans leading-relaxed flex flex-col gap-3">
                            <div className="flex gap-3">
                                <span className="text-accent mt-0.5 flex-shrink-0">📍</span>
                                <span>ตำบลดอนแร่ อำเภอเมือง จังหวัดราชบุรี 70000</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-accent flex-shrink-0">📞</span>
                                <a href="tel:032207048" className="hover:text-accent transition-colors">032-207-048</a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-accent flex-shrink-0">📠</span>
                                <span>032-207-049</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-accent flex-shrink-0">✉️</span>
                                <a href="mailto:Donrae_Meuang@hotmail.com" className="hover:text-accent transition-colors break-all">
                                    Donrae_Meuang@hotmail.com
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-accent flex-shrink-0">🕒</span>
                                <span>จันทร์–ศุกร์ 08:30–16:30 น.</span>
                            </div>
                        </address>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="divider-gold mt-12 mb-6" />
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-text-muted text-xs font-sans">
                    <p>© {new Date().getFullYear()} องค์การบริหารส่วนตำบลดอนแร่ สงวนลิขสิทธิ์</p>
                    <p>พัฒนาโดย กองเทคโนโลยีสารสนเทศ อบต.ดอนแร่</p>
                </div>
            </div>
        </footer>
    )
}
