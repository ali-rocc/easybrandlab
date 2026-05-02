'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from './Button';
import { TrackedLink } from './TrackedLink';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <TrackedLink
            href="/"
            trackingLabel="logo"
            trackingLocation="navbar"
            className="flex items-center gap-2"
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
          <div className="hidden items-center gap-8 md:flex">
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

          {/* CTA Button */}
          <Button
            href="/contact"
            trackAs="navbar_get_started"
            size="sm"
            className="hidden md:inline-flex"
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-slate-200 py-4 md:hidden">
            {navLinks.map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                trackingLabel={link.label}
                trackingLocation="mobile_navbar"
                className="block py-2 text-sm font-medium text-slate-600 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </TrackedLink>
            ))}
            <Button
              href="/contact"
              trackAs="navbar_get_started_mobile"
              size="sm"
              className="mt-4 w-full"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
