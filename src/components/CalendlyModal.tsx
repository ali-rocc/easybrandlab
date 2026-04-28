'use client';

import { useState, useEffect } from 'react';
import { PopupModal } from 'react-calendly';

export function CalendlyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootEl(document.body); // ✅ safest option
  }, []);

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
      >
        Schedule now →
      </button>

      {/* Only render modal when root is ready */}
      {rootEl && (
        <PopupModal
          url="https://cal.com/easybrandlab/booking" // replace
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={rootEl}
        />
      )}
    </>
  );
}