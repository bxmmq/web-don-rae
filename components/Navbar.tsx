'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import ContactChannelModal from '@/components/ContactChannelModal'

type NavItem = {
    label: string
    href: string
    children?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
    { label: 'หน้าแรก', href: '/' },
    {
        label: 'เกี่ยวกับเรา / ข้อมูลตำบล',
        href: '#about',
        children: [
            { label: 'ข้อมูลพื้นฐาน', href: '/basic-info' },
            { label: 'สภาพทั่วไป', href: '/general' },
            { label: 'สภาพทางเศรษฐกิจ', href: '/economy' },
            { label: 'สภาพทางสังคม', href: '/social' },
            { label: 'การบริการพื้นฐาน', href: '/infrastructure' },
        ]
    },
    { label: 'โครงสร้าง/บุคลากร', href: '/personnel' },
    { label: 'กฎหมายและระเบียบ', href: '/laws' },
    { label: 'ข่าวสารและกิจกรรม', href: '/gallery' },
]

const ChevronIcon = ({ className = "" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
)

function DesktopDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
    const [isOpen, setIsOpen] = useState(false)
    const isActive = item.children?.some(child => pathname === child.href)

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className={`flex items-center gap-1 relative px-3 py-2 text-xs font-sans transition-colors duration-200 rounded-lg hover:text-text-primary group ${isActive
                    ? 'text-accent'
                    : 'text-text-secondary hover:bg-white/5'
                    }`}
            >
                {item.label}
                <ChevronIcon className={`w-3 h-3 transition-transform duration-200 opacity-60 group-hover:opacity-100 ${isOpen ? 'rotate-180' : ''}`} />
                {isActive && (
                    <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                    />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-[220px] py-2 bg-[#0d0d0d]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/80 overflow-hidden transform-gpu"
                    >
                        {item.children?.map(child => (
                            <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className={`block w-full text-left px-4 py-2.5 text-xs font-sans transition-colors duration-200 ${pathname === child.href ? 'text-accent bg-accent/10' : 'text-text-secondary hover:text-text-primary hover:bg-white/5'}`}
                            >
                                {child.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

function MobileDropdown({ item, index, pathname, closeNav }: { item: NavItem; index: number; pathname: string; closeNav: () => void }) {
    const [isOpen, setIsOpen] = useState(false)
    const isActive = item.children?.some(child => pathname === child.href)

    return (
        <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.04, duration: 0.25 }}
            className="flex flex-col gap-1"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-between px-4 py-4 rounded-xl font-serif text-xl transition-all duration-200 ${(isActive && !isOpen)
                    ? 'text-accent bg-accent/5'
                    : 'text-text-primary hover:text-accent hover:bg-white/5'
                    }`}
            >
                <div className="flex items-center gap-3">
                    <span className="text-accent/40 font-sans text-xs w-5 text-right">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    {item.label}
                </div>
                <ChevronIcon className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : 'text-text-muted'}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="flex flex-col gap-1 pl-12 pr-4 pb-3 pt-1">
                            {item.children?.map(child => (
                                <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={closeNav}
                                    className={`py-3 px-4 rounded-xl font-sans text-sm transition-colors duration-200 ${pathname === child.href ? 'text-accent bg-accent/10 font-medium' : 'text-text-secondary hover:text-text-primary hover:bg-white/5'}`}
                                >
                                    {child.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [contactOpen, setContactOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close menu on route change for desktop mostly, handled separately for mobile children
    useEffect(() => { setOpen(false) }, [pathname])

    return (
        <>
            <ContactChannelModal
                open={contactOpen}
                onClose={() => setContactOpen(false)}
                phoneNumber="032-207-048"
                messengerUrl={process.env.NEXT_PUBLIC_MESSENGER_URL}
            />
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || open
                    ? 'bg-bg/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex flex-col leading-tight group z-50 relative">
                            <span className="font-serif text-lg font-semibold text-text-primary group-hover:gold-text transition-colors duration-300">
                                อบต.ดอนแร่
                            </span>
                            <span className="text-[10px] font-sans text-text-muted tracking-widest uppercase mt-0.5">
                                Donrae Subdistrict
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-1.5 absolute left-1/2 -translate-x-1/2">
                            {navItems.map((item) => (
                                item.children ? (
                                    <DesktopDropdown key={item.label} item={item} pathname={pathname} />
                                ) : (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`relative px-3 py-2 text-xs font-sans transition-colors duration-200 rounded-lg hover:text-text-primary group ${pathname === item.href
                                            ? 'text-accent'
                                            : 'text-text-secondary hover:bg-white/5'
                                            }`}
                                    >
                                        {item.label}
                                        {pathname === item.href && (
                                            <motion.div
                                                layoutId="nav-indicator"
                                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                                            />
                                        )}
                                    </Link>
                                )
                            ))}
                        </nav>

                        {/* CTA + Hamburger */}
                        <div className="flex items-center gap-4 z-50 relative">
                            <button
                                type="button"
                                onClick={() => setContactOpen(true)}
                                className="hidden sm:inline-flex btn-primary shadow-lg shadow-accent/20"
                            >
                                ติดต่อเรา
                            </button>
                            {/* Hamburger (mobile + tablet) */}
                            <button
                                onClick={() => setOpen(!open)}
                                className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 rounded-xl hover:bg-white/5 transition-colors"
                                aria-label="เมนู"
                            >
                                <motion.span
                                    animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                    className="block w-5 h-px bg-text-primary origin-center transition-all"
                                />
                                <motion.span
                                    animate={open ? { opacity: 0 } : { opacity: 1 }}
                                    className="block w-5 h-px bg-text-primary"
                                />
                                <motion.span
                                    animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                    className="block w-5 h-px bg-text-primary origin-center transition-all"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-[#050505] overflow-y-auto lg:hidden"
                    >
                        {/* Background subtle elements for mobile menu */}
                        <div className="absolute top-0 right-0 w-full h-96 bg-accent/5 blur-3xl rounded-full -translate-y-1/2 pointer-events-none" />

                        <div className="max-w-sm mx-auto px-6 py-24 flex flex-col gap-1.5 relative z-10 min-h-screen">
                            <div className="flex-1">
                                {navItems.map((item, i) => (
                                    item.children ? (
                                        <MobileDropdown key={item.label} item={item} index={i} pathname={pathname} closeNav={() => setOpen(false)} />
                                    ) : (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: -16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.04, duration: 0.25 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className={`flex items-center gap-3 px-4 py-4 rounded-xl font-serif text-xl transition-all duration-200 ${pathname === item.href
                                                    ? 'text-accent bg-accent/10'
                                                    : 'text-text-primary hover:text-accent hover:bg-white/5'
                                                    }`}
                                            >
                                                <span className="text-accent/40 font-sans text-xs w-5 text-right">
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    )
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                                className="mt-8 pt-8 border-t border-white/5"
                            >
                                <button
                                    type="button"
                                    onClick={() => {
                                        setOpen(false)
                                        setContactOpen(true)
                                    }}
                                    className="btn-primary w-full justify-center"
                                >
                                    ติดต่อ อบต.ดอนแร่
                                </button>
                                <div className="mt-8 text-center flex flex-col items-center gap-2">
                                    <span className="text-xs font-sans text-text-muted">© 2026 อบต.ดอนแร่</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
