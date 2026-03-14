import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 text-2xl font-display font-bold text-foreground mb-4">
              Discover<span className="text-primary">Japan</span>
              <span className="h-2 w-2 rounded-full bg-primary mt-1"></span>
            </a>
            <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
              Your ultimate guide to experiencing the rich culture, breathtaking landscapes, and culinary wonders of Japan. Let the journey begin.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {['Destinations', 'Culture', 'Food Guide', 'Travel Tips', 'Gallery'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-4">
              {['Contact Us', 'FAQ', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Discover Japan. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Crafted with <span className="text-primary">♥</span> for travelers
          </p>
        </div>
      </div>
    </footer>
  );
}
