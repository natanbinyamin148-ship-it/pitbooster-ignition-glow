import { Flame, Clock, Zap, Wind, ThermometerSun, Timer, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-grill.jpg";
import charcoalImage from "@/assets/charcoal-glow.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Steak sizzling on charcoal grill"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <p className="text-primary font-display font-semibold uppercase tracking-[0.3em] text-sm mb-6 animate-fade-up">
            Binchotan Pro-Charcoal
          </p>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.9] mb-6 animate-fade-up text-foreground" style={{ animationDelay: "0.1s" }}>
            Professional<br />
            <span className="text-gradient-fire">Heat.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-display font-medium mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            One Match. 18 Minutes.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/contact"
              className="inline-block bg-gradient-fire text-primary-foreground font-display font-bold px-8 py-4 rounded-lg text-lg shadow-ember hover:shadow-ember-sm transition-all hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* What is PitBooster */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-display font-semibold uppercase tracking-[0.2em] text-sm mb-4">
                What is PitBooster
              </p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                Steakhouse-Level Sear,<br />
                <span className="text-gradient-fire">Now in Every Backyard.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                PitBooster is a premium Binchotan charcoal engineered for professional chefs and serious home grillers. 
                Made from sustainably sourced hardwood using a traditional Japanese technique, it reaches temperatures 
                of over <span className="text-primary font-semibold">800°C</span> — delivering an intense, 
                clean sear that ordinary charcoal simply can't match.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                USDA Organic certified. All-in-one cartridge design. 18 minutes to your own steakhouse-quality steak.
              </p>
            </div>
            <div className="relative">
              <img
                src={charcoalImage}
                alt="Glowing binchotan charcoal"
                className="rounded-xl shadow-ember w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-fire flex items-center justify-center shadow-ember animate-pulse-glow">
                <span className="font-display font-black text-primary-foreground text-lg">800°C</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px glow-line" />

      {/* How it Works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-display font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            How It Works
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground mb-16">
            Three Steps to <span className="text-gradient-fire">Perfect Heat</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Flame, step: "01", title: "Light One Match", desc: "Our patented cartridge design ignites with a single match. No lighter fluid, no hassle." },
              { icon: Timer, step: "02", title: "Wait 18 Minutes", desc: "The Binchotan charcoal self-ignites throughout the cartridge, building to extreme temperatures." },
              { icon: ThermometerSun, step: "03", title: "Start Grilling", desc: "Enjoy consistent 800°C heat for steakhouse-quality searing right in your backyard." },
            ].map((item) => (
              <div key={item.step} className="group bg-card rounded-xl p-8 border border-border hover:border-primary/40 transition-all hover:shadow-ember-sm">
                <div className="w-14 h-14 rounded-lg bg-gradient-fire flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="text-primary font-display font-black text-4xl opacity-20 block mb-2">{item.step}</span>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px glow-line" />

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-display font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground mb-16">
            Breaking the <span className="text-gradient-fire">Heat Barrier</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Zap, title: "Extreme Heat", desc: "Reaches 800°C+ for a perfect steakhouse sear." },
              { icon: Clock, title: "Long-Lasting", desc: "Burns consistently for hours on a single cartridge." },
              { icon: Wind, title: "Clean & Smokeless", desc: "Minimal smoke, no chemical aftertaste." },
              { icon: Leaf, title: "USDA Organic", desc: "Sustainably sourced, 100% natural hardwood." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all group">
                <item.icon className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground mb-4">
            Ready to <span className="text-gradient-fire">Ignite</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Get in touch to learn more about PitBooster and bring professional-grade heat to your grill.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-fire text-primary-foreground font-display font-bold px-8 py-4 rounded-lg text-lg shadow-ember hover:shadow-ember-sm transition-all hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
