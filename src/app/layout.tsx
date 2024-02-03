import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/_contexts/theme/theme-provider";
import { Header } from "@/_components/header/header";
import { SideBar } from "@/_components/side-bar/side-bar";
import { Toaster } from "@/_components/ui/toaster";
import { FavoriteProvider } from "@/_contexts/context-favorites";
import AuthProvider from "@/_providers/auth";
import { QuerysProvider } from "@/_contexts/context-querys";

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
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <FavoriteProvider>
              <QuerysProvider>
                <Header />
                {children}
              </QuerysProvider>
              <Toaster />
              <SideBar />
            </FavoriteProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
