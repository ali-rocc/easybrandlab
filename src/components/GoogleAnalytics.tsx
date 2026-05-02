'use client';

import Script from 'next/script';

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!gaId) return null;

  return (
    <>
      {/* Google tag (gtag.js) - Recommended implementation */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // Single config call - only here, not repeated on page changes
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
            page_title: document.title,
            anonymize_ip: true,
            allow_google_signals: true,
            allow_ad_personalization_signals: true,
          });
        `}
      </Script>
    </>
  );
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
