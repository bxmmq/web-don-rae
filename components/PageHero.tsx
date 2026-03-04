'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface PageHeroProps {
    label: string
    title: string
    accent?: string
    description?: string
    breadcrumb?: string
}

export default function PageHero({ label, title, accent, description, breadcrumb }: PageHeroProps) {
    return (
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden border-b border-border">
            {/* Background gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
                    style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,169,110,0.06) 0%, transparent 70%)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Breadcrumb */}
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 text-xs font-sans text-text-muted mb-6"
                >
                    <Link href="/" className="hover:text-accent transition-colors">หน้าแรก</Link>
                    <span>/</span>
                    <span className="text-text-secondary">{breadcrumb || title}</span>
                </motion.nav>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="section-label text-accent/70 mb-3"
                >
                    {label}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="section-heading mb-4"
                >
                    {title}
                    {accent && <><br /><span className="gold-text">{accent}</span></>}
                </motion.h1>

                {description && (
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-text-secondary font-sans text-base max-w-2xl leading-relaxed"
                    >
                        {description}
                    </motion.p>
                )}
            </div>
        </section>
    )
}
