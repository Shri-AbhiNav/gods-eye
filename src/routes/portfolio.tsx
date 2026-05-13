import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — SentraVision" },
      { name: "description", content: "Recent CCTV installations and case studies across offices, warehouses and homes." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-cyan-glow">Our work</span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold">
          Real installations.<br /><span className="text-gradient">Real results.</span>
        </h1>
      </div>
      <Portfolio />
      <Testimonials />
    </div>
  ),
});
