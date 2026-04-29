import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { PageTracker } from '@/components/PageTracker';
import './globals.css';

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