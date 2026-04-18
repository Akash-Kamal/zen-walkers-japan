import { LucideIcon } from "lucide-react";

interface SocialLinksProps {
  icons: Array<{ Icon: LucideIcon; href: string }>;
}

export default function SocialLinks({ icons }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-4">
      {icons.map(({ Icon, href }, idx) => (
        <a
          key={idx}
          href={href}
          className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-md transition-all duration-300"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
