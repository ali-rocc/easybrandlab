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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // For link buttons with tracking, prevent default and handle navigation
    if (trackAs && href) {
      e.preventDefault();
      // Track the button click
      trackCTAClick(trackAs, window.location.pathname);
      // Navigate after a brief delay to ensure tracking is sent
      setTimeout(() => {
        router.push(href);
      }, 50);
    }
  };

  const handleButtonClick = () => {
    // Track the button click if trackAs is provided
    if (trackAs) {
      trackCTAClick(trackAs, window.location.pathname);
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
      <a href={href} className={classes} onClick={handleLinkClick}>
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
