import type { Metadata } from 'next';
import { ContactPage } from '@/components/pages/ContactPage';
import { getPageMetadata } from '@/lib/i18n/content';

export const metadata: Metadata = getPageMetadata('contact', 'ar');

export default function Page() {
  return <ContactPage locale="ar" />;
}
