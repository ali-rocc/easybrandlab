"use client";

import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import DeliverablePreview from './DeliverablePreview';
import BeforeAfterBlock from './BeforeAfterBlock';
import { trackEvent } from '@/lib/analytics';
import type { Locale, ui } from '@/lib/i18n/content';

export interface ServiceModel {
  id: string;
  title: string;
  outcome: string;
  mockPreview?: string;
  deliverables: Array<{ title: string; description: string; thumbnail?: string }>;
  beforeAfter?: { before?: string; after?: string };
  turnaround?: string;
  sellScript?: string;
}

type ServiceShowcaseCopy = (typeof ui)['en']['serviceShowcase'];

export function ServiceShowcase({
  service,
  copy,
  contactHref,
  language,
}: {
  service: ServiceModel;
  copy: ServiceShowcaseCopy;
  contactHref: string;
  language: Locale;
}) {
  const [open, setOpen] = useState(false);
  const isArabic = language === 'ar';

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className="space-y-6 text-start">
      <Card>
        <div dir="ltr" className="grid gap-6 lg:grid-cols-12 lg:items-start">
          
          {/* visual */}
          <div className={`lg:col-span-4 ${isArabic ? 'lg:order-2' : ''}`}>
            <div dir={isArabic ? 'rtl' : 'ltr'} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-start">
              <div className="mb-4 h-44 w-full overflow-hidden rounded bg-white shadow-sm">
                <img
                  src={service.mockPreview || "/placeholder.jpg"}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <div className="mb-1 text-sm font-medium text-slate-600">{copy.outcome}</div>
                <div className="mb-2 text-lg font-semibold">{service.outcome}</div>

                <div className="flex flex-wrap justify-start gap-2">
                  <Button 
                    onClick={() => {
                      trackEvent('service_details_viewed', { service_name: service.title, language });
                      setOpen(prev => !prev);
                    }} 
                    variant="primary"
                  >
                    {open ? copy.hideDetails : copy.viewDetails}
                  </Button>

                  <Button 
                    href={contactHref}
                    variant="secondary"
                    trackAs={`service_card_request_quote_${service.id}`}
                  >
                    {copy.requestQuote}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* summary */}
          <div dir={isArabic ? 'rtl' : 'ltr'} className={`text-start lg:col-span-8 ${isArabic ? 'lg:order-1' : ''}`}>
            <h3 className="mb-2 text-2xl font-bold">{service.title}</h3>

            <p className="mb-4 text-slate-600">
              {service.sellScript ?? copy.fallback}
            </p>

            <div className="mb-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-4 text-sm shadow-sm">
                <div className="text-xs text-slate-500">{copy.turnaround}</div>
                <div className="font-semibold">{service.turnaround ?? '2-4 weeks'}</div>
              </div>

              <div className="rounded-lg bg-white p-4 text-sm shadow-sm">
                <div className="text-xs text-slate-500">{copy.pricing}</div>
                <div className="font-semibold text-blue-600">
                  {copy.customQuote}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-medium text-slate-900">
                {copy.glance}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {service.deliverables.slice(0, 4).map((d) => (
                  <div key={d.title} className="flex items-start gap-3 rounded-md bg-slate-50 p-3 text-start">
                    <div className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                      ✓
                    </div>
                    <div>
                      <div className="font-semibold">{d.title}</div>
                      <div className="text-sm text-slate-600">{d.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Card>

      {/* expanded details */}
      {open && (
        <div className="animate-slide-up space-y-6 border-t pt-6 text-start">

          <div>
            <h4 className="mb-4 text-xl font-bold">
              {copy.deliver}
            </h4>

            <DeliverablePreview items={service.deliverables} />
          </div>

          <div>
            {/* <h4 className="mb-4 text-xl font-bold">Interactive Preview</h4> */}

            {service.beforeAfter ? (
              <BeforeAfterBlock
                beforePreview={service.beforeAfter.before}
                afterPreview={service.beforeAfter.after}
              />
            ) : (
              <div className="rounded-lg border border-slate-200 bg-white p-6 text-start">
                <div className="mb-2 font-semibold">{copy.processFlow}</div>
                <ol className="space-y-2 text-slate-600">
                  {copy.process.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            
            <div className="rounded-lg border border-slate-200 bg-white p-6 text-start">
              <h4 className="mb-3 text-lg font-bold">{copy.outcomeTitle}</h4>

              <p className="mb-3 text-slate-600">
                 <em>
                {copy.outcomeBody}
                </em>
              </p>

              <div className="mb-2 font-semibold text-blue-600">
                {copy.customPricing}
              </div>

              <div className="text-sm text-slate-600">
                {copy.turnaround}: {service.turnaround ?? '2-4 weeks'}
              </div>

              <div className="mt-4">
                <Button
                  href={contactHref}
                  variant="primary"
                  trackAs={`service_details_request_quote_${service.id}`}
                >
                  {copy.requestQuote}
                </Button>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 text-start">
              <h4 className="mb-3 text-lg font-bold">
                {copy.doneForYou}
              </h4>

              <ul className="list-inside list-disc space-y-2 text-slate-600">
                {copy.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceShowcase;
