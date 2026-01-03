import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jurifica.com"),
  title: "Jurifica - AI Co-Pilot for Global Legal Compliance",
  description:
    "Join the private beta waitlist for Jurifica, the AI-powered legal compliance platform that helps high-growth startups scale globally with confidence. Stop guessing, start scaling.",
  openGraph: {
    title: "Jurifica - AI Co-Pilot for Global Legal Compliance",
    description:
      "Join the private beta waitlist for Jurifica, the AI-powered legal compliance platform that helps high-growth startups scale globally with confidence.",
    url: "https://jurifica.com",
    siteName: "Jurifica",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1280,
        height: 832,
        alt: "Jurifica - AI Co-Pilot for Global Legal Compliance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jurifica - AI Co-Pilot for Global Legal Compliance",
    description:
      "Join the private beta waitlist for Jurifica, the AI-powered legal compliance platform that helps high-growth startups scale globally with confidence.",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "legal compliance",
    "AI legal platform",
    "startup legal",
    "global compliance",
    "legal technology",
    "contract management",
    "regulatory compliance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q3P3DJSX93"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q3P3DJSX93');
          `}
        </Script>
      </head>
      <body className={FigtreeFont.className}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
