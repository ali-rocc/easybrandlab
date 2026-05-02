'use client';

import React from 'react';
import { trackNavigationClick } from '@/lib/analytics';

type TrackedAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  trackingLabel: string;
  trackingLocation: string;
};

const shouldHandleNavigation = (e: React.MouseEvent<HTMLAnchorElement>): boolean => {
  return !(
    e.defaultPrevented ||
    e.button !== 0 ||
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey ||
    e.altKey ||
    e.currentTarget.target === '_blank'
  );
};

export function TrackedAnchor({
  href = '#',
  trackingLabel,
  trackingLocation,
  onClick,
  ...props
}: TrackedAnchorProps) {
  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (!shouldHandleNavigation(e)) return;

    e.preventDefault();
    await trackNavigationClick(trackingLabel, href, trackingLocation);

    if (href !== '#') {
      window.location.assign(href);
    }
  };

  return <a href={href} onClick={handleClick} {...props} />;
}
