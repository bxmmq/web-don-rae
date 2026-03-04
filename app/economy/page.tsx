import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
    title: 'สภาพทางเศรษฐกิจ | อบต.ดอนแร่',
    description: 'ข้อมูลสภาพทางเศรษฐกิจของตำบลดอนแร่ อำเภอเมือง จังหวัดราชบุรี',
}

export default function EconomyPage() {
    return (
        <>
            <PageHero
                label="เศรษฐกิจชุมชน"
                title="สภาพทางเศรษฐกิจ"
                description="ข้อมูลโครงสร้างเศรษฐกิจ อาชีพ รายได้ และการประกอบธุรกิจในเขตตำบลดอนแร่"
            />
            <section className="py-20 px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="max-w-5xl mx-auto space-y-10">

                    <div className="glass-card p-8">
                        <h2 className="section-subheading mb-6">อาชีพหลักของประชาชน</h2>

                        {/* ส่วนสำหรับใส่รูปภาพ PNG */}
                        <div className="mb-8 rounded-xl overflow-hidden border border-white/10 bg-black/20">
                            <img
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/ar.png`}
                                alt="อาชีพหลักของประชาชนในตำบลดอนแร่"
                                className="w-full h-auto object-cover max-h-[500px]"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { name: 'เกษตรกรรม', pct: '65%', icon: '🌾', desc: 'อ้อย มันสำปะหลัง ข้าวโพด' },
                                { name: 'รับจ้างทั่วไป', pct: '20%', icon: '🔧', desc: 'แรงงานในพื้นที่และนอกพื้นที่' },
                                { name: 'ค้าขาย', pct: '10%', icon: '🛒', desc: 'ตลาด ร้านค้า และพาณิชย์' },
                                { name: 'อุตสาหกรรม', pct: '3%', icon: '🏭', desc: 'โรงงานขนาดเล็ก' },
                                { name: 'ข้าราชการ', pct: '2%', icon: '🏛️', desc: 'ราชการ รัฐวิสาหกิจ' },
                            ].map((item) => (
                                <div key={item.name} className="bg-white/5 rounded-xl p-5 hover:bg-white/8 transition-colors">
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <div className="text-accent font-serif text-2xl font-semibold mb-1">{item.pct}</div>
                                    <div className="text-text-primary font-sans text-sm font-medium">{item.name}</div>
                                    <div className="text-text-muted text-xs font-sans mt-1">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card p-8">
                        <h2 className="section-subheading mb-6">สถานประกอบการในพื้นที่</h2>
                        <div className="space-y-3">
                            {[
                                { type: 'โรงงานอุตสาหกรรม', count: '3 แห่ง' },
                                { type: 'ร้านค้า/ซุปเปอร์มาร์เก็ต', count: '42 แห่ง' },
                                { type: 'ธนาคาร/สถาบันการเงิน', count: '2 แห่ง' },
                                { type: 'ปั๊มน้ำมัน', count: '4 แห่ง' },
                                { type: 'ตลาดสด', count: '2 แห่ง' },
                            ].map((s) => (
                                <div key={s.type} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                                    <span className="text-text-secondary font-sans">{s.type}</span>
                                    <span className="text-accent font-sans font-semibold">{s.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card p-8">
                        <h2 className="section-subheading mb-4">ผลผลิตทางการเกษตร</h2>
                        <p className="text-text-secondary font-sans leading-relaxed">
                            ตำบลดอนแร่มีพื้นที่เกษตรกรรมโดยประมาณ 24,000 ไร่ โดยพืชเศรษฐกิจหลัก ได้แก่ อ้อยโรงงาน มันสำปะหลัง และข้าวโพดเลี้ยงสัตว์ ซึ่งรองรับความต้องการของโรงงานน้ำตาลและโรงงานแป้งมันสำปะหลังในจังหวัดราชบุรีและใกล้เคียง
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
