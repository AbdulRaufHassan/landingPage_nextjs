"use client";
import AboutUs from "@/components/AboutUs";
import CountsSection from "@/components/CountsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OurFeatures from "@/components/OurFeatures";
import OurGallery from "@/components/OurGallery";
import OurPricing from "@/components/OurPricing";
import OurServices from "@/components/OurServices";
import OurVision_Mission from "@/components/OurVision_Mission";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutUs />
      <OurServices />
      <OurFeatures />
      <OurVision_Mission />
      <OurGallery />
      <CountsSection />
      <OurPricing />
      <Footer />
    </main>
  );
}
