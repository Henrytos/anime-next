import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/contexts/theme/theme-provider";
import { Header } from "@/components/header";
import { SideBar } from "@/components/side-bar";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Tomato",
  description: "SIte para ver animes e mangás ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`min-h-screen bg-background font-sans antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <SideBar />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
