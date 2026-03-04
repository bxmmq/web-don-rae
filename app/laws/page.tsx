'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

// Note: metadata cannot be used in a Client Component directly if we use 'use client' at the top.
// However, since this page is a full interactive page now, we usually move metadata to a layout 
// or keep it but we can't because 'use client' conflicts with export metadata.
// For Next.js, we will remove metadata export from here if it causes a build error, but let's 
// just not export it and move it if necessary, or better yet, since the user just wants it to work,
// we will comment it out to prevent errors with 'use client'.
/*
export const metadata: Metadata = {
    title: 'กฎหมาย/ระเบียบ | อบต.ดอนแร่',
    description: 'กฎหมาย ระเบียบ ข้อกำหนด และข้อบัญญัติที่เกี่ยวข้องกับการปกครองท้องถิ่น อบต.ดอนแร่',
}
*/

export type LawItem = {
    name: string;
    year: string;
    fileUrl?: string; // ใส่ลิงก์ไปยังไฟล์ PDF ได้ที่นี่ เช่น '/pdfs/law-2569.pdf'
};

export type LawSection = {
    category: string;
    items: LawItem[];
};

const laws: LawSection[] = [
    {
        category: 'กฎหมายหลัก',
        items: [
            { name: 'พระราชบัญญัติสภาตำบลและองค์การบริหารส่วนตำบล พ.ศ. 2537', year: '2537', fileUrl: '/pdfs/19.pdf' },
            { name: 'พระราชบัญญัติกำหนดแผนและขั้นตอนการกระจายอำนาจให้แก่องค์กรปกครองส่วนท้องถิ่น พ.ศ. 2542', year: '2542', fileUrl: '/pdfs/20.pdf' },
            { name: 'พระราชบัญญัติระเบียบบริหารงานบุคคลส่วนท้องถิ่น พ.ศ. 2542', year: '2542', fileUrl: '/pdfs/21.pdf' },
        ],
    },
    {
        category: 'ระเบียบกระทรวงมหาดไทย',
        items: [
            { name: 'ระเบียบว่าด้วยการจัดทำแผนพัฒนาขององค์กรปกครองส่วนท้องถิ่น พ.ศ. 2548', year: '2548', fileUrl: '/pdfs/16.pdf' },
            { name: 'ระเบียบว่าด้วยการรับเงิน การเบิกจ่ายเงิน การฝากเงิน การเก็บรักษาเงิน และการตรวจเงิน พ.ศ. 2547', year: '2547', fileUrl: '/pdfs/17.pdf' },
            { name: 'ระเบียบว่าด้วยการพัสดุของหน่วยการบริหารราชการส่วนท้องถิ่น พ.ศ. 2535', year: '2535', fileUrl: '/pdfs/18.pdf' },
        ],
    },
    {
        category: 'ข้อบัญญัติ อบต.ดอนแร่',
        items: [
            { name: 'ข้อบัญญัติองค์การบริหารส่วนตำบลดอนแร่ ปี 2569', year: '2569', fileUrl: '/pdfs/1.pdf' },
            { name: 'การโอนงบประมารรายจ่ายประจำปีงบประมาณ พ.ศ. 2568 (ครั้งที่ 15)', year: '2568', fileUrl: '/pdfs/2.pdf' },
            { name: 'การโอนงบประมารรายจ่ายประจำปีงบประมาณ พ.ศ. 2568 (ครั้งที่ 14)', year: '2568', fileUrl: '/pdfs/3.pdf' },
            { name: 'การโอนงบประมารรายจ่ายประจำปีงบประมาณ พ.ศ. 2568 (ครั้งที่ 13)', year: '2568', fileUrl: '/pdfs/4.pdf' },
            { name: 'การโอนงบประมารรายจ่ายประจำปีงบประมาณ พ.ศ. 2568 (ครั้งที่ 12)', year: '2568', fileUrl: '/pdfs/5.pdf' },
            { name: 'การโอนงบประมารรายจ่ายประจำปีงบประมาณ พ.ศ. 2568 (ครั้งที่ 11)', year: '2568', fileUrl: '/pdfs/6.pdf' },
            { name: 'การโอนงบประมารรายจ่ายประจำปีงบประมาณ พ.ศ. 2568 (ครั้งที่ 10)', year: '2568', fileUrl: '/pdfs/7.pdf' },
            { name: 'การโอนงบประมารรายจ่ายประจำปีงบประมาณ พ.ศ. 2568 (ครั้งที่ 9)', year: '2568', fileUrl: '/pdfs/8.pdf' },
            { name: 'การโอนงบประมารรายจ่ายประจำปีงบประมาณ พ.ศ. 2568 (ครั้งที่ 8)', year: '2568', fileUrl: '/pdfs/9.pdf' },
            { name: 'การโอนงบประมารรายจ่ายประจำปีงบประมาณ พ.ศ. 2568 (ครั้งที่ 7)', year: '2568', fileUrl: '/pdfs/10.pdf' },
            { name: 'การโอนงบประมารรายจ่ายประจำปีงบประมาณ พ.ศ. 2568 (ครั้งที่ 6)', year: '2568', fileUrl: '/pdfs/11.pdf' },
            { name: 'การโอนงบประมารรายจ่ายประจำปีงบประมาณ พ.ศ. 2568 (ครั้งที่ 5)', year: '2568', fileUrl: '/pdfs/12.pdf' },
            { name: 'การโอนงบประมารรายจ่ายประจำปีงบประมาณ พ.ศ. 2568 (ครั้งที่ 4)', year: '2568', fileUrl: '/pdfs/13.pdf' },
            { name: 'แก้ไขเปลี่ยนแปลงคำชี้แจงงบประมาณรายจ่าย 2', year: '2567', fileUrl: '/pdfs/14.pdf' },
            { name: 'แก้ไขเปลี่ยนแปลงคำชี้แจงงบประมาณรายจ่าย 1', year: '2567', fileUrl: '/pdfs/15.pdf' },


        ],
    },
]

export default function LawsPage() {
    // กำหนด state สำหรับเก็บสถานะเปิด-ปิดของแต่ละหมวดหมู่ (เริ่มต้นให้เปิดทั้งหมด)
    const [openSections, setOpenSections] = useState<Record<string, boolean>>(
        laws.reduce((acc, section) => ({ ...acc, [section.category]: true }), {})
    )

    // ฟังก์ชันสำหรับเปิด-ปิดหมวดหมู่
    const toggleSection = (category: string) => {
        setOpenSections(prev => ({
            ...prev,
            [category]: !prev[category]
        }))
    }

    return (
        <>
            <PageHero
                label="นิติกรรมและข้อกำหนด"
                title="กฎหมาย"
                accent="และระเบียบ"
                description="กฎหมาย ระเบียบ ข้อบัญญัติ และแนวปฏิบัติที่เกี่ยวข้องกับการปกครองท้องถิ่นและการบริการประชาชน"
            />
            <section className="py-20 px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="max-w-4xl mx-auto space-y-6">
                    {laws.map((section) => (
                        <div key={section.category} className="glass-card overflow-hidden">
                            {/* ปุ่มกดเปิด-ปิดส่วนหัวข้อ */}
                            <button
                                onClick={() => toggleSection(section.category)}
                                className="w-full text-left p-6 sm:p-8 flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none"
                            >
                                <h2 className="section-subheading mb-0">{section.category}</h2>
                                <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-accent transition-transform duration-300 ${openSections[section.category] ? 'rotate-180' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </div>
                            </button>

                            {/* เนื้อหาที่จะถูกซ่อนหรือแสดง */}
                            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${openSections[section.category] ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                <div className="overflow-hidden">
                                    <ul className="space-y-0 px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                                        {section.items.map((law, index) => (
                                            <li key={index} className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 border-b border-border/50 last:border-0">
                                                <div className="flex items-start gap-4 flex-1">
                                                    <span className="flex-shrink-0 w-14 text-center px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-sans font-semibold mt-0.5 sm:mt-0">
                                                        {law.year}
                                                    </span>
                                                    <span className="text-text-secondary font-sans text-sm leading-relaxed">{law.name}</span>
                                                </div>
                                                {law.fileUrl && (
                                                    <a
                                                        href={law.fileUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-shrink-0 text-accent hover:text-accent/80 text-sm font-sans flex items-center gap-1.5 transition-colors sm:ml-auto mt-2 sm:mt-0"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
                                                        <span>ดูไฟล์ PDF</span>
                                                    </a>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="glass-card p-6 flex items-start gap-4 border-accent/20">
                        <span className="text-2xl flex-shrink-0">ℹ️</span>
                        <div>
                            <p className="text-text-primary font-sans text-sm font-semibold mb-1">ต้องการข้อมูลเพิ่มเติม?</p>
                            <p className="text-text-secondary font-sans text-sm">
                                ติดต่อสำนักปลัด อบต.ดอนแร่ โทร{' '}
                                <a href="tel:032207048" className="text-accent hover:underline">032-207-048</a>{' '}
                                ในวันและเวลาราชการ
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
