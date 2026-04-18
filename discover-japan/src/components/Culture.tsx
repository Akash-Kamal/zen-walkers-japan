import { motion } from "framer-motion";
import CultureCard from "./sections/CultureCard";
import { CULTURE_ITEMS } from "@/lib/constants";

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
              Immerse in <br />
              <span className="italic font-light">Japanese Culture</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Japan seamlessly blends millennia of tradition with cutting-edge
              modernity. Experience the profound depth of a culture that respects
              the past while embracing the future.
            </p>
            {/* <button className="px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-primary hover:text-primary-foreground hover:shadow-lg transition-all duration-300">
              Discover Traditions
            </button> */}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CULTURE_ITEMS.map((item, index) => (
              <CultureCard
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
