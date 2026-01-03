# Vercel Monitoring Setup

This project is configured with comprehensive Vercel monitoring tools to track performance, user behavior, and application health.

## Enabled Monitoring Tools

### 1. Vercel Analytics
- **Purpose**: Track page views, user sessions, and custom events
- **Implementation**: `@vercel/analytics/react`
- **Location**: `app/layout.tsx`
- **Features**:
  - Automatic page view tracking
  - Custom event tracking via `trackEvent()` function
  - Privacy-compliant (no cookies)

### 2. Vercel Speed Insights
- **Purpose**: Monitor Core Web Vitals and performance metrics
- **Implementation**: `@vercel/speed-insights/next`
- **Location**: `app/layout.tsx`
- **Metrics Tracked**:
  - Largest Contentful Paint (LCP)
  - First Input Delay (FID)
  - Cumulative Layout Shift (CLS)
  - First Contentful Paint (FCP)
  - Time to First Byte (TTFB)

### 3. Web Vitals Reporting
- **Purpose**: Custom Web Vitals tracking and reporting
- **Implementation**: Custom `WebVitals` component
- **Location**: `components/web-vitals.tsx`
- **Features**:
  - Sends Web Vitals to both Vercel Analytics and Google Analytics
  - Real User Monitoring (RUM)
  - Performance regression detection

### 4. Google Analytics Integration
- **Purpose**: Detailed user behavior analytics
- **Implementation**: Google Analytics 4 (GA4)
- **Location**: `app/layout.tsx`
- **Features**:
  - GDPR-compliant consent management
  - Custom event tracking
  - Enhanced ecommerce tracking (if needed)

## Custom Tracking Implementation

### Form Submission Tracking
```typescript
// Automatically tracks form submissions
trackFormSubmission("waitlist", success);
```

### Error Tracking
```typescript
// Tracks application errors
trackError(errorMessage, context);
```

### Custom Events
```typescript
// Track any custom events
trackEvent("Button Click", { button_name: "CTA", location: "hero" });
```

## Monitoring Utilities

The `lib/monitoring.ts` file provides helper functions for:
- `trackEvent()` - Custom event tracking
- `trackFormSubmission()` - Form completion tracking
- `trackPageView()` - Manual page view tracking
- `trackEngagement()` - User interaction tracking
- `trackError()` - Error and exception tracking

## Privacy & Compliance

### GDPR Compliance
- Google Analytics is configured with denied consent by default
- Users must explicitly consent via the consent banner
- Analytics storage is only enabled after user consent

### Data Collection
- Vercel Analytics: No personal data, privacy-first
- Speed Insights: Performance metrics only
- Google Analytics: Respects user consent preferences

## Accessing Your Data

### Vercel Dashboard
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Navigate to the "Analytics" tab for traffic data
4. Navigate to the "Speed Insights" tab for performance data

### Google Analytics
1. Go to [analytics.google.com](https://analytics.google.com)
2. Select your property (GA4)
3. View real-time data, audience reports, and custom events

## Key Metrics to Monitor

### Performance Metrics
- **Core Web Vitals scores** (aim for green ratings)
- **Page load times** (target < 3 seconds)
- **Time to Interactive** (target < 5 seconds)

### User Behavior
- **Conversion rate** (form submissions / page views)
- **Bounce rate** (users leaving without interaction)
- **Session duration** (engagement quality)

### Business Metrics
- **Waitlist signups** (primary conversion goal)
- **Traffic sources** (organic, direct, referral)
- **Geographic distribution** (market insights)

## Troubleshooting

### Analytics Not Working
1. Check browser console for errors
2. Verify Vercel deployment includes analytics
3. Ensure ad blockers aren't interfering

### Speed Insights Missing
1. Confirm `@vercel/speed-insights` is installed
2. Check that component is imported in layout
3. Wait 24-48 hours for data to appear

### Google Analytics Issues
1. Verify GA4 tracking ID is correct
2. Check consent banner is working
3. Test in incognito mode to avoid ad blockers

## Next Steps

1. **Set up alerts** in Vercel dashboard for performance regressions
2. **Create custom dashboards** in Google Analytics for key metrics
3. **Monitor conversion funnels** to optimize user experience
4. **Set up A/B testing** using Vercel's edge functions (optional)

## Additional Resources

- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Next.js Web Vitals Documentation](https://nextjs.org/docs/advanced-features/measuring-performance)