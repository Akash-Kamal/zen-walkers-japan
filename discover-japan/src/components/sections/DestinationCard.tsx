import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

interface DestinationCardProps {
  name: string;
  description: string;
  image: string;
  index: number;
}

export default function DestinationCard({
  name,
  description,
  image,
  index,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border"
    >
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-2 text-white/90 mb-2">
            <MapPin size={16} className="text-primary" />
            <span className="text-sm font-medium uppercase tracking-wider">
              {name}
            </span>
          </div>
          <h4 className="text-2xl font-display font-bold text-white mb-2">
            {name}
          </h4>
          <p className="text-white/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {description}
          </p>

          <button className="mt-4 flex items-center gap-2 text-primary font-medium text-sm hover:text-white transition-colors opacity-0 group-hover:opacity-100 duration-300 delay-150">
            Explore <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
