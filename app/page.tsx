import { Navbar } from '@/components/navigation/navbar'
import { Footer } from '@/components/navigation/footer'
import { HeroSection } from '@/components/sections/hero'
import { TrustStatsSection } from '@/components/sections/trust-stats'
import { BrandStorySection } from '@/components/sections/brand-story'
import { ServicesSection } from '@/components/sections/services'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us'
import { PortfolioSection } from '@/components/sections/portfolio'
import { ProcessSection } from '@/components/sections/process'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { CTASection } from '@/components/sections/cta'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <TrustStatsSection />
      <BrandStorySection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
