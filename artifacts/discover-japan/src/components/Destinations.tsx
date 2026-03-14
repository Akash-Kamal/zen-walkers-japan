import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const DESTINATIONS = [
  {
    name: "Tokyo",
    description: "A dazzling metropolis where neon-lit skyscrapers stand beside historic temples.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    comment: "tokyo city night street",
  },
  {
    name: "Kyoto",
    description: "The cultural heart of Japan, famous for classical Buddhist temples and serene gardens.",
    image: "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?w=800&q=80",
    comment: "kyoto traditional street with pagoda",
  },
  {
    name: "Osaka",
    description: "Known for its modern architecture, vibrant nightlife, and exceptional street food.",
    image: "https://images.unsplash.com/photo-1588432871885-f0a2b5ce0570?w=800&q=80",
    comment: "osaka dotonbori neon lights",
  },
  {
    name: "Mount Fuji",
    description: "Japan's iconic, snow-capped volcano offering breathtaking views and challenging climbs.",
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80",
    comment: "mount fuji with cherry blossoms",
  },
  {
    name: "Nara",
    description: "Home to significant temples and artworks, plus friendly roaming deer.",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    comment: "nara park deer and traditional buildings",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            Must Visit
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Popular Destinations
          </h3>
          <p className="text-muted-foreground text-lg">
            From the bustling streets of Tokyo to the tranquil gardens of Kyoto, 
            discover the places that make Japan unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border ${
                index === 3 || index === 4 ? "lg:col-span-1" : ""
              } ${index === 4 && "lg:col-start-2 lg:col-span-1"}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                {/* {dest.comment} */}
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-white/90 mb-2">
                    <MapPin size={16} className="text-primary" />
                    <span className="text-sm font-medium uppercase tracking-wider">{dest.name}</span>
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white mb-2">{dest.name}</h4>
                  <p className="text-white/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {dest.description}
                  </p>
                  
                  <button className="mt-4 flex items-center gap-2 text-primary font-medium text-sm hover:text-white transition-colors opacity-0 group-hover:opacity-100 duration-300 delay-150">
                    Explore <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
