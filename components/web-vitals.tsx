'use client'

import { useReportWebVitals } from 'next/web-vitals'
import { track } from '@vercel/analytics'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Send to Vercel Analytics
    track('Web Vitals', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
    })

    // Optional: Send to Google Analytics if you want
    if (window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      })
    }
  })

  return null
}