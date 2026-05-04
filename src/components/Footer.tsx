import { TrackedLink } from './TrackedLink';
import { TrackedAnchor } from './TrackedAnchor';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Services', href: '/services' },
      
      { label: 'How It Works', href: '/how-it-works' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500" />
              <span className="font-bold text-slate-900">EasyBrandLabs</span>
            </div>
            <p className="text-sm text-slate-600">
              digital services for brands that want to scale without hiring.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 font-semibold text-slate-900">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={`${link.label}-${link.href}`}>
                    <TrackedLink
                      href={link.href}
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
            &copy; {currentYear} EasyBrandLabs. All rights reserved.
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
