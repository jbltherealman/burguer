import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturedBurgers } from "@/components/featured-burgers"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ExperienceSection } from "@/components/experience-section"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturedBurgers />
      <WhyChooseUs />
      <ExperienceSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
