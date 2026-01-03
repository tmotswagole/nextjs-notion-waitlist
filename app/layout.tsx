import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { ConsentBanner } from "@/components/consent-banner";
import { WebVitals } from "@/components/web-vitals";

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
            // Define dataLayer and the gtag function
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Set default consent to 'denied' for all parameters (Consent Mode v2)
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
            
            // Initialize Google Analytics
            gtag('js', new Date());
            
            // Configure Google Analytics with privacy-first settings
            gtag('config', 'G-Q3P3DJSX93', {
              'anonymize_ip': true,
              'allow_google_signals': false,
              'allow_ad_personalization_signals': false
            });
          `}
        </Script>
      </head>
      <body className={FigtreeFont.className}>
        {children}
        <ConsentBanner />
        <Toaster richColors position="top-center" />
        <Analytics />
        <SpeedInsights />
        <WebVitals />
      </body>
    </html>
  );
}
