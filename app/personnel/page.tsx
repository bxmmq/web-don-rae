import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
    title: 'บุคลากร | อบต.ดอนแร่',
    description: 'ข้อมูลบุคลากรและโครงสร้างองค์กรขององค์การบริหารส่วนตำบลดอนแร่',
}

const departments = [
    {
        name: 'สำนักปลัด',
        head: 'นางนาถนภา ป้อมน้อย',
        position: 'หัวหน้าสำนักปลัด',
        image: '/images/natnapa.png',
        members: [
            { name: 'นายทวีป จันทร์จุฬาลักษณ์', position: 'นักพัฒนาชุมชนชำนาญการ' },
            { name: 'นายสมชาย รักดี', position: 'เจ้าพนักงานธุรการ' },
            { name: 'นางสาวภรภัทร อินทร์บุญ', position: 'นักวิเคราะห์นโยบายและแผนชำนาญการ' },
            { name: 'นายธัชชัย ตั้งวัฒนากูล', position: 'นักป้องกันและบรรเทาสาธารณภัยชำนาญการ' },
            { name: 'นางสมใจ ดวงจันทร์', position: 'เจ้าพนักงานธุรการ' },
            { name: 'นายโชติพัฒน์ โสดยวง', position: 'ผช.นักวิเคราะห์ฯ' },
            { name: 'นางสาวมนธิรา การะเกตุ', position: 'ผช.นักพัฒนาชุมชน' },
            { name: 'นายวิศรุต ศิริวงศ์', position: 'ผช.เจ้าพนักงานธุรการ' },
            { name: 'นายพนม เอี่ยมทราย', position: 'ผช.เจ้าพนักงานป้องกันฯ' },
            { name: 'นายอุดม ดาวเรือง', position: 'คนงานทั่วไป' },
            { name: 'นายจรัส ชมใจ', position: 'คนงานทั่วไป' },
            { name: 'นายมนัส บุญช่วย', position: 'คนงานทั่วไป' },
            { name: 'นายปัญญา อาจจิตต', position: 'ยาม' },
            { name: 'นายพรเทวา จันดา', position: 'คนงาน' },
            { name: 'นางสาวจริยา สิทธิสร', position: 'นักการ' },
            { name: 'นายเสริม แสงจันทร์แจ้ง', position: 'จ้างเหมา' },
            { name: 'นางสาวกมลวรรณ สุขเขียว', position: 'จ้างเหมา' },
        ],
    },
    {
        name: 'กองคลัง',
        head: 'นางสาวกนกวรรณ พรหมจันทร์',
        position: 'ผู้อำนวยการกองคลัง',
        image: '/images/kanokwan.png',
        members: [
            { name: 'นางสาวนันณภัชสรณ์ ถาวร', position: 'เจ้าพนักงานธุรการปฏิบัติงาน' },
            { name: 'นางสาวอรุณี  แสงมณี', position: 'ผู้ช่วยเจ้าพนักงานการเงินและบัญชี' },
            { name: 'นางสาวมัณฑนา  กิจติสร้าง', position: 'ผู้ช่วยเจ้าพนักงานจัดเก็บรายได้' },
            { name: 'นางสาวณัชชา  ปุริพรรณ', position: 'ผู้ช่วยเจ้าพนักงานจัดเก็บรายได้' },
            { name: 'นายวิทยา ผกาแก้ว', position: 'ผู้ช่วยเจ้าพนักงานพัสดุ' },
            { name: 'นางสาวชนัญชิดา บัวบุญเลิศ', position: 'คนงาน' },
        ],
    },
    {
        name: 'กองช่าง',
        head: 'นายชัยณรงค์ ศรีมิ่งวงค์',
        position: 'ผู้อำนวยการกองช่าง',
        image: '/images/chainarong.png',
        members: [
            { name: 'นายสมโชค  มณีจันทร์', position: 'นายช่างโยธา' },
            { name: 'นายนิน สิทธิสร', position: 'ผู้ช่วยนายช่างไฟฟ้า' },
            { name: 'นายสุรชัย  มณีจันทร์', position: 'คนงาน' },
            { name: 'นายมนตรี  สุดเส็งพันธ์', position: 'คนงาน' },
            { name: 'นางสาวปิยะนุช พาหาวงษ์', position: 'คนงาน' },
        ],
    },
    {
        name: 'กองการศึกษาฯ',
        head: 'นางพัชรี โคยะพันธุ์',
        position: 'ผู้อำนวยการกองการศึกษา',
        image: '/images/patcharee.png',
        members: [
            { name: 'นางสาวสายพิน  พรมฟ้า', position: 'นักวิชาการศึกษา' },
            { name: 'นางสาวอรุณ  ดวงตา', position: 'ครูคศ.1' },
            { name: 'นางสาวอลิสา  สุมาลี', position: 'ผู้ช่วยเจ้าพนักงานธุรการ' },
            { name: 'นางสาวพัชชา อมดวง', position: 'ผู้ดูแลเด็ก' },
            { name: 'นางสาววิจิตรา มีมาก', position: 'ผู้เด็กเล็ก' },
            { name: 'นางสาวจรินทร์ดา รวมญาติ', position: 'คนงาน' },
        ],
    },
]

