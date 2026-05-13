import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";
import { Showcase } from "@/components/site/Showcase";
import { LiveDemo } from "@/components/site/LiveDemo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SentraVision" },
      { name: "description", content: "CCTV installation, AI cameras, remote monitoring, access control and more." },
    ],
  }),
  component: () => (
    <div className="pt-32">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-cyan-glow">Capabilities</span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-bold">
          Everything you need to<br /><span className="text-gradient">stay protected.</span>
        </h1>
      </div>
      <Services />
      <Showcase />
      <LiveDemo />
    </div>
  ),
});
