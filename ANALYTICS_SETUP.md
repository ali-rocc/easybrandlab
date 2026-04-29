# Google Analytics Professional Setup Guide

## Overview
This is a professional Google Analytics implementation for EasyBrandLabs with TypeScript support, environment configuration, and reusable event tracking functions.

## Environment Setup ✅
Your `.env.local` file contains:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-79JT4R0VQJ
```

**Important:** Make sure `.env.local` is in `.gitignore` for production security.

---

## 1. **Core Analytics Functions**

### Track Custom Events
```typescript
import { trackEvent } from '@/lib/analytics';

// Basic event
trackEvent('specific_service_selected', {
  service_name: 'web_development',
  client_type: 'agency',
});

// With numeric value
trackEvent('pricing_page_viewed', {
  package_tier: 'premium',
  engagement_value: 5,
});
```

### Track Page Views (Client-Side Navigation)
```typescript
import { trackPageView } from '@/lib/analytics';

trackPageView('/services', 'Services'); // path, title
```

### Set User Properties
```typescript
import { setUserProperty } from '@/lib/analytics';

// For authenticated users
setUserProperty('user_type', 'agency');
setUserProperty('estimated_revenue', 50000);
```

---

## 2. **Pre-built Event Trackers**

### Form Submission
```typescript
'use client';
import { trackFormSubmission } from '@/lib/analytics';

function ContactForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackFormSubmission('contact_form');
    // ... send form data
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
```

### CTA Button Clicks
```typescript
import { trackCTAClick } from '@/lib/analytics';

<button onClick={() => trackCTAClick('book_consultation', '/services')}>
  Book Consultation
</button>
```

### Service Inquiries
```typescript
import { trackServiceInquiry } from '@/lib/analytics';

function ServiceCard({ serviceName }) {
  return (
    <button onClick={() => trackServiceInquiry(serviceName)}>
      Learn More
    </button>
  );
}
```

### Conversions/Leads
```typescript
import { trackConversion } from '@/lib/analytics';

// After successful form submission
trackConversion('contact_form_submission', 100); // type, optional value
```

### Error Tracking
```typescript
import { trackError } from '@/lib/analytics';

try {
  // your code
} catch (error) {
  trackError(String(error), window.location.pathname);
}
```

---

## 3. **Page-Specific Implementation Examples**

### Contact Page (`src/app/contact/page.tsx`)
```typescript
'use client';
import { trackFormSubmission, trackCTAClick } from '@/lib/analytics';

export default function ContactPage() {
  return (
    <>
      {/* Track Calendly CTA */}
      <button onClick={() => trackCTAClick('calendly_open', '/contact')}>
        Schedule Call
      </button>
      
      {/* Track form submit in ContactForm component */}
    </>
  );
}
```

### Services Page (`src/app/services/page.tsx`)
```typescript
'use client';
import { trackServiceInquiry } from '@/lib/analytics';

function ServiceCard({ name }) {
  return (
    <button onClick={() => {
      trackServiceInquiry(name);
      // Navigate or open modal
    }}>
      Get Started
    </button>
  );
}
```

### API Routes (`src/app/api/contact/route.ts`)
```typescript
// After successful contact submission
export async function POST(request: Request) {
  // ... handle form
  
  // You can log conversion server-side with custom tracking
  // The event will be tracked on client before submission
  return Response.json({ success: true });
}
```

---

## 4. **Key Events to Track**

### Lead Generation Events
- `form_submission` - Contact/inquiry forms
- `service_inquiry` - Service interest clicks
- `conversion` - Lead captured
- `calendly_open` - Consultation booked

### Engagement Events
- `cta_click` - Call-to-action button clicks
- `service_page_viewed` - Service details viewed
- `pricing_reviewed` - Pricing page interaction

### Error Events
- `page_error` - JavaScript errors
- `form_validation_error` - Form submission failures

---

## 5. **Google Analytics 4 Setup (Dashboard)**

### Essential Conversions to Create
1. **Contact Form Submission**: Event: `form_submission` → Param: `form_name = contact_form`
2. **Service Inquiry**: Event: `service_inquiry`
3. **Consultation Booked**: Event: `conversion` → Param: `conversion_type = booking`

### Custom Dashboards to Create
- **Lead Pipeline**: Form submissions → Service inquiries → Conversions
- **Traffic Quality**: Bounce rate, scroll depth, engagement by source
- **Conversion Funnel**: Landing → Services → Contact → Conversion

### Audiences to Build
- Users who viewed services but didn't inquire
- High-engagement users (visited 3+ pages)
- Conversion leads (form + inquiry)
- Traffic by user type (agency, freelancer, etc.)

---

## 6. **Advanced Features**

### Track Page Scroll Depth
```typescript
'use client';
import { trackEvent } from '@/lib/analytics';
import { useEffect } from 'react';

export function useScrollTracking() {
  useEffect(() => {
    let maxScroll = 0;

    const handleScroll = () => {
      const scrollPercent =
        (window.innerHeight + window.scrollY) / document.body.offsetHeight;
      const percent = Math.round(scrollPercent * 100);

      if (percent > maxScroll) {
        maxScroll = percent;
        if ([25, 50, 75, 100].includes(percent)) {
          trackEvent('scroll_depth', {
            scroll_percent: percent,
            page_path: window.location.pathname,
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
```

### Track Time on Page
```typescript
'use client';
import { trackEvent } from '@/lib/analytics';
import { useEffect } from 'react';

export function usePageTimer() {
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (timeOnPage > 10) { // Only track if >10 seconds
        trackEvent('page_engagement', {
          time_on_page: timeOnPage,
          page_path: window.location.pathname,
        });
      }
    };
  }, []);
}
```

---

## 7. **Privacy & GDPR Compliance**

Your current setup includes:
- ✅ `anonymize_ip: true` - Hides full IP addresses
- ✅ `allow_google_signals: true` - Respects user settings

### Add Privacy Notice
Add to your Footer or Privacy Policy:
> "This website uses Google Analytics to understand user behavior and improve services. Data is anonymized and complies with GDPR."

---

## 8. **Testing Your Setup**

### Check if GA is Working
1. Open DevTools → Console
2. Type: `window.gtag` (should show the gtag function)
3. Type: `window.dataLayer` (should show array with events)

### Real-time Testing
1. Go to Google Analytics → Realtime
2. Trigger events on your site
3. You should see them appear in Real-time report within 1-2 seconds

### Debug Mode
Add to your analytics script:
```javascript
gtag('config', '${gaId}', {
  debug_mode: true, // Set false in production
});
```

---

## 9. **Best Practices**

✅ **DO:**
- Track meaningful user actions (forms, CTAs, inquiries)
- Use consistent event naming conventions (snake_case)
- Include contextual parameters (which button, which service)
- Test events before deployment
- Document new custom events

❌ **DON'T:**
- Track personally identifiable information (PII)
- Send duplicate events
- Create too many custom events (keep it to ~15-20)
- Use spaces or special characters in event names
- Forget to test in production environment

---

## 10. **Next Steps**

1. **Test Events**: Interact with your site in real-time to verify tracking
2. **Create Conversions**: Set up conversion goals in GA4 dashboard
3. **Build Audiences**: Create audience segments for retargeting
4. **Set Up Alerts**: Monitor key metrics and get notified of anomalies
5. **Review Weekly**: Check GA4 reports and optimize based on user behavior

