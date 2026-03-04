'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ContactSection() {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [form, setForm] = useState({ name: '', phone: '', topic: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <section id="contact" ref={ref} className="py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="mb-12"
                >
                    <p className="section-label text-accent/70 mb-3">ติดต่อเรา</p>
                    <h2 className="section-heading">
                        เราพร้อม<span className="gold-text">รับฟัง</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                    {/* Contact form — Postel's Law: flexible input */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        {submitted ? (
                            <div className="glass-card p-10 flex flex-col items-center justify-center gap-4 text-center min-h-[400px]">
                                <div className="text-5xl">✅</div>
                                <h3 className="font-serif text-2xl text-text-primary">ส่งเรื่องสำเร็จแล้ว!</h3>
                                <p className="text-text-secondary font-sans">เจ้าหน้าที่จะติดต่อกลับภายใน 1–3 วันทำการ</p>
                                <button onClick={() => setSubmitted(false)} className="btn-outline mt-4">
                                    ส่งเรื่องใหม่
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-text-muted text-xs font-sans uppercase">ชื่อ-นามสกุล</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="กรุณากรอกชื่อ"
                                            className="px-4 py-3 rounded-xl bg-white/5 border border-border text-text-primary font-sans text-sm focus:outline-none focus:border-accent/50 transition-colors placeholder:text-text-muted min-h-[44px]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-text-muted text-xs font-sans uppercase">เบอร์โทรศัพท์</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="0XX-XXX-XXXX"
                                            className="px-4 py-3 rounded-xl bg-white/5 border border-border text-text-primary font-sans text-sm focus:outline-none focus:border-accent/50 transition-colors placeholder:text-text-muted min-h-[44px]"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-text-muted text-xs font-sans uppercase">เรื่องที่ต้องการติดต่อ</label>
                                    <select
                                        name="topic"
                                        value={form.topic}
                                        onChange={handleChange}
                                        className="px-4 py-3 rounded-xl bg-white/5 border border-border text-text-primary font-sans text-sm focus:outline-none focus:border-accent/50 transition-colors min-h-[44px] appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-bg">-- เลือกหัวข้อ --</option>
                                        <option value="complaint" className="bg-bg">ร้องทุกข์/ร้องเรียน</option>
                                        <option value="service" className="bg-bg">ขอรับบริการ</option>
                                        <option value="tax" className="bg-bg">ภาษีและค่าธรรมเนียม</option>
                                        <option value="road" className="bg-bg">ถนนและสาธารณูปโภค</option>
                                        <option value="other" className="bg-bg">อื่น ๆ</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-text-muted text-xs font-sans uppercase">รายละเอียด</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="กรุณาอธิบายรายละเอียดเพิ่มเติม..."
                                        className="px-4 py-3 rounded-xl bg-white/5 border border-border text-text-primary font-sans text-sm focus:outline-none focus:border-accent/50 transition-colors placeholder:text-text-muted resize-none"
                                    />
                                </div>
                                <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                                    ส่งเรื่อง →
                                </button>
                                <p className="text-text-muted text-xs font-sans text-center">
                                    หรือโทร <a href="tel:032207048" className="text-accent hover:underline">032-207-048</a> ในวันและเวลาราชการ
                                </p>
                            </form>
                        )}
                    </motion.div>

                    {/* Map + info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Map embed */}
                        <div className="rounded-2xl overflow-hidden border border-border h-64 md:h-72">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sus!4v1772313874256!5m2!1sen!2sus!6m8!1m7!1s9_aWiS2WRO_eEFNCBROW5w!2m2!1d13.48303530077585!2d99.76935520312345!3f326.1582968844682!4f0.17241253655369349!5f0.7820865974627469"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="แผนที่ อบต.ดอนแร่"
                            />
                        </div>

                        {/* Info cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                { icon: '📍', label: 'ที่อยู่', value: 'ตำบลดอนแร่ อ.เมือง จ.ราชบุรี 70000' },
                                { icon: '📞', label: 'โทรศัพท์', value: '032-337-061', href: 'tel:032337061' },
                                { icon: '🕒', label: 'เวลาทำการ', value: 'จ.–ศ. 08:30–16:30 น.' },
                                { icon: '✉️', label: 'อีเมล', value: 'info@donrae.go.th', href: 'mailto:info@donrae.go.th' },
                            ].map((info) => (
                                <div key={info.label} className="glass-card p-4 flex gap-3 items-start">
                                    <span className="text-xl flex-shrink-0 mt-0.5">{info.icon}</span>
                                    <div>
                                        <p className="text-text-muted text-[10px] font-sans uppercase mb-0.5">{info.label}</p>
                                        {info.href ? (
                                            <a href={info.href} className="text-text-primary font-sans text-sm hover:text-accent transition-colors">{info.value}</a>
                                        ) : (
                                            <p className="text-text-primary font-sans text-sm">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
