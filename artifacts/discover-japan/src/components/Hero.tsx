import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Wash */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero mount fuji landscape */}
        <img
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=80"
          alt="Mount Fuji Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm font-medium tracking-wide uppercase">
            Discover the extraordinary
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-6"
        >
          Explore the Beauty <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-primary italic">
            of Japan
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
        >
          Tradition, Culture, and Adventure Await. Immerse yourself in a land where ancient temples meet futuristic cities.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#destinations"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground text-lg font-medium hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
          >
            Start Your Journey
          </a>
          <a
            href="#culture"
            className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg font-medium hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Decorative Red Sun Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full bg-primary blur-[100px] z-0 pointer-events-none"
      />
    </section>
  );
}
