'use client';

import { usePageTracking } from '@/lib/hooks';

/**
 * PageTracker component - tracks page views on route change
 * Add this to your root layout to automatically track all page navigation
 */
export function PageTracker() {
  usePageTracking();
  return null; // This component renders nothing, just handles tracking
}
