"use client";

import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import DeliverablePreview from './DeliverablePreview';
import BeforeAfterBlock from './BeforeAfterBlock';

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

export function ServiceShowcase({ service }: { service: ServiceModel }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <Card>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          
          {/* visual */}
          <div className="lg:col-span-4">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="mb-4 h-44 w-full overflow-hidden rounded bg-white shadow-sm">
                <img
                  src={service.mockPreview || "/placeholder.jpg"}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <div className="mb-1 text-sm font-medium text-slate-600">Outcome</div>
                <div className="mb-2 text-lg font-semibold">{service.outcome}</div>

                <div className="flex gap-2">
                  <Button onClick={() => setOpen(prev => !prev)} variant="primary">
                    {open ? 'Hide Details' : 'View Details'}
                  </Button>

                  <Button href="/contact" variant="secondary">
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* summary */}
          <div className="lg:col-span-8">
            <h3 className="mb-2 text-2xl font-bold">{service.title}</h3>

            <p className="mb-4 text-slate-600">
              {service.sellScript ?? 'A productized service you can resell under your brand.'}
            </p>

            <div className="mb-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-4 text-sm shadow-sm">
                <div className="text-xs text-slate-500">Turnaround</div>
                <div className="font-semibold">{service.turnaround ?? '2–4 weeks'}</div>
              </div>

              <div className="rounded-lg bg-white p-4 text-sm shadow-sm">
                <div className="text-xs text-slate-500">Pricing</div>
                <div className="font-semibold text-blue-600">
                  Custom quote
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-medium text-slate-900">
                What you get (at a glance)
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {service.deliverables.slice(0, 4).map((d) => (
                  <div key={d.title} className="flex items-start gap-3 rounded-md bg-slate-50 p-3">
                    <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
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
        <div className="space-y-6 animate-slide-up border-t pt-6">

          <div>
            <h4 className="mb-4 text-xl font-bold">
              What You Actually Deliver to Your Client
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
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <div className="mb-2 font-semibold">Process flow</div>
                <ol className="space-y-2 text-slate-600">
                  <li>1. Intake & discovery (You)</li>
                  <li>2. Design & build (Us)</li>
                  <li>3. QA & revisions (Us)</li>
                  <li>4. Branded delivery (You)</li>
                </ol>
              </div>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h4 className="mb-3 text-lg font-bold">Outcome</h4>

              <p className="mb-3 text-slate-600">
                 <em>
                We deliver a production-ready solution under your brand — no dev team needed.
                </em>
              </p>

              <div className="font-semibold text-blue-600 mb-2">
                Custom pricing based on client needs
              </div>

              <div className="text-sm text-slate-600">
                Turnaround: {service.turnaround ?? '2–4 weeks'}
              </div>

              <div className="mt-4">
                <Button href="/contact" variant="primary">
                  Request Quote
                </Button>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h4 className="mb-3 text-lg font-bold">
                Behind the Scenes (Done-for-You)
              </h4>

              <ul className="list-inside list-disc space-y-2 text-slate-600">
                <li>Project management and updates</li>
                <li>Design, development, and QA</li>
                <li>Branding applied to deliverables</li>
                <li>Revisions included</li>
                <li>Final handoff with documentation</li>
              </ul>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceShowcase;