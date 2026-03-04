import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
    title: 'ประมวลภาพกิจกรรม | อบต.ดอนแร่',
    description: 'ประมวลภาพกิจกรรมและโครงการขององค์การบริหารส่วนตำบลดอนแร่',
}

const activities = [
    {
        title: 'โครงการวันเด็กแห่งชาติ ปี 2568',
        date: 'มกราคม 2568',
        category: 'การศึกษา',
        description: 'จัดกิจกรรมวันเด็กแห่งชาติ ส่งเสริมพัฒนาการเด็กและเยาวชนในพื้นที่ตำบลดอนแร่',
        emoji: '🎉',
    },
    {
        title: 'กิจกรรมทำความสะอาดหมู่บ้าน Big Cleaning Day',
        date: 'ธันวาคม 2567',
        category: 'สิ่งแวดล้อม',
        description: 'รณรงค์ทำความสะอาดชุมชน ส่งเสริมสิ่งแวดล้อมที่ดีในเขตตำบลดอนแร่ร่วมกับชาวบ้าน',
        emoji: '🌿',
    },
    {
        title: 'โครงการฝึกอบรมอาชีพสตรี',
        date: 'พฤศจิกายน 2567',
        category: 'สังคม',
        description: 'ฝึกอบรมอาชีพเสริมรายได้ให้กับกลุ่มสตรีในตำบล เช่น การทำขนม การทอผ้า และงานฝีมือ',
        emoji: '👩‍🍳',
    },
    {
        title: 'โครงการผู้สูงอายุสุขภาพดี ปี 2567',
        date: 'ตุลาคม 2567',
        category: 'สาธารณสุข',
        description: 'ตรวจสุขภาพผู้สูงอายุ สนับสนุนอุปกรณ์ช่วยเหลือ และจัดกิจกรรมนันทนาการสำหรับผู้สูงวัย',
        emoji: '❤️',
    },
    {
        title: 'กีฬาสัมพันธ์ตำบลดอนแร่',
        date: 'กันยายน 2567',
        category: 'กีฬา',
        description: 'จัดการแข่งขันกีฬาสร้างความสามัคคี เชื่อมสัมพันธ์ชุมชนทั้ง 14 หมู่บ้านในตำบลดอนแร่',
        emoji: '⚽',
    },
    {
        title: 'โครงการปลูกต้นไม้เฉลิมพระเกียรติ',
        date: 'กรกฎาคม 2567',
        category: 'สิ่งแวดล้อม',
        description: 'ปลูกต้นไม้ในพื้นที่สาธารณะ สวนสาธารณะ และริมถนนสายหลักในตำบลดอนแร่',
        emoji: '🌳',
    },
]

const categoryColors: Record<string, string> = {
    'การศึกษา': 'text-blue-400 bg-blue-400/10',
    'สิ่งแวดล้อม': 'text-green-400 bg-green-400/10',
    'สังคม': 'text-purple-400 bg-purple-400/10',
    'สาธารณสุข': 'text-red-400 bg-red-400/10',
    'กีฬา': 'text-orange-400 bg-orange-400/10',
}

export default function GalleryPage() {
    return (
        <>
            <PageHero
                label="กิจกรรมชุมชน"
                title="ประมวลภาพ"
                accent="กิจกรรม อบต.ดอนแร่"
                description="ภาพกิจกรรมและโครงการที่ อบต.ดอนแร่ ดำเนินงานเพื่อพัฒนาชุมชนและบริการประชาชน"
            />
            <section className="py-20 px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {activities.map((activity, i) => (
                            <div
                                key={activity.title}
                                className={`glass-card overflow-hidden hover:border-accent/25 transition-all duration-300 hover:-translate-y-1 group cursor-pointer ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                            >
                                {/* Image placeholder with emoji */}
                                <div className="h-48 bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center text-6xl border-b border-border">
                                    {activity.emoji}
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-sans font-semibold tracking-wider uppercase ${categoryColors[activity.category] || 'text-accent bg-accent/10'}`}>
                                            {activity.category}
                                        </span>
                                        <time className="text-text-muted text-[11px] font-sans">{activity.date}</time>
                                    </div>
                                    <h3 className="font-serif text-text-primary text-lg leading-snug mb-2 group-hover:text-accent transition-colors">
                                        {activity.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm font-sans leading-relaxed">
                                        {activity.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
