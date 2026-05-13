import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — SentraVision" },
      { name: "description", content: "Answers to common questions about CCTV pricing, installation, support and warranty." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-cyan-glow">Help center</span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold">
          Got <span className="text-gradient">questions?</span>
        </h1>
      </div>
      <FAQ />
    </div>
  ),
});
