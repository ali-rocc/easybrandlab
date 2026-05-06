'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { trackEvent, type AnalyticsEventParams } from '@/lib/analytics';
import type { Locale } from '@/lib/i18n/content';

type LanguageSwitcherProps = {
  href: string;
  fromLanguage: Locale;
  toLanguage: Locale;
  label: string;
  ariaLabel: string;
  location: string;
  className?: string;
  onClick?: () => void;
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

export function LanguageSwitcher({
  href,
  fromLanguage,
  toLanguage,
  label,
  ariaLabel,
  location,
  className = '',
  onClick,
}: LanguageSwitcherProps) {
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!shouldHandleNavigation(e)) return;

    e.preventDefault();

    const params: AnalyticsEventParams = {
      event_category: 'language',
      from_language: fromLanguage,
      to_language: toLanguage,
      current_path: window.location.pathname,
      link_url: href,
      link_location: location,
    };

    await trackEvent('language_switch', params);
    onClick?.();

    if (href.startsWith('/')) {
      router.push(href);
    } else {
      window.location.assign(href);
    }
  };

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      onClick={handleClick}
      className={`inline-flex h-9 items-center justify-center rounded-full border border-slate-300 px-3 text-xs font-semibold text-slate-700 transition-colors hover:border-blue-600 hover:text-blue-600 ${className}`}
    >
      {label}
    </a>
  );
}
