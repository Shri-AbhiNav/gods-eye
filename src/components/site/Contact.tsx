import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export function Contact() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Request received — we'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 grid-bg radial-fade opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-glow">Get in touch</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Let's <span className="text-gradient">secure</span> what matters.
          </h2>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 space-y-5"
          >
            {[
              { id: "name", label: "Full name", type: "text" },
              { id: "email", label: "Email address", type: "email" },
              { id: "phone", label: "Phone number", type: "tel" },
            ].map((f) => (
              <div key={f.id} className="relative">
                <input
                  required
                  id={f.id}
                  type={f.type}
                  placeholder=" "
                  className="peer w-full bg-secondary/40 border border-border rounded-xl px-4 pt-6 pb-2 text-sm focus:outline-none focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 transition-all"
                />
                <label
                  htmlFor={f.id}
                  className="absolute left-4 top-2 text-[10px] uppercase tracking-wider text-cyan-glow peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case transition-all"
                >
                  {f.label}
                </label>
              </div>
            ))}
            <div className="relative">
              <textarea
                required
                id="msg"
                rows={4}
                placeholder=" "
                className="peer w-full bg-secondary/40 border border-border rounded-xl px-4 pt-6 pb-2 text-sm focus:outline-none focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 transition-all resize-none"
              />
              <label
                htmlFor="msg"
                className="absolute left-4 top-2 text-[10px] uppercase tracking-wider text-cyan-glow peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case transition-all"
              >
                Tell us about your project
              </label>
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-glow to-electric px-7 py-3.5 text-sm font-medium text-primary-foreground glow hover:glow-strong transition-all hover:scale-[1.01] disabled:opacity-60"
            >
              {sending ? "Sending..." : <>Send Request <Send className="h-4 w-4" /></>}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              { icon: Phone, label: "Call us", value: "+91 9693529897" },
              { icon: Mail, label: "Email", value: "hello@godseye.io" },
              { icon: MapPin, label: "Headquarters", value: "Tower A, Cyber City, Bengaluru — 560066" },
            ].map((c) => (
              <div key={c.label} className="glass rounded-2xl p-6 flex items-start gap-4 hover:glow transition-all">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-glow/20 to-electric/10">
                  <c.icon className="h-5 w-5 text-cyan-glow" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-medium">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="glass rounded-2xl p-6 relative overflow-hidden h-48">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-cyan-glow/40 blur-2xl animate-pulse-glow" />
                  <MapPin className="relative h-10 w-10 text-cyan-glow" strokeWidth={1.5} />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-xs text-muted-foreground">
                Operations across 14 cities · Pan-India service network
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
