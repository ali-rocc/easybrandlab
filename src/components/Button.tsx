'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { trackCTAClick } from '@/lib/analytics';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
  trackAs?: string; // e.g., 'contact_cta', 'pricing_cta'
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const textFromChildren = (children: React.ReactNode): string => {
  if (typeof children === 'string' || typeof children === 'number') {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(textFromChildren).join(' ');
  }

  if (React.isValidElement(children)) {
    return textFromChildren(children.props.children);
  }

  return 'cta';
};

const toEventName = (value: string): string => {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '') || 'cta';
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

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  trackAs,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const router = useRouter();
  const autoTrackName = href ? toEventName(textFromChildren(children)) : undefined;
  const ctaName = trackAs || autoTrackName;

  const handleLinkClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (ctaName && href && shouldHandleNavigation(e)) {
      e.preventDefault();
      await trackCTAClick(ctaName, window.location.pathname, href);
      onClick?.();

      if (href.startsWith('/')) {
        router.push(href);
      } else {
        window.location.assign(href);
      }
    }
  };

  const handleButtonClick = async () => {
    // Track the button click if trackAs is provided
    if (trackAs) {
      await trackCTAClick(trackAs, window.location.pathname);
    }
    // Call original onClick if provided
    onClick?.();
  };
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95',
    secondary: 'border-2 border-slate-200 text-slate-900 hover:border-blue-600 hover:text-blue-600',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        aria-disabled={disabled}
        className={classes}
        onClick={handleLinkClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={handleButtonClick}
      type={type}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
