'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { trackNavigationClick } from '@/lib/analytics';

type TrackedLinkProps = React.ComponentProps<typeof Link> & {
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

const hrefToString = (href: TrackedLinkProps['href']): string => {
  if (typeof href === 'string') return href;

  const pathname = href.pathname || '';
  const query = href.query
    ? `?${new URLSearchParams(href.query as Record<string, string>).toString()}`
    : '';
  const hash = href.hash || '';

  return `${pathname}${query}${hash}`;
};

export function TrackedLink({
  href,
  trackingLabel,
  trackingLocation,
  onClick,
  ...props
}: TrackedLinkProps) {
  const router = useRouter();
  const hrefString = hrefToString(href);

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    if (!shouldHandleNavigation(e)) return;

    e.preventDefault();
    await trackNavigationClick(trackingLabel, hrefString, trackingLocation);

    if (hrefString.startsWith('/')) {
      router.push(hrefString);
    } else {
      window.location.assign(hrefString);
    }
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
