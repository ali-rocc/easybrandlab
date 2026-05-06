'use client';

import { useState, useEffect } from 'react';
import { PopupModal } from 'react-calendly';
import { trackScheduleCallClick } from '@/lib/analytics';
import { ui, type Locale } from '@/lib/i18n/content';

const BOOKING_URL = 'https://cal.com/easybrandlab/booking';

export function CalendlyModal({ locale = 'en' }: { locale?: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);
  const copy = ui[locale].calendly;

  useEffect(() => {
    setRootEl(document.body); // ✅ safest option
  }, []);

  return (
    <>
      {/* Button */}
      <button
        onClick={() => {
          void trackScheduleCallClick('contact_schedule_card', BOOKING_URL);
          setIsOpen(true);
        }}
        className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
      >
        {copy.schedule}
      </button>

      {/* Only render modal when root is ready */}
      {rootEl && (
        <PopupModal
          url={BOOKING_URL}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={rootEl}
        />
      )}
    </>
  );
}
