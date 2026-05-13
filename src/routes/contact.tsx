import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SentraVision" },
      { name: "description", content: "Get a free CCTV consultation. Reach our team via phone, email, or the form." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Contact />
    </div>
  ),
});
