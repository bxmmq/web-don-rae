'use client'

import { useEffect, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
    open: boolean
    onClose: () => void
    phoneNumber: string
    messengerUrl?: string
}

function normalizeTelHref(phoneNumber: string) {
    const cleaned = phoneNumber.trim().replace(/[^\d+]/g, '')
    return cleaned ? `tel:${cleaned}` : 'tel:'
}

function normalizeMessengerChatUrl(url: string | undefined) {
    if (!url) return null
    try {
        const u = new URL(url)
        if (u.protocol !== 'https:') return null

        // Best-case: already a direct Messenger chat link
        if (u.hostname === 'm.me') return u.toString()

        // Facebook message thread links
        if (u.hostname.endsWith('facebook.com') && u.pathname.startsWith('/messages/')) return u.toString()

        // Common case: user pastes a Page URL (convert to m.me/<username>)
        if (u.hostname.endsWith('facebook.com')) {
            const parts = u.pathname.split('/').filter(Boolean)
            const candidate = parts[0]
            if (candidate && candidate !== 'profile.php' && candidate !== 'pages') {
                return `https://m.me/${candidate}`
            }
        }

        return null
    } catch {
        return null
    }
}

const PhoneIcon = ({ className = '' }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
            d="M6.6 3.6c.5-.5 1.3-.5 1.9 0l2 2c.5.5.5 1.3 0 1.9l-1.4 1.4c-.2.2-.3.6-.2.9.7 2.1 2.4 3.8 4.5 4.5.3.1.7 0 .9-.2l1.4-1.4c.5-.5 1.3-.5 1.9 0l2 2c.5.5.5 1.3 0 1.9l-1.2 1.2c-.9.9-2.3 1.3-3.6 1-6.6-1.6-11.7-6.7-13.3-13.3-.3-1.3.1-2.7 1-3.6L6.6 3.6Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
        />
    </svg>
)

const MessengerIcon = ({ className = '' }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
            d="M12 3.5c-4.9 0-8.9 3.7-8.9 8.3 0 2.6 1.3 4.9 3.3 6.4V21l2.7-1.5c.9.3 1.8.5 2.9.5 4.9 0 8.9-3.7 8.9-8.3S16.9 3.5 12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
        />
        <path
            d="M7.9 14.1 11 10.8c.3-.3.8-.3 1.1 0l1.8 1.8c.3.3.8.3 1.1 0l3.1-3.1"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default function ContactChannelModal({ open, onClose, phoneNumber, messengerUrl }: Props) {
    const telHref = useMemo(() => normalizeTelHref(phoneNumber), [phoneNumber])
    const messengerChatUrl = useMemo(() => normalizeMessengerChatUrl(messengerUrl), [messengerUrl])

    useEffect(() => {
        if (!open) return

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        document.addEventListener('keydown', onKeyDown)
        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.body.style.overflow = prevOverflow
        }
    }, [open, onClose])

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="fixed inset-0 z-[60]"
                    aria-modal="true"
                    role="dialog"
                    aria-label="เลือกช่องทางติดต่อ"
                >
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute inset-0 bg-black/65 backdrop-blur-sm"
                        aria-label="ปิดหน้าต่าง"
                    />

                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, y: 16, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 16, scale: 0.98 }}
                            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full max-w-md glass-card border border-white/10 shadow-2xl shadow-black/60 p-6 sm:p-7"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="section-label text-accent/70 mb-2">ติดต่อเรา</p>
                                    <h3 className="font-serif text-2xl text-text-primary leading-tight">เลือกช่องทาง</h3>
                                    <p className="text-text-secondary font-sans text-sm mt-2">
                                        เลือกได้ว่าจะโทรออก หรือทักแชทผ่าน Messenger
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="w-10 h-10 rounded-xl hover:bg-white/5 transition-colors text-text-muted hover:text-text-primary flex items-center justify-center"
                                    aria-label="ปิด"
                                >
                                    <span className="text-xl leading-none">×</span>
                                </button>
                            </div>

                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <a
                                    href={telHref}
                                    onClick={onClose}
                                    className="group rounded-2xl border border-border bg-white/5 hover:bg-white/7 transition-colors p-4 flex items-center gap-3 min-h-[72px]"
                                >
                                    <span className="w-11 h-11 rounded-2xl bg-accent/12 text-accent flex items-center justify-center">
                                        <PhoneIcon className="w-6 h-6" />
                                    </span>
                                    <div className="flex-1">
                                        <p className="text-text-primary font-sans text-sm font-semibold">โทรออก</p>
                                        <p className="text-text-muted font-sans text-[11px] sm:text-xs mt-0.5 whitespace-nowrap tabular-nums">
                                            {phoneNumber}
                                        </p>
                                    </div>
                                    <span className="text-text-muted group-hover:text-accent transition-colors">→</span>
                                </a>

                                {messengerChatUrl ? (
                                    <a
                                        href={messengerChatUrl}
                                        onClick={onClose}
                                        className="group rounded-2xl border border-border bg-white/5 hover:bg-white/7 transition-colors p-4 flex items-center gap-3 min-h-[72px]"
                                    >
                                        <span className="w-11 h-11 rounded-2xl bg-blue-500/15 text-blue-300 flex items-center justify-center">
                                            <MessengerIcon className="w-6 h-6" />
                                        </span>
                                        <div className="flex-1">
                                            <p className="text-text-primary font-sans text-sm font-semibold">Messenger</p>
                                            <p className="text-text-muted font-sans text-xs mt-0.5">เริ่มแชท</p>
                                        </div>
                                        <span className="text-text-muted group-hover:text-blue-300 transition-colors">→</span>
                                    </a>
                                ) : (
                                    <button
                                        type="button"
                                        disabled
                                        className="rounded-2xl border border-border bg-white/5 opacity-60 p-4 flex items-center gap-3 min-h-[72px] cursor-not-allowed"
                                        aria-disabled="true"
                                        title="ยังไม่ได้ตั้งค่า NEXT_PUBLIC_MESSENGER_URL ให้เป็นลิงก์แชท (เช่น https://m.me/100064414792260)"
                                    >
                                        <span className="w-11 h-11 rounded-2xl bg-blue-500/15 text-blue-300 flex items-center justify-center">
                                            <MessengerIcon className="w-6 h-6" />
                                        </span>
                                        <div className="flex-1 text-left">
                                            <p className="text-text-primary font-sans text-sm font-semibold">Messenger</p>
                                            <p className="text-text-muted font-sans text-xs mt-0.5">ยังไม่ได้ตั้งค่าลิงก์</p>
                                        </div>
                                        <span className="text-text-muted">—</span>
                                    </button>
                                )}
                            </div>

                            <div className="mt-5 flex items-center justify-between gap-3">
                                <p className="text-text-muted font-sans text-xs">
                                    กดปุ่มด้านนอกเพื่อปิด หรือกด Esc
                                </p>
                                <button type="button" onClick={onClose} className="btn-outline px-4 py-2">
                                    ปิด
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

