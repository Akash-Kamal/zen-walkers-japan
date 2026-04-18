interface CultureCardProps {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size: number; className: string }>;
  description: string;
  index: number;
}

import { motion } from "framer-motion";

export default function CultureCard({
  title,
  subtitle,
  icon: Icon,
  description,
  index,
}: CultureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="h-14 w-14 rounded-full bg-accent flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
        <Icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h4 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-1">
        {subtitle}
      </h4>
      <h3 className="text-xl font-display font-bold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
