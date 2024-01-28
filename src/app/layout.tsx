import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/contexts/theme/theme-provider";
import { Header } from "@/components/header/header";
import { SideBar } from "@/components/side-bar";
import { Toaster } from "@/components/ui/toaster";
import { FavoriteProvider } from "@/contexts/context-favorites";

export const metadata: Metadata = {
  title: {
    template: "%s | NextAnime",
    default: "NextAnime",
  },
  description: "SIte para ver animes e mangás ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        className={`min-h-screen bg-background font-sans antialiased relative bg-neutral-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FavoriteProvider>
            <Header />
            {children}
            <Toaster />
            <SideBar />
          </FavoriteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
