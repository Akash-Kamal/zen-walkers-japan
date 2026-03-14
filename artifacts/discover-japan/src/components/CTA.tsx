import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-32 bg-foreground text-background relative overflow-hidden">
      {/* Decorative large circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white">
            Ready to explore <span className="text-primary italic">Japan?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            Start planning your unforgettable journey today. Our travel experts are ready to craft the perfect itinerary for you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-5 rounded-full bg-primary text-primary-foreground text-lg font-medium hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
              Plan Your Trip <ArrowRight size={20} />
            </button>
            <button className="px-10 py-5 rounded-full bg-white/10 text-white text-lg font-medium hover:bg-white/20 transition-all duration-300 w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
