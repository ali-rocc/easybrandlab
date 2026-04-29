'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { initGA } from '@/lib/analytics';

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    // Declare gtag global type
    window.gtag = window.gtag || function () {
      (window.dataLayer = window.dataLayer || []).push(arguments);
    };

    // Initialize GA when script loads
    initGA();
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            anonymize_ip: true,
            allow_google_signals: true,
            allow_ad_personalization_signals: true,
          });
        `}
      </Script>
    </>
  );
}

// Type definition for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
