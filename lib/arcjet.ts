import arcjet, { shield, fixedWindow, validateEmail } from "@arcjet/next";

// Create the main Arcjet instance
const aj = arcjet({
  key: process.env.ARCJET_KEY!, // Get your key from https://app.arcjet.com
  characteristics: ["ip.src"], // Track requests by IP address
  rules: [
    // Shield protects against common attacks
    shield({
      mode: "LIVE", // Will block requests in production
    }),
    // Rate limiting for the entire application
    fixedWindow({
      mode: "LIVE",
      window: "1m", // 1 minute window
      max: 10, // 10 requests per minute per IP
    }),
  ],
});

// Specific configuration for form submissions
export const formProtection = arcjet({
  key: process.env.ARCJET_KEY!,
  characteristics: ["ip.src"],
  rules: [
    shield({
      mode: "LIVE",
    }),
    // Stricter rate limiting for form submissions
    fixedWindow({
      mode: "LIVE",
      window: "1m", // 1 minute window
      max: 3, // 3 form submissions per minute per IP
    }),
    // Email validation
    validateEmail({
      mode: "LIVE",
      block: ["DISPOSABLE", "INVALID"], // Block disposable and invalid emails
    }),
  ],
});

export default aj;