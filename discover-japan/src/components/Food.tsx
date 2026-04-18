import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";

const ABOUT_US_FULL = `At Zen Walker’s Japan, we believe travel isn’t about ticking destinations off a list — it’s about experiencing Japan in a way that stays with you forever.

From the neon-lit streets of Tokyo to the peaceful temples of Kyoto and the vibrant culture of Osaka, we create journeys that blend tradition, nature, and modern life into one unforgettable experience.

What makes us different?
We don’t just plan trips — we design personalized journeys. Whether it’s your first visit or a return to explore hidden gems, we ensure every detail feels seamless, comfortable, and truly authentic.

Our services include:

• Curated travel itineraries
• Private and luxury experiences
• Local cultural explorations
• Hidden gems beyond typical tourist spots

Behind every journey is a team that genuinely cares about your experience. We focus on comfort, trust, and creating memories you’ll talk about for years.

At Zen Walker’s Japan, our goal is simple —
to help you explore Japan with ease, curiosity, and a sense of peace.`;

const ABOUT_US_SHORT = `At Zen Walker's Japan, we believe that travel is not just about visiting places – it is about experiencing the soul of a destination. Our mission is to create unforgettable journeys across Japan, combining culture, nature, and modern experiences.`;

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    city: "Delhi",
    rating: 5,
    title: "Perfectly planned Japan trip",
    review: "Zen Walkers handled everything so smoothly. From hotels to local experiences, the entire trip was stress-free and enjoyable. Highly recommended for first-time travelers to Japan."
  },
  {
    name: "Priya Mehta",
    city: "Mumbai",
    rating: 5,
    title: "Truly personalized experience",
    review: "Loved how the itinerary was tailored just for us. We explored places we would have never found on our own. The team's passion for Japan really shines through."
  },
  {
    name: "Ankit Verma",
    city: "Lucknow",
    rating: 4,
    title: "Great planning and support",
    review: "Very well-organized trip with great attention to detail. Their team was always available whenever we needed help. Worth every penny."
  },
  {
    name: "Neha Gupta",
    city: "Jaipur",
    rating: 5,
    title: "Beautiful and seamless journey",
    review: "Everything from stay to travel was perfectly arranged. It was one of the most relaxing international trips I've had. Felt like royalty!"
  },
  {
    name: "Rohit Singh",
    city: "Chandigarh",
    rating: 5,
    title: "Excellent service throughout",
    review: "What impressed me the most was their quick support during the trip. Felt very secure traveling in a new country. The guides were incredibly knowledgeable."
  },
  {
    name: "Sneha Iyer",
    city: "Bangalore",
    rating: 5,
    title: "Luxury with local touch",
    review: "A perfect mix of comfort and authentic experiences. The recommendations for food and places were spot on. Our family had an amazing time."
  },
  {
    name: "Karan Malhotra",
    city: "Gurgaon",
    rating: 4,
    title: "Smooth and hassle-free trip",
    review: "Everything was managed very well. As Indian travelers, we felt very comfortable throughout the journey. Would definitely book with them again."
  },
  {
    name: "Pooja Kapoor",
    city: "Amritsar",
    rating: 5,
    title: "Unforgettable honeymoon experience",
    review: "Zen Walkers made our honeymoon in Japan truly special. Every detail was thoughtfully planned and executed. Pure magic!"
  }
];

export default function Food() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="food" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="w-full">
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
              About Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              About Zen Walkers
            </h3>
            <div className="flex flex-col md:flex-row md:gap-8 justify-between items-end">
              <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-wrap flex-1">
                {isExpanded ? ABOUT_US_FULL : ABOUT_US_SHORT}
              </p>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary font-medium hover:text-foreground transition-colors flex items-center gap-2 shrink-0 mt-6 md:mt-0"
              >
                {isExpanded ? "Show Less" : "Learn More"}
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Customer Testimonials Section */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
              Customer Testimonials
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              What Our Travelers Say
            </h3>
            <p className="text-muted-foreground text-lg">
              Real experiences from Indian travelers who discovered the magic of Japan with Zen Walkers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_: any, i: number) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <h5 className="font-medium text-foreground mb-2">"{testimonial.title}"</h5>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {testimonial.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
