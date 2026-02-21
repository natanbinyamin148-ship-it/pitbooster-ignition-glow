import { MessageCircle, Phone, Mail } from "lucide-react";
import charcoalGrill from "@/assets/charcoal-grill.jpeg";

const Contact = () => {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-display font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            Get In Touch
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-foreground mb-4">
            Let's <span className="text-gradient-fire">Connect</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Whether you're a chef, distributor, or BBQ enthusiast — we'd love to hear from you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Charcoal image */}
          <div className="rounded-xl overflow-hidden shadow-ember">
            <img
              src={charcoalGrill}
              alt="PitBooster binchotan charcoal glowing on grill"
              className="w-full h-64 sm:h-80 object-cover"
              loading="lazy"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/972549890202"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-ember-sm transition-all group text-center"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-fire flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground">WhatsApp</h3>
              <p className="text-muted-foreground text-sm">Chat with us instantly</p>
            </a>

            {/* Phone */}
            <a
              href="tel:+972549890202"
              className="flex flex-col items-center gap-3 bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-ember-sm transition-all group text-center"
            >
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground">Call Us</h3>
              <p className="text-primary font-semibold">+972 54-989-0202</p>
            </a>

            {/* Email */}
            <a
              href="mailto:natan@pitbooster.com"
              className="flex flex-col items-center gap-3 bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-ember-sm transition-all group text-center"
            >
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground">Email Us</h3>
              <p className="text-primary font-semibold text-sm">natan@pitbooster.com</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