export default function PersonnelPage() {
    // รวมจำนวนบุคลากรทั้งหมด = ปลัด 1 คน + หัวหน้าส่วนและสมาชิกในแต่ละส่วน
    const totalPersonnel = 1 + departments.reduce((acc, dept) => acc + 1 + dept.members.length, 0);

    return (
        <>
            <PageHero
                label="โครงสร้างองค์กร"
                title="บุคลากร"
                accent="อบต.ดอนแร่"
                description="ข้อมูลบุคลากรและโครงสร้างการบริหารงานขององค์การบริหารส่วนตำบลดอนแร่ ประจำปีงบประมาณ 2568"
            />

            <section className="py-20 px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    {/* Chief Administrator */}
                    <div className="mb-16">
                        <h2 className="section-subheading mb-8 text-center">ปลัดอบต.ดอนแร่</h2>
                        <div className="flex justify-center">
                            <div className="glass-card p-6 text-center hover:border-accent/30 transition-colors w-full max-w-sm">
                                <div className="mb-6 mx-auto w-48 h-64 overflow-hidden rounded-xl border-4 border-accent/20 shadow-lg">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/nittaya.jpg`}
                                        alt="นส.นิตยา บัวแย้ม"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h3 className="font-serif text-2xl text-text-primary mb-2">นส.นิตยา บัวแย้ม</h3>
                                <p className="text-accent text-sm font-sans mb-1">ปลัดองค์การบริหารส่วนตำบลดอนแร่</p>
                            </div>
                        </div>
                    </div>

                    {/* Departments */}
                    <h2 className="section-subheading mb-8">สำนัก/กอง</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {departments.map((dept) => (
                            <details key={dept.name} className="glass-card hover:border-accent/25 transition-colors group" open>
                                <summary className="p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden focus:outline-none flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group-open:pb-4 transition-all">
                                    <div className="flex items-center gap-4 sm:gap-6">
                                        {dept.image && (
                                            <div className="flex-shrink-0 w-20 h-24 sm:w-24 sm:h-28 overflow-hidden rounded-xl border-2 border-accent/20 shadow-md">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${dept.image}`}
                                                    alt={dept.head}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        )}
                                        <div>
                                            <h3 className="font-serif text-xl sm:text-2xl text-text-primary mb-1">{dept.name}</h3>
                                            <p className="text-accent text-sm sm:text-base font-sans mt-1">{dept.head}</p>
                                            <p className="text-text-muted text-xs sm:text-sm font-sans">{dept.position}</p>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 self-end sm:self-auto bg-black/10 dark:bg-white/5 p-2 rounded-full text-text-muted group-open:rotate-180 transition-transform duration-300">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </div>
                                </summary>
                                <div className="px-6 pb-6">
                                    <div className="border-t border-border pt-4">
                                        <ul className="flex flex-col gap-2">
                                            {dept.members.map((m) => (
                                                <li key={m.name} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 py-1">
                                                    <span className="text-text-primary font-sans text-sm">{m.name}</span>
                                                    <span className="text-text-muted text-xs font-sans sm:ml-auto">{m.position}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </details>
                        ))}
                    </div>

                    {/* Total Personnel Statistics */}
                    <div className="mt-12 flex justify-center">
                        <div className="glass-card px-8 py-4 inline-flex items-center gap-4 hover:border-accent/30 transition-colors">
                            <span className="text-text-primary font-sans text-sm sm:text-base">จำนวนบุคลากรทั้งหมด</span>
                            <span className="text-accent font-serif font-bold text-3xl sm:text-4xl">{totalPersonnel}</span>
                            <span className="text-text-primary font-sans text-sm sm:text-base">คน</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
