"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay showing banner to avoid hydration issues
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("cookie-consent");
      if (!consent) {
        setShowBanner(true);
      } else if (consent === "accepted") {
        enableGoogleAnalytics();
      } else if (consent === "essential") {
        // Enable only analytics for essential cookies
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("consent", "update", {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'granted'
          });
        }
      }
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const enableGoogleAnalytics = () => {
    if (typeof window !== "undefined" && window.gtag) {
      // Update consent for all Consent Mode v2 parameters
      window.gtag("consent", "update", {
        'ad_storage': 'granted',
        'ad_user_data': 'granted', 
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    }
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    if (typeof window !== "undefined" && window.gtag) {
      // Only grant analytics storage for essential cookies
      window.gtag("consent", "update", {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'granted'
      });
    }
    setShowBanner(false);
  };

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    enableGoogleAnalytics();
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    if (typeof window !== "undefined" && window.gtag) {
      // Explicitly deny all consent parameters
      window.gtag("consent", "update", {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied', 
        'analytics_storage': 'denied'
      });
    }
    setShowBanner(false);
  };

  if (!isLoaded || !showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/90 border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-medium mb-1">Cookie Consent</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to analyze site usage, improve your experience, and for advertising purposes. 
                This includes analytics data, user behavior tracking, and personalized advertising.{" "}
                <a 
                  href="/privacy" 
                  className="text-primary underline hover:no-underline"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="text-xs"
            >
              Decline All
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleAcceptEssential}
              className="text-xs"
            >
              Essential Only
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="text-xs"
            >
              Accept All
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDecline}
              className="p-1.5"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}