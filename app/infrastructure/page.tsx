import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
    title: 'การบริการพื้นฐาน | อบต.ดอนแร่',
    description: 'ข้อมูลการบริการพื้นฐาน โครงสร้างพื้นฐาน ถนน ไฟฟ้า ประปา ของตำบลดอนแร่',
}

export default function InfrastructurePage() {
    return (
        <>
            <PageHero
                label="โครงสร้างพื้นฐาน"
                title="การบริการพื้นฐาน"
                description="ข้อมูลโครงสร้างพื้นฐานและการให้บริการสาธารณูปโภคในเขตตำบลดอนแร่"
            />
            <section className="py-20 px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="max-w-5xl mx-auto space-y-8">
                    {[
                        {
                            title: 'ถนนและการคมนาคม',
                            icon: '🛣️',
                            imageUrl: '/images/pic.png',
                            content: [
                                { label: 'ถนนลาดยาง/คอนกรีต', value: '42 สาย / 86.5 กม.' },
                                { label: 'ถนนลูกรัง', value: '18 สาย / 23.2 กม.' },
                                { label: 'สะพาน', value: '12 แห่ง' },
                            ],
                            detail: 'อบต.ดอนแร่ดำเนินการก่อสร้างและบำรุงรักษาถนนอย่างต่อเนื่อง เพื่อให้ประชาชนสามารถสัญจรได้สะดวกปลอดภัย โดยมีแผนพัฒนาถนนสายหลักให้ครบทุกหมู่บ้านภายในปี 2569',
                        },
                        {
                            title: 'ไฟฟ้า',
                            icon: '⚡',
                            imageUrl: '/images/pic12.png',
                            content: [
                                { label: 'ครัวเรือนที่มีไฟฟ้าใช้', value: '99.5%' },
                                { label: 'ไฟฟ้าสาธารณะ (หลอดไฟถนน)', value: '380 จุด' },
                                { label: 'หม้อแปลงไฟฟ้า', value: '34 ตัว' },
                            ],
                            detail: 'อบต.ดอนแร่ประสานงานกับการไฟฟ้าส่วนภูมิภาคเพื่อขยายเขตไฟฟ้าครอบคลุมทุกพื้นที่ และดูแลระบบไฟฟ้าสาธารณะให้ส่องสว่างในเส้นทางชุมชน',
                        },
                        {
                            title: 'ประปา',
                            icon: '💧',
                            imageUrl: '/images/pic13.png',
                            content: [
                                { label: 'ระบบประปาหมู่บ้าน', value: '8 แห่ง' },
                                { label: 'ครัวเรือนที่มีน้ำประปาใช้', value: '92%' },
                                { label: 'ปริมาณน้ำสำรอง', value: '3,200 ลบ.ม.' },
                            ],
                            detail: 'ระบบประปาหมู่บ้านได้รับการพัฒนาและดูแลโดยอบต.ดอนแร่ เพื่อให้ประชาชนได้รับน้ำสะอาดเพียงพอต่อการอุปโภคบริโภค',
                        },
                    ].map((s) => (
                        <div key={s.title} className="glass-card overflow-hidden hover:border-accent/25 transition-colors">
                            {/* ส่วนสำหรับใส่รูปภาพ PNG */}
                            {s.imageUrl && (
                                <div className="border-b border-white/10 bg-black/20">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${s.imageUrl}`}
                                        alt={s.title}
                                        className="w-full h-auto object-cover max-h-[300px]"
                                    />
                                </div>
                            )}
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-4xl">{s.icon}</span>
                                    <h2 className="section-subheading mb-0">{s.title}</h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                                    {s.content.map((c) => (
                                        <div key={c.label} className="bg-white/5 rounded-xl p-4">
                                            <div className="text-accent font-sans text-sm font-semibold">{c.value}</div>
                                            <div className="text-text-muted text-xs font-sans mt-1">{c.label}</div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-text-secondary font-sans text-sm leading-relaxed">{s.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
