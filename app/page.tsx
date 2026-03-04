import HeroScroll from '@/components/HeroScroll'
import PlaneMorph from '@/components/PlaneMorph'
import IntroSection from '@/components/IntroSection'
import ServicesSection from '@/components/ServicesSection'
import NewsSection from '@/components/NewsSection'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
    return (
        <>
            {/* 1. Hero — Canvas Scrollytelling (sequence-1) */}
            <HeroScroll />

            {/* 2. Intro / About */}
            <IntroSection />

            {/* 3. PlaneMorph — Canvas Scrollytelling (sequence-2) */}
            <PlaneMorph />

            {/* 4. Services */}
            <ServicesSection />

            {/* 5. News */}
            <NewsSection />

            {/* 6. Contact */}
            <ContactSection />
        </>
    )
}
