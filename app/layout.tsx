import { Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import { HoveringMenu } from "@/components/hovering-menu";

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Dante Gutbrod - UX, Frontend, and AI",
  description: "Dante Gutbrod is designer and developer with a background in cognitive science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.className} antialiased`}>
        <ThemeProvider>
          <ThemeToggle />
          <HoveringMenu />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
