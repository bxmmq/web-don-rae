import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
    title: 'สภาพทั่วไป | อบต.ดอนแร่',
    description: 'ข้อมูลสภาพทั่วไป ที่ตั้ง อาณาเขต และลักษณะภูมิประเทศของตำบลดอนแร่',
}

export default function GeneralPage() {
    return (
        <>
            <PageHero
                label="ลักษณะทั่วไป"
                title="สภาพทั่วไป"
                accent="ตำบลดอนแร่"
                description="ข้อมูลที่ตั้ง อาณาเขต ลักษณะภูมิประเทศ ภูมิอากาศ และทรัพยากรธรรมชาติของตำบลดอนแร่"
            />
            <section className="py-20 px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="max-w-5xl mx-auto space-y-8">

                    <div className="glass-card p-8">
                        <h2 className="section-subheading mb-6">ที่ตั้งและอาณาเขต</h2>
                        <p className="text-text-secondary font-sans leading-relaxed mb-6">
                            ตำบลดอนแร่ตั้งอยู่ในเขตอำเภอเมืองราชบุรี จังหวัดราชบุรี อยู่ห่างจากที่ว่าการอำเภอเมืองประมาณ 10 กิโลเมตร มีพื้นที่รวมทั้งหมด 22.6 ตารางกิโลเมตร
                        </p>

                        {/* ส่วนสำหรับใส่รูปภาพ PNG */}
                        <div className="mb-8 rounded-xl overflow-hidden border border-white/10 bg-black/20">
                            <img
                                src="/images/don.png"
                                alt="แผนที่ที่ตั้งและอาณาเขตตำบลดอนแร่"
                                className="w-full h-auto object-cover max-h-[500px]"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { dir: 'ทิศเหนือ', border: 'ติดต่อกับตำบลดอนตะโก อำเภอเมืองราชบุรี' },
                                { dir: 'ทิศใต้', border: 'ติดต่อกับตำบลเจดีย์หัก อำเภอเมืองราชบุรี' },
                                { dir: 'ทิศตะวันออก', border: 'ติดต่อกับตำบลหลุมดิน อำเภอเมืองราชบุรี' },
                                { dir: 'ทิศตะวันตก', border: 'ติดต่อกับตำบลน้ำพุ อำเภอเมืองราชบุรี' },
                            ].map((item) => (
                                <div key={item.dir} className="bg-white/5 rounded-xl p-4">
                                    <span className="text-accent font-sans text-xs font-semibold uppercase tracking-wider block mb-1">{item.dir}</span>
                                    <span className="text-text-secondary font-sans text-sm">{item.border}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card p-8">
                        <h2 className="section-subheading mb-6">ลักษณะภูมิประเทศและภูมิอากาศ</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h3 className="text-text-primary font-serif text-lg mb-3">ภูมิประเทศ</h3>
                                <p className="text-text-secondary font-sans text-sm leading-relaxed">
                                    พื้นที่ตำบลดอนแร่เป็นที่ราบลุ่มสลับกับที่ดอน มีแหล่งน้ำธรรมชาติหลายแห่ง เหมาะแก่การเกษตรกรรม โดยมีแม่น้ำแม่กลองไหลผ่านบริเวณตะวันออกของตำบล
                                </p>
                            </div>
                            <div>
                                <h3 className="text-text-primary font-serif text-lg mb-3">ภูมิอากาศ</h3>
                                <p className="text-text-secondary font-sans text-sm leading-relaxed">
                                    ภูมิอากาศแบบมรสุมสลับกับแบบสะวันนา มี 3 ฤดูกาล ได้แก่ ฤดูร้อน ฤดูฝน และฤดูหนาว อุณหภูมิเฉลี่ยอยู่ที่ 28–32 องศาเซลเซียส ปริมาณน้ำฝนเฉลี่ย 1,050 มิลลิเมตรต่อปี
                                </p>
                            </div>
                        </div>

                        {/* ส่วนสำหรับใส่รูปภาพ PNG */}
                        <div className="rounded-xl overflow-hidden border border-white/10 bg-black/20">
                            <img
                                src="/images/map.png"
                                alt="ลักษณะภูมิประเทศและภูมิอากาศตำบลดอนแร่"
                                className="w-full h-auto object-cover max-h-[500px]"
                            />
                        </div>
                    </div>

                    <div className="glass-card p-8">
                        <h2 className="section-subheading mb-6">การแบ่งเขตการปกครอง</h2>
                        <p className="text-text-secondary font-sans mb-4">ตำบลดอนแร่แบ่งการปกครองออกเป็น 10 หมู่บ้าน</p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {Array.from({ length: 10 }, (_, i) => (
                                <div key={i + 1} className="bg-white/5 rounded-lg p-3 text-center">
                                    <span className="text-accent font-serif text-lg font-semibold">หมู่ {i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
