import { MessageCircle, Phone, QrCode, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

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

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — WhatsApp & Phone */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/972549890202"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-ember-sm transition-all group"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-fire flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">Chat with us on WhatsApp</h3>
                <p className="text-muted-foreground text-sm">Instant support — tap to start a conversation.</p>
              </div>
            </a>

            {/* Phone */}
            <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-6">
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">Call Us</h3>
                <a href="tel:+972549890202" className="text-primary font-semibold text-lg hover:underline">
                  +972 54-989-0202
                </a>
              </div>
            </div>

            {/* QR Code placeholder */}
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <QrCode className="w-32 h-32 text-muted-foreground mx-auto mb-4 opacity-40" />
              <p className="text-muted-foreground text-sm">Scan to chat on WhatsApp</p>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="font-display font-bold text-xl text-foreground mb-6">Send Us a Message</h3>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gradient-fire flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-display font-bold text-xl text-foreground mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">We'll get back to you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-primary font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-fire text-primary-foreground font-display font-bold py-3 rounded-lg text-lg shadow-ember hover:shadow-ember-sm transition-all hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
