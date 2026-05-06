import type { Metadata } from 'next';
import { HowItWorksPage } from '@/components/pages/HowItWorksPage';
import { getPageMetadata } from '@/lib/i18n/content';

export const metadata: Metadata = getPageMetadata('howItWorks', 'ar');

export default function Page() {
  return <HowItWorksPage locale="ar" />;
}
