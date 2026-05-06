'use client';

import { usePathname } from 'next/navigation';
import { TrackedLink } from './TrackedLink';
import { TrackedAnchor } from './TrackedAnchor';
import { getLocaleFromPath, getLocalizedPath, ui, type RouteKey } from '@/lib/i18n/content';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname() || '/';
  const locale = getLocaleFromPath(pathname);
  const isArabic = locale === 'ar';
  const copy = ui[locale].footer;
  const footerLinks = copy.groups;

  return (
    <footer dir={isArabic ? 'rtl' : 'ltr'} className="border-t border-slate-200 bg-slate-50 text-start">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500" />
              <span className="font-bold text-slate-900">EasyBrandLabs</span>
            </div>
            <p className="text-sm text-slate-600">
              {copy.tagline}
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 font-semibold text-slate-900">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <TrackedLink
                      href={'route' in link ? getLocalizedPath(link.route as RouteKey, locale) : link.href}
                      trackingLabel={link.label}
                      trackingLocation={`footer_${category.toLowerCase()}`}
                      className="text-sm text-slate-600 hover:text-blue-600"
                    >
                      {link.label}
                    </TrackedLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 pt-8 sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">
            &copy; {currentYear} EasyBrandLabs. {copy.rights}
          </p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <TrackedAnchor
              href="#"
              trackingLabel="Twitter"
              trackingLocation="footer_social"
              className="text-sm text-slate-600 hover:text-blue-600"
            >
              Twitter
            </TrackedAnchor>
            <TrackedAnchor
              href="#"
              trackingLabel="LinkedIn"
              trackingLocation="footer_social"
              className="text-sm text-slate-600 hover:text-blue-600"
            >
              LinkedIn
            </TrackedAnchor>
            <TrackedAnchor
              href="#"
              trackingLabel="GitHub"
              trackingLocation="footer_social"
              className="text-sm text-slate-600 hover:text-blue-600"
            >
              GitHub
            </TrackedAnchor>
          </div>
        </div>
      </div>
    </footer>
  );
}
