import type { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  title: 'About - EasyBrandLabs',
  description: 'Learn about EasyBrandLabs and how we help businesses grow with high-quality digital solutions',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="py-16 sm:py-20 lg:py-24 flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">About EasyBrandLabs</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            A small, focused studio dedicated to building high-quality digital products that help businesses grow
          </p>
        </div>
      </Section>

      {/* Story */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
            <p className="mb-4 text-slate-600">
              EasyBrandLabs started with a simple idea — building high-quality digital solutions shouldn’t be complicated, slow, or overpriced.
            </p>
            <p className="mb-4 text-slate-600">
              Instead of operating like a traditional agency with layers of management and overhead, we keep things lean and focused. Every project gets direct attention, faster execution, and a higher level of care.
            </p>
            <p className="text-slate-600">
              The goal is simple: deliver work that actually helps businesses grow — not just look good.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 p-12 text-center">
            <div className="text-6xl">🚀</div>
            <p className="mt-4 font-semibold text-slate-900">Built for Quality & Speed</p>
          </div>
        </div>
      </Section>

      {/* Mission & Values */}
      <Section className="bg-slate-50">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Our Approach</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Quality Over Quantity',
              description: 'Every project is handled with attention to detail and built to a high standard.',
              icon: '✨',
            },
            {
              title: 'Clear Communication',
              description: 'No confusion, no delays. You always know what’s happening.',
              icon: '💬',
            },
            {
              title: 'Built to Perform',
              description: 'Designs aren’t just красив — they are built to convert and grow your business.',
              icon: '📈',
            },
            {
              title: 'Fast & Efficient',
              description: 'Lean workflow means faster delivery without sacrificing quality.',
              icon: '⚡',
            },
            {
              title: 'Modern Tech',
              description: 'Using the latest tools to build scalable and reliable solutions.',
              icon: '🛠️',
            },
            {
              title: 'Long-Term Focus',
              description: 'The goal isn’t just launch — it’s helping your business grow over time.',
              icon: '🤝',
            },
          ].map((item) => (
            <Card key={item.title}>
              <div className="mb-4 text-4xl">{item.icon}</div>
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Work With Us</h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-semibold text-slate-900">Focused & Dedicated</h3>
            <p className="mb-4 text-slate-600">
              You’re not passed between departments or account managers. You get direct attention and a streamlined experience.
            </p>
            <div className="space-y-2">
              {[
                'Direct communication',
                'Faster decision making',
                'More attention to detail',
              ].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> {point}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-900">Modern & Efficient Process</h3>
            <p className="mb-4 text-slate-600">
              Built with a lean workflow that prioritizes speed, clarity, and results.
            </p>
            <div className="space-y-2">
              {[
                'Clear timelines and deliverables',
                'Structured development process',
                'Consistent updates and feedback',
              ].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Stats (REALISTIC VERSION) */}
      <Section className="bg-slate-50">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">Early</p>
            <p className="text-slate-600">Stage Studio</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">High</p>
            <p className="text-slate-600">Attention to Detail</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">Fast</p>
            <p className="text-slate-600">Execution</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">Focused</p>
            <p className="text-slate-600">On Results</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark className="text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          Let’s Build Something That Works
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-blue-100">
          If you’re looking for quality work without the typical agency complexity, let’s talk
        </p>
        <Button href="/contact" size="lg" trackAs="about_final_get_started">
          Get Started
        </Button>
      </Section>
    </div>
  );
}
