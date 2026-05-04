import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { PageTracker } from '@/components/PageTracker';
import './globals.css';

export const metadata: Metadata = {
  title: 'EasyBrandLabs - Conversion-Focused Websites & Growth Systems',
description: 'We build high-converting websites, landing pages, and automation systems that help businesses generate leads and scale without complexity.',
keywords: 'web design for businesses, landing pages, lead generation, conversion optimization, marketing automation',
openGraph: {
  title: 'EasyBrandLabs - Websites & Systems That Turn Visitors Into Customers',
  description: 'Done-for-you websites, landing pages, and automation built to generate leads and grow your business.',
  type: 'website',
},
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logoweb.png', sizes: '96x96', type: 'image/png' },
    ],
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
        {/* Google Analytics */}
        <GoogleAnalytics />
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
