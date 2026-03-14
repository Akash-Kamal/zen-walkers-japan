import { motion } from "framer-motion";

const FOOD_ITEMS = [
  {
    name: "Sushi & Sashimi",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
    comment: "fresh sushi platter",
  },
  {
    name: "Authentic Ramen",
    image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&q=80",
    comment: "bowl of steaming ramen",
  },
  {
    name: "Crispy Tempura",
    image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=800&q=80",
    comment: "crispy fried tempura",
  },
  {
    name: "Matcha Desserts",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&q=80",
    comment: "green matcha tea and dessert",
  },
];

export default function Food() {
  return (
    <section id="food" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
              Gastronomy
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Culinary Excellence
            </h3>
            <p className="text-muted-foreground text-lg">
              Japanese cuisine is an art form. From humble street food stalls to multi-course Michelin-starred Kaiseki dinners.
            </p>
          </div>
          <button className="text-primary font-medium hover:text-foreground transition-colors hidden md:flex items-center gap-2">
            View Food Guide
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOOD_ITEMS.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              {/* {item.comment} */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="w-8 h-[2px] bg-primary mb-3 transform origin-left group-hover:scale-x-150 transition-transform duration-300" />
                <h4 className="text-2xl font-display font-bold text-white tracking-wide">
                  {item.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
