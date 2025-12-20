# Security Implementation with Arcjet

This application uses [Arcjet](https://arcjet.com) to provide comprehensive security protection including bot detection, rate limiting, and email validation.

## Features Implemented

### 🛡️ Shield Protection
- Protects against common attacks (SQL injection, XSS, etc.)
- Bot detection and blocking
- Suspicious request pattern analysis

### ⏱️ Rate Limiting
- **Global**: 100 requests per minute per IP for general browsing
- **Form Submissions**: 3 submissions per minute per IP
- **API Endpoints**: Enhanced protection for sensitive operations

### 📧 Email Validation
- Blocks disposable email addresses
- Validates email format and deliverability
- Prevents invalid email submissions

### 🔒 Input Validation
- Required field validation for name and email
- Name length validation (2-100 characters)
- Email format validation with regex
- Sanitized input handling

## Setup Instructions

1. **Get your Arcjet API key**:
   - Sign up at [https://app.arcjet.com](https://app.arcjet.com)
   - Create a new site/application
   - Copy your API key

2. **Add to environment variables**:
   ```bash
   ARCJET_KEY=your_arcjet_key_here
   ```

3. **Configuration Files**:
   - `lib/arcjet.ts` - Main Arcjet configuration
   - `middleware.ts` - Global protection middleware
   - API routes include specific form protection

## Security Layers

### Frontend Validation
- HTML5 required attributes
- Client-side email format validation
- Input length restrictions
- Real-time feedback to users

### Backend Protection
- Arcjet shield and rate limiting
- Server-side input validation
- Email validation and disposable email blocking
- Comprehensive error handling

### API Security
- Protected endpoints with Arcjet
- Request validation and sanitization
- Proper error responses
- Security headers and CORS protection

## Monitoring

Arcjet provides a dashboard where you can:
- Monitor blocked requests
- View attack patterns
- Analyze traffic patterns
- Configure rules and thresholds

## Testing

To test the security features:

1. **Rate Limiting**: Submit the form multiple times quickly
2. **Email Validation**: Try submitting with invalid emails
3. **Required Fields**: Submit with empty fields
4. **Bot Protection**: Automated requests will be blocked

## Production Considerations

- All rules are set to "LIVE" mode for production blocking
- Monitor the Arcjet dashboard for false positives
- Adjust rate limits based on your traffic patterns
- Consider implementing additional security headers