'use client';

import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { TrackedLink } from './TrackedLink';
import { getLocaleFromPath, getLocalizedPath, getRouteKeyFromPath, ui } from '@/lib/i18n/content';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() || '/';
  const locale = getLocaleFromPath(pathname);
  const isArabic = locale === 'ar';
  const copy = ui[locale].nav;
  const currentRoute = getRouteKeyFromPath(pathname);
  const alternateLocale = locale === 'ar' ? 'en' : 'ar';
  const alternatePath = getLocalizedPath(currentRoute, alternateLocale);

  const navLinks = [
    { href: getLocalizedPath('home', locale), label: copy.home },
    { href: getLocalizedPath('services', locale), label: copy.services },
    { href: getLocalizedPath('howItWorks', locale), label: copy.howItWorks },
    { href: getLocalizedPath('about', locale), label: copy.about },
    { href: getLocalizedPath('contact', locale), label: copy.contact },
  ];

  return (
    <nav
      dir={isArabic ? 'rtl' : 'ltr'}
      className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between gap-4 py-4">
          {/* Logo */}
          <TrackedLink
            href={getLocalizedPath('home', locale)}
            trackingLabel="logo"
            trackingLocation="navbar"
            className="flex items-center gap-2 text-start"
          >
            <Image 
              src="/image.png"
              alt="EasyBrandLabs Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-slate-900">EasyBrandLabs</span>
          </TrackedLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-start md:flex">
            {navLinks.map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                trackingLabel={link.label}
                trackingLocation="navbar"
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
              >
                {link.label}
              </TrackedLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher
              href={alternatePath}
              fromLanguage={locale}
              toLanguage={alternateLocale}
              label={copy.switchTo}
              ariaLabel={copy.switchLabel}
              location="navbar"
            />
            <Button
              href={getLocalizedPath('contact', locale)}
              trackAs="navbar_get_started"
              size="sm"
              className="hidden md:inline-flex"
            >
              {copy.cta}
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher
              href={alternatePath}
              fromLanguage={locale}
              toLanguage={alternateLocale}
              label={copy.switchTo}
              ariaLabel={copy.switchLabel}
              location="mobile_navbar_header"
              className="h-8 px-3"
              onClick={() => setIsOpen(false)}
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100"
              aria-label={copy.menu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-slate-200 py-4 text-start md:hidden">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <TrackedLink
                  key={link.href}
                  href={link.href}
                  trackingLabel={link.label}
                  trackingLocation="mobile_navbar"
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </TrackedLink>
              ))}
            </div>
            <div className="mt-4 border-t border-slate-200 pt-4">
              <Button
                href={getLocalizedPath('contact', locale)}
                trackAs="navbar_get_started_mobile"
                size="sm"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                {copy.cta}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
