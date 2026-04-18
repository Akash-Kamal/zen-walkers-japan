import { motion } from "framer-motion";
import { Coffee, Hotel, Car, Headset } from "lucide-react";

const TIPS = [
  {
    icon: Car,
    title: "Hassle-Free Transfers",
    description: "Enjoy smooth airport and intercity transfers with comfortable vehicles and professional drivers."
  },
  {
    icon: Hotel,
    title: "Handpicked Stays",
    description: "We provide carefully selected hotels based on location, comfort, and guest reviews—no surprises on arrival."
  },
  {
    icon: Coffee,
    title: "Customized Itineraries",
    description: "Every trip is tailored to your preferences whether you want sightseeing, shopping, or relaxation."
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description: "Travel stress-free knowing our team is always just a call or message away."
  }
];

export default function TravelTips() {
  return (
    <section id="plan-your-trip" className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
        
          <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Travel with Confidence
          </h3>
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            Plan your trip with experts—our team ensures seamless bookings, verified hotels, and 24/7 on-trip
assistance.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TIPS.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 p-6 rounded-2xl bg-background hover:shadow-lg transition-shadow duration-300 border border-border/50"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary">
                  <tip.icon size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">{tip.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
