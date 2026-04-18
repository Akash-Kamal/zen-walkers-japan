import SocialLinks from "./sections/SocialLinks";
import {
  SOCIAL_LINKS,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <a
            href="#home"
            className="flex items-center justify-center gap-2 text-2xl font-display font-bold text-foreground mb-4"
          >
             <img
            src="/Zen-logo.png"
            alt="Zen Walkers Japan"
            className="h-16 w-auto md:h-20"
          />
          </a>
          <p className="text-muted-foreground max-w-2xl mb-6 leading-relaxed mx-auto">
            Your ultimate guide to experiencing the rich culture, breathtaking
            landscapes, and culinary wonders of Japan. Let the journey begin.
          </p>
          {/* <SocialLinks icons={SOCIAL_LINKS} /> */}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Zen Walker's Japan. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            Crafted with <span className="text-primary">♥</span> for travelers
          </p>
        </div>
      </div>
    </footer>
  );
}
