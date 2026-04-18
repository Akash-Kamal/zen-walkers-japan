import HeroBackground from "./sections/HeroBackground";
import HeroContent from "./sections/HeroContent";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <HeroBackground
        imageUrl="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=80"
        imageAlt="Mount Fuji Landscape"
      />
      <HeroContent
        badge="Discover the extraordinary"
        title="Explore the Beauty of Japan"
        description="Tradition, Culture, and Adventure Await. Immerse yourself in a land where ancient temples meet futuristic cities."
        primaryButtonText="Start Your Journey"
        primaryButtonLink="#destinations"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#culture"
      />
    </section>
  );
}
