import type { Metadata } from 'next';
import { ServicesPage } from '@/components/pages/ServicesPage';
import { getPageMetadata } from '@/lib/i18n/content';

export const metadata: Metadata = getPageMetadata('services', 'ar');

export default function Page() {
  return <ServicesPage locale="ar" />;
}
