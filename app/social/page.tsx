import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
    title: 'สภาพทางสังคม | อบต.ดอนแร่',
    description: 'ข้อมูลสภาพทางสังคม การศึกษา สาธารณสุข และวัฒนธรรมของตำบลดอนแร่',
}

export default function SocialPage() {
    return (
        <>
            <PageHero
                label="สังคมและวัฒนธรรม"
                title="สภาพทางสังคม"
                description="ข้อมูลด้านการศึกษา สาธารณสุข ศาสนา วัฒนธรรม และคุณภาพชีวิตในตำบลดอนแร่"
            />
            <section className="py-20 px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="max-w-5xl mx-auto space-y-8">
                    {[
                        {
                            title: 'การศึกษา',
                            icon: '🎓',
                            imageUrl: '/images/rr.png',
                            items: [
                                { label: 'โรงเรียนประถมศึกษา', value: '4 แห่ง' },
                                { label: 'ศูนย์พัฒนาเด็กเล็ก', value: '2 แห่ง' },
                                { label: 'อัตราการอ่านออกเขียนได้', value: '97%' },
                            ],
                            detail: 'อบต.ดอนแร่ให้ความสำคัญกับการพัฒนาการศึกษาของเด็กและเยาวชน โดยสนับสนุนทุนการศึกษา อุปกรณ์การเรียน และจัดกิจกรรมเสริมทักษะอาชีพ',
                        },
                        {
                            title: 'สาธารณสุข',
                            icon: '🏥',
                            imageUrl: '/images/p.png',
                            items: [
                                { label: 'โรงพยาบาลส่งเสริมสุขภาพตำบล', value: '2 แห่ง' },
                                { label: 'อาสาสมัครสาธารณสุข (อสม.)', value: '120+ คน' },
                                { label: 'ครัวเรือนที่เข้าถึงน้ำสะอาด', value: '98%' },
                            ],
                            detail: 'บริการสาธารณสุขพื้นฐานครอบคลุมทุกหมู่บ้าน ด้วยเครือข่าย อสม. ที่เข้มแข็ง และการรณรงค์สร้างเสริมสุขภาพชุมชน',
                        },
                        {
                            title: 'ศาสนาและวัฒนธรรม',
                            icon: '⛩️',
                            imageUrl: '/images/te.png',
                            items: [
                                { label: 'วัด', value: '8 แห่ง' },
                                { label: 'ศาลเจ้า/สถานที่สักการะ', value: '5 แห่ง' },
                                { label: 'จำนวนประชากรพุทธศาสนา', value: '96%' },
                            ],
                            detail: 'ชุมชนตำบลดอนแร่มีความศรัทธาในพระพุทธศาสนาอย่างลึกซึ้ง มีประเพณีท้องถิ่นที่สืบทอดมาอย่างยาวนาน เช่น ประเพณีทอดกฐิน สงกรานต์ และบุญข้าวใหม่',
                        },
                    ].map((section) => (
                        <div key={section.title} className="glass-card overflow-hidden hover:border-accent/25 transition-colors">
                            {/* ส่วนสำหรับใส่รูปภาพ PNG */}
                            {section.imageUrl && (
                                <div className="border-b border-white/10 bg-black/20">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${section.imageUrl}`}
                                        alt={section.title}
                                        className="w-full h-auto object-cover max-h-[300px]"
                                    />
                                </div>
                            )}
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-4xl">{section.icon}</span>
                                    <h2 className="section-subheading mb-0">{section.title}</h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                                    {section.items.map((item) => (
                                        <div key={item.label} className="bg-white/5 rounded-xl p-4">
                                            <div className="text-accent font-serif text-xl font-semibold">{item.value}</div>
                                            <div className="text-text-muted text-xs font-sans mt-1">{item.label}</div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-text-secondary font-sans text-sm leading-relaxed">{section.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
