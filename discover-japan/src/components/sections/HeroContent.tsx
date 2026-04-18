import { motion } from "framer-motion";

interface HeroContentProps {
  badge: string;
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export default function HeroContent({
  badge,
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroContentProps) {
  return (
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center mb-6"
      >
        <span className="px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm font-medium tracking-wide uppercase">
          {badge}
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
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href={primaryButtonLink}
          className="px-8 py-4 rounded-full bg-primary text-primary-foreground text-lg font-medium hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
        >
          {primaryButtonText}
        </a>
        <a
          href={secondaryButtonLink}
          className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg font-medium hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
        >
          {secondaryButtonText}
        </a>
      </motion.div>
    </div>
  );
}
