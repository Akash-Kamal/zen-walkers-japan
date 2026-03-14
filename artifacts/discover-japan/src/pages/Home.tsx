import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Culture from "@/components/Culture";
import Food from "@/components/Food";
import TravelTips from "@/components/TravelTips";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Culture />
        <Food />
        <TravelTips />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
