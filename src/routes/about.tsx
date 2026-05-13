import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SentraVision" },
      { name: "description", content: "A decade of protecting what matters. Learn about our team and mission." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-cyan-glow">Who we are</span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold">
          Built by engineers.<br /><span className="text-gradient">Trusted by enterprises.</span>
        </h1>
      </div>
      <About />
      <WhyUs />
      <Testimonials />
    </div>
  ),
});
