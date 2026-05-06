import type { Metadata } from 'next';
import { AboutPage } from '@/components/pages/AboutPage';
import { getPageMetadata } from '@/lib/i18n/content';

export const metadata: Metadata = getPageMetadata('about', 'ar');

export default function Page() {
  return <AboutPage locale="ar" />;
}
