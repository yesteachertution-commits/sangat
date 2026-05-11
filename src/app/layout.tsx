import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sangat Natural — Premium Spices & Seasonings",
  description:
    "Discover the world's finest spices, sourced naturally and crafted with tradition. Sangat Natural brings luxury flavors to your kitchen.",
  keywords: "spices, natural spices, premium spices, sangat natural, organic spices",
  openGraph: {
    title: "Sangat Natural — Premium Spices & Seasonings",
    description: "Discover the world's finest spices, sourced naturally and crafted with tradition.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-dark-900 text-cream-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
