import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Alim, Al-khazri",
  description: "Frontend developer portfolio showcasing skills and projects",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/wilted-flower.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/wilted-flower.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/wilted-flower.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/wilted-flower.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
