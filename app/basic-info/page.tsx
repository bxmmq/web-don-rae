import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
    title: 'ข้อมูลพื้นฐาน | อบต.ดอนแร่',
    description: 'ข้อมูลพื้นฐานขององค์การบริหารส่วนตำบลดอนแร่ อำเภอเมือง จังหวัดราชบุรี',
}

export default function BasicInfoPage() {
    return (
        <>
            <PageHero
                label="ข้อมูลทั่วไป"
                title="ข้อมูลพื้นฐาน"
                accent="อบต.ดอนแร่"
                description="ข้อมูลพื้นฐานสำคัญขององค์การบริหารส่วนตำบลดอนแร่ สำหรับประชาชนและผู้ที่สนใจ"
            />
            <section className="py-20 px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {[
                            { label: 'ชื่อหน่วยงาน', value: 'องค์การบริหารส่วนตำบลดอนแร่' },
                            { label: 'ที่อยู่', value: 'ตำบลดอนแร่ อำเภอเมืองราชบุรี จังหวัดราชบุรี 70000' },
                            { label: 'โทรศัพท์', value: '032-207-048' },
                            { label: 'โทรสาร (Fax)', value: '032-207-049' },
                            { label: 'เว็บไซต์', value: 'www.donrae.go.th' },
                            { label: 'อีเมล', value: 'Donrae_Meuang@hotmail.com' },
                            { label: 'วันที่จัดตั้ง', value: '16 ธันวาคม 2539' },
                            { label: 'ขนาดพื้นที่', value: '22.6 ตารางกิโลเมตร' },
                        ].map((item) => (
                            <div key={item.label} className="glass-card p-5 hover:border-accent/25 transition-colors">
                                <p className="text-text-muted text-xs font-sans uppercase tracking-wider mb-1">{item.label}</p>
                                <p className="text-text-primary font-sans">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="glass-card p-8">
                        <h2 className="section-subheading mb-6">ประวัติความเป็นมา</h2>
                        <div className="space-y-4 text-text-secondary font-sans leading-relaxed">
                            <p>
                                องค์การบริหารส่วนตำบลดอนแร่ ได้รับการยกฐานะจากสภาตำบลดอนแร่ เป็นองค์การบริหารส่วนตำบล เมื่อวันที่ 16 ธันวาคม พ.ศ. 2539 ตามพระราชบัญญัติสภาตำบลและองค์การบริหารส่วนตำบล พ.ศ. 2537
                            </p>
                            <p>
                                ตำบลดอนแร่ตั้งอยู่ในเขตอำเภอเมืองราชบุรี จังหวัดราชบุรี มีพื้นที่ทั้งหมด 22.6 ตารางกิโลเมตร แบ่งการปกครองออกเป็น 10 หมู่บ้าน มีประชากรทั้งสิ้นประมาณ 4,379 คน อาชีพหลักของประชาชนคือเกษตรกรรม โดยเฉพาะการปลูกอ้อย มันสำปะหลัง และไร่ข้าวโพด
                            </p>
                            <p>
                                อบต.ดอนแร่ มีพันธกิจหลักในการพัฒนาโครงสร้างพื้นฐาน ส่งเสริมการศึกษาและสาธารณสุข รวมถึงอนุรักษ์ทรัพยากรธรรมชาติและสิ่งแวดล้อมในพื้นที่ตำบลดอนแร่
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
