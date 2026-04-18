import { LucideIcon } from "lucide-react";

interface FooterLinkColumnProps {
  title: string;
  links: string[];
}

export default function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div>
      <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">
        {title}
      </h4>
      <ul className="space-y-4">
        {links.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
