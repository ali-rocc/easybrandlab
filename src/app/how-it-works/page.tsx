import type { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  title: 'How It Works - EasyBrandLabs',
  description: 'Learn how we turn your ideas into powerful digital solutions',
};

const steps = [
  {
    number: '1',
    title: 'Share Your Vision',
    description:
      'Tell us about your business, your goals, and what you want to build. We’ll turn your ideas into a clear plan.',
    details: [
      'Simple consultation to understand your needs',
      'Clear scope, timeline, and deliverables',
      'Tailored solution for your business',
      'No technical knowledge required',
    ],
  },
  {
    number: '2',
    title: 'We Bring It to Life',
    description:
      'Our team designs and builds your project while keeping you updated every step of the way.',
    details: [
      'Modern, high-converting design',
      'Full development handled by experts',
      'Regular progress updates',
      'Built for performance and scalability',
    ],
  },
  {
    number: '3',
    title: 'Refine & Launch',
    description:
      'You review everything, request any changes, and we launch when you’re ready.',
    details: [
      'Revisions to match your expectations',
      'Smooth deployment and setup',
      'Fully optimized and tested',
      'Launch support included',
    ],
  },
  {
    number: '4',
    title: 'Scale & Grow',
    description:
      'We continue supporting you after launch so your business keeps improving and growing.',
    details: [
      'Ongoing support available',
      'Future upgrades and features',
      'Performance monitoring',
      'Long-term partnership',
    ],
  },
];

const timeline = [
  { phase: 'Discovery', duration: '2-3 days', description: 'Understanding your goals and planning' },
  { phase: 'Design', duration: '1-2 weeks', description: 'Creating visuals and user experience' },
  { phase: 'Development', duration: '2-6 weeks', description: 'Building your product' },
  { phase: 'Testing & QA', duration: '3-5 days', description: 'Ensuring everything works perfectly' },
  { phase: 'Launch', duration: '2-3 days', description: 'Going live and final setup' },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="py-16 sm:py-20 lg:py-24 flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">How It Works</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            A simple process to turn your ideas into powerful digital products — without the stress
          </p>
        </div>
      </Section>

      {/* Steps */}
      <Section>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={step.number} className="grid gap-8 lg:grid-cols-2 lg:items-center">
              {index % 2 === 0 ? (
                <>
                  <div>
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl font-bold text-white">
                      {step.number}
                    </div>
                    <h2 className="mb-4 text-2xl sm:text-3xl font-bold">{step.title}</h2>
                    <p className="mb-6 text-lg text-slate-600">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-slate-600">
                          <span className="text-blue-600">✓</span> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="hidden lg:block">
                    <div className="rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 p-10 text-center">
                      <div className="text-5xl">{['💡', '🛠️', '🚀', '📈'][index]}</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="hidden lg:block">
                    <div className="rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 p-10 text-center">
                      <div className="text-5xl">{['💡', '🛠️', '🚀', '📈'][index]}</div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl font-bold text-white">
                      {step.number}
                    </div>
                    <h2 className="mb-4 text-2xl sm:text-3xl font-bold">{step.title}</h2>
                    <p className="mb-6 text-lg text-slate-600">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-slate-600">
                          <span className="text-blue-600">✓</span> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-slate-50">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Project Timeline</h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            A typical timeline for delivering your project efficiently
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {timeline.map((item) => (
            <Card key={item.phase}>
              <p className="font-semibold text-blue-600">{item.phase}</p>
              <p className="mb-2 text-2xl font-bold text-slate-900">{item.duration}</p>
              <p className="text-sm text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Choose EasyBrandLabs?</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'High-Quality Results',
              description: 'We deliver professional, reliable solutions you can trust.',
            },
            {
              title: 'Clear Communication',
              description: 'You always know what’s happening at every stage.',
            },
            {
              title: 'Built to Scale',
              description: 'Your product is designed to grow with your business.',
            },
            {
              title: 'Fast Delivery',
              description: 'We move quickly without compromising quality.',
            },
            {
              title: 'Great Value',
              description: 'High-end results without agency-level pricing.',
            },
            {
              title: 'Ongoing Support',
              description: 'We’re here even after launch to help you grow.',
            },
          ].map((item) => (
            <Card key={item.title}>
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark className="text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to Get Started?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-blue-100">
          Let’s build something that grows your business
        </p>
        <Button href="/contact" size="lg">
          Get Started
        </Button>
      </Section>
    </div>
  );
}