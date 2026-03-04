import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LenisProvider from '@/components/LenisProvider'

export const metadata: Metadata = {
    title: 'องค์การบริหารส่วนตำบลดอนแร่ | อบต.ดอนแร่ ราชบุรี',
    description:
        'เว็บไซต์อย่างเป็นทางการของ องค์การบริหารส่วนตำบลดอนแร่ อำเภอเมือง จังหวัดราชบุรี — บริการประชาชน ข่าวสาร และข้อมูลท้องถิ่น',
    keywords: ['อบต.ดอนแร่', 'ดอนแร่', 'ราชบุรี', 'บริการประชาชน', 'องค์การบริหารส่วนตำบล'],
    openGraph: {
        title: 'อบต.ดอนแร่ | องค์การบริหารส่วนตำบลดอนแร่',
        description: 'บริการประชาชน ข่าวสาร และข้อมูลท้องถิ่น ตำบลดอนแร่ อำเภอเมือง จังหวัดราชบุรี',
        locale: 'th_TH',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="th" suppressHydrationWarning>
            <body>
                <div className="noise-overlay" />
                <LenisProvider>
                    <Navbar />
                    <main className="min-h-screen">{children}</main>
                    <Footer />
                </LenisProvider>
            </body>
        </html>
    )
}
