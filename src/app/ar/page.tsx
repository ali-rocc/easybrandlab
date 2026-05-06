import type { Metadata } from 'next';
import { HomePage } from '@/components/pages/HomePage';
import { getPageMetadata } from '@/lib/i18n/content';

export const metadata: Metadata = getPageMetadata('home', 'ar');

export default function Page() {
  return <HomePage locale="ar" />;
}
