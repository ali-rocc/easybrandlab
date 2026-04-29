# Quick Integration Examples for Your Components

## 1. ContactForm Component

Add this to `src/components/ContactForm.tsx`:

```typescript
'use client';

import { trackFormSubmission, trackConversion } from '@/lib/analytics';
import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Track form submission
      trackFormSubmission('contact_form');

      const formData = new FormData(e.currentTarget);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // Track conversion after successful submission
        trackConversion('contact_form_submission', 100);
        
        // Show success message
        alert('Thank you! We\'ll get back to you soon.');
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error('Form submission failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields */}
    </form>
  );
}
```

---

## 2. ServiceShowcase Component

Add tracking to service cards:

```typescript
'use client';

import { trackServiceInquiry, trackCTAClick } from '@/lib/analytics';

export function ServiceShowcase() {
  const services = [
    { id: 1, name: 'Web Development', description: '...' },
    { id: 2, name: 'Branding', description: '...' },
    // ... more services
  ];

  return (
    <div className="services-grid">
      {services.map(service => (
        <div key={service.id}>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          
          <button 
            onClick={() => {
              trackServiceInquiry(service.name);
              // Navigate to service detail or open modal
            }}
          >
            Learn More
          </button>

          <button 
            onClick={() => {
              trackCTAClick('get_started', service.name);
              // Handle CTA action
            }}
          >
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
}
```

---

## 3. CalendlyModal Component

Track when users interact with Calendly:

```typescript
'use client';

import { trackCTAClick } from '@/lib/analytics';
import { useState } from 'react';

export function CalendlyModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    trackCTAClick('calendly_open', 'scheduling_modal');
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>
        Schedule a Call
      </button>

      {isOpen && (
        <div className="modal">
          {/* Your Calendly embed */}
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </>
  );
}
```

---

## 4. Navbar Component - Track Navigation

Add tracking to key navigation items:

```typescript
'use client';

import Link from 'next/link';
import { trackCTAClick } from '@/lib/analytics';

export function Navbar() {
  return (
    <nav>
      <div className="nav-links">
        <Link href="/services">Services</Link>
        <Link href="/how-it-works">How It Works</Link>
        
        <button 
          onClick={() => trackCTAClick('navbar_contact_click')}
          onClick={() => {/* navigate to contact */}}
        >
          Contact
        </button>

        <button 
          onClick={() => trackCTAClick('navbar_calendly_click')}
          onClick={() => {/* open calendly */}}
        >
          Book a Call
        </button>
      </div>
    </nav>
  );
}
```

---

## 5. Button Component - Generic CTA Tracking

Update `src/components/Button.tsx` to track clicks:

```typescript
'use client';

import { trackCTAClick } from '@/lib/analytics';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  trackAs?: string; // e.g., 'contact_cta', 'pricing_cta'
  variant?: 'primary' | 'secondary';
  [key: string]: any;
}

export function Button({ 
  children, 
  onClick, 
  trackAs,
  ...props 
}: ButtonProps) {
  const handleClick = () => {
    // Track the button click if trackAs is provided
    if (trackAs) {
      trackCTAClick(trackAs, window.location.pathname);
    }
    
    // Call original onClick if provided
    onClick?.();
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

// Usage:
// <Button trackAs="pricing_cta">View Pricing</Button>
// <Button trackAs="demo_request_cta">Request Demo</Button>
```

---

## 6. DeliverablePreview Component

Track when users view deliverable previews:

```typescript
'use client';

import { trackEvent } from '@/lib/analytics';

export function DeliverablePreview({ type }: { type: string }) {
  const handleViewMore = () => {
    trackEvent('deliverable_preview_expanded', {
      deliverable_type: type,
      page_location: window.location.pathname,
    });
  };

  return (
    <div>
      {/* Your preview content */}
      <button onClick={handleViewMore}>
        View Full Example
      </button>
    </div>
  );
}
```

---

## 7. Section Component - Track Visibility

Track when important sections come into view:

```typescript
'use client';

import { trackEvent } from '@/lib/analytics';
import { useEffect, useRef } from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  title?: string;
}

export function Section({ id, children, title }: SectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent('section_viewed', {
            section_id: id,
            section_title: title || id,
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [id, title]);

  return (
    <section ref={sectionRef} id={id}>
      {children}
    </section>
  );
}
```

---

## Summary: What Gets Tracked

With these integrations, you'll track:

✅ **Lead Generation**
- Contact form submissions
- Service inquiries
- Calendly scheduling clicks

✅ **Engagement**
- CTA clicks (across navbar, sections, buttons)
- Section visibility (hero, features, pricing, etc.)
- Deliverable exploration

✅ **User Behavior**
- Page navigation
- Time on page
- Scroll depth (if you add the hook)

---

## Testing Integration

1. Open your site in DevTools
2. Go to Console tab
3. Interact with your components
4. Watch `window.dataLayer` to see events being added
5. Check Google Analytics → Real-time to see events arrive

