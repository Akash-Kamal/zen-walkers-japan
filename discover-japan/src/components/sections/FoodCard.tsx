import { motion } from "framer-motion";

interface FoodCardProps {
  name: string;
  image: string;
  index: number;
}

export default function FoodCard({ name, image, index }: FoodCardProps) {
  return (
    <motion.div
      key={name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-64 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h4 className="text-white text-xl font-display font-bold">{name}</h4>
      </div>
    </motion.div>
  );
}
