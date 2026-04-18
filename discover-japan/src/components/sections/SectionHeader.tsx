interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
        {label}
      </h2>
      <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
        {title}
      </h3>
      <p className="text-muted-foreground text-lg">{description}</p>
    </div>
  );
}
