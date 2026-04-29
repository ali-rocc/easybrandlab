import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

import { PageTracker } from '@/components/PageTracker';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'EasyBrandLabs - White-Label Digital Services',
  description: 'Scale your business without hiring. White-label web development, branding, automation, and marketing services.',
  keywords: 'white-label, digital services, web development, branding, automation',
  openGraph: {
    title: 'EasyBrandLabs - Scale Your Brand with White-Label Digital Services',
    description: 'White-label digital services for agencies and entrepreneurs',
    type: 'website',
  },
  icons: {
    icon: "/logoweb.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-79JT4R0VQJ"
  strategy="afterInteractive"
/>

<Script id="ga-init" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-79JT4R0VQJ', {
      debug_mode: true
    });
  `}
</Script>

        
      </head>

      <body className="bg-white text-slate-900">
        <PageTracker />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}