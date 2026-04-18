import { motion } from "framer-motion";

interface HeroBackgroundProps {
  imageUrl: string;
  imageAlt: string;
}

export default function HeroBackground({
  imageUrl,
  imageAlt,
}: HeroBackgroundProps) {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/90" />
      </div>

      {/* Decorative Red Sun Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] rounded-full bg-primary blur-[100px] z-0 pointer-events-none"
      />
    </>
  );
}
