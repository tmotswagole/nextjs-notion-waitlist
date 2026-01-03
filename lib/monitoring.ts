// Vercel monitoring utilities
import { track } from '@vercel/analytics';

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Track with Vercel Analytics
  track(eventName, properties);

  // Track with Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties || {});
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent('Form Submission', {
    form_name: formName,
    success,
  });
};

// Track page views (for SPA navigation)
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-Q3P3DJSX93', {
      page_location: url,
      page_title: title,
    });
  }
};

// Track user engagement
export const trackEngagement = (action: string, element?: string) => {
  trackEvent('User Engagement', {
    action,
    element,
  });
};

// Track errors
export const trackError = (error: string, context?: string) => {
  trackEvent('Error', {
    error_message: error,
    context,
  });
};