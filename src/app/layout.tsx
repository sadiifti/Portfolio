import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Md. Sadi | AI Researcher & Technology Leader",
  description: "Portfolio of Md Sadi Iftia Khairul Ferdous Bhuiyan - Deep Learning & CV Researcher, Co-Founder at Call Well, Board Member & COO at GLan Green Energy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-cyan-500/20 selection:text-cyan-700 dark:selection:text-cyan-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
