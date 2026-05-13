import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import faviconUrl from "@/assets/logo.png?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CursorGlow } from "@/components/site/CursorGlow";
import { Toaster } from "@/components/ui/sonner";
import FloatingActionButtons from "@/components/FloatingActionButtons";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center hero-bg px-4">
      <div className="max-w-md text-center glass-strong rounded-3xl p-10 glow">
        <h1 className="font-display text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Signal lost</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That page is off the grid.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-glow to-electric px-5 py-2.5 text-sm font-medium text-primary-foreground glow"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center hero-bg px-4">
      <div className="max-w-md text-center glass-strong rounded-3xl p-10">
        <h1 className="text-xl font-semibold">Something glitched</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gradient-to-r from-cyan-glow to-electric px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-full glass px-5 py-2.5 text-sm font-medium">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "God's Eye Technologies" },
      { name: "description", content: "God's Eye Technologies delivers premium CCTV installation, AI surveillance, and 24/7 monitoring for businesses and homes." },
      { name: "theme-color", content: "#0a1224" },
      { property: "og:title", content: "God's Eye Technologies — Smart CCTV & AI Security" },
      { property: "og:description", content: "Watching Everything. Protecting Everyone. Advanced AI surveillance and professional CCTV installation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: faviconUrl },
      { rel: "apple-touch-icon", href: faviconUrl },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <CursorGlow />
      <Header />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <FloatingActionButtons />
      <Toaster />
    </QueryClientProvider>
  );
}
