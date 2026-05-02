'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

/**
 * Hook to track page navigation events on route changes
 * Note: Initial page_view is handled by GoogleAnalytics component
 * This only tracks subsequent route changes
 */
export function usePageTracking() {
  const pathname = usePathname();
  const initialLoadDone = useRef(false);

  useEffect(() => {
    // Skip first load (GoogleAnalytics component already sends initial page_view)
    if (!initialLoadDone.current) {
      initialLoadDone.current = true;
      return;
    }

    // For subsequent route changes, send page_view event
    if (pathname) {
      trackEvent("page_view", {
        page_location: window.location.href,
        page_path: pathname,
        page_title: document.title,
      });
    }
  }, [pathname]);
}
