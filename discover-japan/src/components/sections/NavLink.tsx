import { cn } from "@/lib/utils";

interface NavLinkProps {
  name: string;
  href: string;
  isScrolled: boolean;
}

export default function NavLink({ name, href, isScrolled }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
        isScrolled ? "text-foreground" : "text-foreground/90 hover:text-foreground"
      )}
    >
      {name}
    </a>
  );
}
