import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import SpiceCollection from "@/components/SpiceCollection";
import Heritage from "@/components/Heritage";
import Process from "@/components/Process";
import FeaturedBanner from "@/components/FeaturedBanner";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <SpiceCollection />
      <Heritage />
      <Process />
      <FeaturedBanner />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
