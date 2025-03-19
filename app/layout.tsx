import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Dataloop",
    template: "%s - Dataloop",
  },
  description: "DataloopThis is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "Dataloop",
    url: baseUrl,
    siteName: "DataLoop",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white",
        GeistSans.variable,
        GeistMono.variable
      )}
      style={{ background: "#134FED" }}
    >
      <body>
        <main>
          {children}

          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
