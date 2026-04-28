import type { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { ServiceShowcase } from '@/components/ServiceShowcase';

export const metadata: Metadata = {
  title: 'Services - EasyBrandLabs',
  description: 'White-label web development, branding, automation, and marketing services',
};

const serviceDetails = [
  {
    id: 'web-dev',
    title: 'Web Development',
    outcome: 'Launch client websites in 72 hours under your brand',
    suggestedPricing: '$2,999 — $9,999',
    turnaround: '72 hours — 4 weeks (package-dependant)',
    sellScript:
      "We deliver a production-ready website under your brand — fast, SEO-ready, and optimized for conversions.",

    mockPreview:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",

    

    deliverables: [
      {
        title: 'Landing Page (Conversion-First)',
        description:
          'Pixel-perfect landing page with hero, social proof, and CTA. Delivered as a ready-to-deploy HTML/Next.js page.',
        thumbnail:
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop",
      },
      {
        title: 'Brandable Admin Dashboard',
        description:
          'Lightweight dashboard UI with sample analytics and brand colors for demos and screenshots.',
        thumbnail:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      },
      {
        title: 'Performance & SEO Starter Pack',
        description:
          'Preconfigured meta, sitemap, and performance optimizations for quick rankings.',
        thumbnail:
          "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop",
      },
    ],

    packages: [
      {
        name: 'Starter Website',
        price: '$2,999',
        timeline: '72 hours',
        scope: ['1 landing page', 'Basic SEO', '1 round of revisions'],
      },
      {
        name: 'Growth Website',
        price: '$6,999',
        timeline: '2-3 weeks',
        scope: ['Up to 6 pages', 'CMS integration', '2 rounds of revisions'],
        highlighted: true,
      },
      {
        name: 'Premium Brand',
        price: 'Custom',
        timeline: '4+ weeks',
        scope: ['E-commerce', 'Custom integrations', 'Dedicated QA'],
      },
    ],
  },

  {
    id: 'branding',
    title: 'Branding & Design',
    outcome: 'Deliver an Brand-ready brand kit your client can use immediately',
    suggestedPricing: '$1,499 — $7,499',
    turnaround: '1-3 weeks',
    sellScript:
      "You get a full brand identity — logo, typography, and templates that make your business look premium.",

    mockPreview:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&auto=format&fit=crop",

    

    deliverables: [
      {
        title: 'Logo & Wordmark (Multiple Files)',
        description:
          'Primary, secondary and monochrome logo files in vector and PNG formats for immediate use.',
        thumbnail:
          "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&auto=format&fit=crop",
      },
      {
        title: 'Brand Kit (Colors & Fonts)',
        description:
          'Color palette, typography scale, and usage guidelines that keep designs consistent across channels.',
        thumbnail:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop",
      },
      {
        title: 'Social & Marketing Templates',
        description:
          'Editable post templates for social and an email header they can reuse.',
        thumbnail:
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format&fit=crop",
      },
    ],

    packages: [
      { name: 'Identity Starter', price: '$1,499', timeline: '1 week', scope: ['Logo', 'Colors', '1 revision'] },
      {
        name: 'Brand Growth',
        price: '$3,999',
        timeline: '2 weeks',
        scope: ['Logo suite', 'Brand kit', '3 templates'],
        highlighted: true,
      },
      { name: 'Premium Brand', price: 'Custom', timeline: '3+ weeks', scope: ['Complete system', 'Brand book'] },
    ],
  },

  {
    id: 'automation',
    title: 'Automation Systems',
    outcome: 'Automate client workflows to save hours weekly and reduce churn',
    suggestedPricing: '$999 — $6,999',
    turnaround: '1-6 weeks',
    sellScript:
      "We connect your tools and automate repeatable tasks — so you can focus on growth.",

    mockPreview:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop",

    

    deliverables: [
      {
        title: 'Onboarding Workflow',
        description:
          'Automated onboarding sequence (forms → CRM → email sequence) with branded emails.',
        thumbnail:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&auto=format&fit=crop",
      },
      {
        title: 'Lead Routing & Alerts',
        description:
          'Smart routing rules and Slack/email alerts so leads never slip through the cracks.',
        thumbnail:
          "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&auto=format&fit=crop",
      },
      {
        title: 'Integration Diagram',
        description:
          'Visual flow diagram showing how data moves between systems — great for client trust.',
        thumbnail:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop",
      },
    ],

    packages: [
      { name: 'Starter Automation', price: '$999', timeline: '1 week', scope: ['1 workflow', 'Email sequence'] },
      { name: 'Growth Automation', price: '$3,499', timeline: '2-4 weeks', scope: ['3 workflows', 'CRM integration'], highlighted: true },
      { name: 'Enterprise', price: 'Custom', timeline: '4+ weeks', scope: ['Unlimited workflows', 'SLA'] },
    ],
  },

  {
    id: "growth-marketing",
    title: "SEO & Growth Marketing",
    outcome: "Consistent traffic, qualified leads, and scalable acquisition",

    mockPreview:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",

    sellScript:
      "We help businesses grow through search visibility, paid acquisition, and conversion-focused content.",

    turnaround: "2–4 weeks",

    

    deliverables: [
      {
        title: "SEO Optimization",
        description: "On-page SEO, technical fixes, and keyword targeting",
        thumbnail:
          "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop",
      },
      {
        title: "Ad Campaign Setup",
        description: "Google & Meta ads structured for conversions",
        thumbnail:
          "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&auto=format&fit=crop",
      },
      {
        title: "Content Creation",
        description: "High-converting landing pages and marketing content",
        thumbnail:
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format&fit=crop",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="py-16 sm:py-20 lg:py-24 flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Our Services</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Everything you need to deliver world-class digital solutions to your clients
          </p>
        </div>
      </Section>

      {/* Services */}
      {serviceDetails.map((service) => (
        <Section key={service.id} className="bg-transparent">
          <div className="container-custom">
            <ServiceShowcase service={service as any} />
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section dark className="text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          Ready to Add These Services?
        </h2>
        <Button href="/contact" size="lg">
          Get Started Now
        </Button>
      </Section>
    </div>
  );
}