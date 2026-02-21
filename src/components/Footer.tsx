import { Flame } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border py-10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Flame className="w-5 h-5 text-primary" />
        <span className="font-display font-bold text-foreground">
          Pit<span className="text-primary">Booster</span>
        </span>
      </div>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} PitBooster. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
