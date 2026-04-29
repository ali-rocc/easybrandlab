'use client';

import React, { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  trackVisibility?: boolean;
}

export function Section({ children, className = '', id, dark = false, trackVisibility = true }: SectionProps) {
  const sectionRef = useRef<any>(null);

  useEffect(() => {
    if (!trackVisibility || !id) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent('section_viewed', {
            section_id: id,
            section_title: id.replace(/-/g, ' '),
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [id, trackVisibility]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section-padding ${dark ? 'bg-slate-900 text-white' : 'bg-white'} ${className}`}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}
