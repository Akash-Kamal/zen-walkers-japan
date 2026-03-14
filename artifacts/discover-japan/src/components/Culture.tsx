import { motion } from "framer-motion";
import { Flower2, Landmark, Swords, PartyPopper } from "lucide-react";

const CULTURE_ITEMS = [
  {
    title: "Cherry Blossoms",
    subtitle: "Sakura",
    icon: Flower2,
    description: "The breathtaking blooming of cherry trees symbolizes the fleeting nature of life and beauty.",
  },
  {
    title: "Temples & Shrines",
    subtitle: "Sacred Sites",
    icon: Landmark,
    description: "Thousands of serene Buddhist temples and Shinto shrines scattered across the country.",
  },
  {
    title: "Samurai Heritage",
    subtitle: "Bushido Code",
    icon: Swords,
    description: "Discover the ancient warrior class history through preserved castles and museums.",
  },
  {
    title: "Traditional Festivals",
    subtitle: "Matsuri",
    icon: PartyPopper,
    description: "Vibrant local celebrations featuring elaborate floats, dancing, and street food.",
  },
];

export default function Culture() {
  return (
    <section id="culture" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
              Deep Roots
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Immerse in <br/>
              <span className="italic font-light">Japanese Culture</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Japan seamlessly blends millennia of tradition with cutting-edge modernity. 
              Experience the profound depth of a culture that respects the past while embracing the future.
            </p>
            <button className="px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-primary hover:text-primary-foreground hover:shadow-lg transition-all duration-300">
              Discover Traditions
            </button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CULTURE_ITEMS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-14 w-14 rounded-full bg-accent flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <item.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h4 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-1">{item.subtitle}</h4>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
