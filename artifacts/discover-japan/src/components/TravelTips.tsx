import { motion } from "framer-motion";
import { Calendar, Train, Coffee, CreditCard } from "lucide-react";

const TIPS = [
  {
    icon: Calendar,
    title: "Best Time to Visit",
    description: "Spring (March-May) for cherry blossoms, or Autumn (Sep-Nov) for stunning fall foliage and mild weather."
  },
  {
    icon: Train,
    title: "Transportation",
    description: "Get a Japan Rail (JR) Pass before arriving for unlimited travel on bullet trains across the country."
  },
  {
    icon: Coffee,
    title: "Cultural Etiquette",
    description: "Bow when greeting, remove shoes indoors, and never leave a tip—excellent service is standard."
  },
  {
    icon: CreditCard,
    title: "Cash is King",
    description: "While cards are becoming more accepted, always carry cash for small restaurants and rural areas."
  }
];

export default function TravelTips() {
  return (
    <section id="travel-tips" className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            Before You Go
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Essential Travel Tips
          </h3>
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
