import { Navbar } from '@/components/navigation/navbar'
import { Footer } from '@/components/navigation/footer'
import { HeroSection } from '@/components/sections/hero'
import { TrustStatsSection } from '@/components/sections/trust-stats'
import { BrandStorySection } from '@/components/sections/brand-story'
import { ServicesSection } from '@/components/sections/services'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us'
import { PortfolioEnhancedSection } from '@/components/sections/portfolio-enhanced'
import { PortfolioStatsSection } from '@/components/sections/portfolio-stats'
import { ProcessSection } from '@/components/sections/process'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { TeamSection } from '@/components/sections/team'
import { InquiryFormSection } from '@/components/sections/inquiry-form'
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
      <PortfolioEnhancedSection />
      <PortfolioStatsSection />
      <ProcessSection />
      <TestimonialsSection />
      <TeamSection />
      <InquiryFormSection />
      <CTASection />
      <Footer />
    </main>
  )
}
