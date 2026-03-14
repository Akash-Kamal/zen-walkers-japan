import { motion } from "framer-motion";

const GALLERY_IMAGES = [
  { url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80", comment: "tokyo street crossing" },
  { url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80", comment: "shibuya neon lights" },
  { url: "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=800&q=80", comment: "fushimi inari gates kyoto" },
  { url: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80", comment: "bamboo forest kyoto" },
  { url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80", comment: "mt fuji view" },
  { url: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=80", comment: "japanese temple garden" },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3 text-center">
          Visual Journey
        </h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground text-center">
          Moments in Japan
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-[1600px] mx-auto px-2 md:px-4">
        {GALLERY_IMAGES.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative overflow-hidden group cursor-pointer ${
              index === 0 || index === 3 ? "aspect-square md:row-span-2 md:aspect-auto" : "aspect-square"
            }`}
          >
            {/* {img.comment} */}
            <img
              src={img.url}
              alt="Japan Gallery Image"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
