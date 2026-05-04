import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, responsive websites and web applications',
    icon: '🚀',
  },
  {
    title: 'Branding & Design',
    description: 'Logo design, brand identity, and visual assets',
    icon: '🎨',
  },
  {
    title: 'Automation Systems',
    description: 'Workflow automation and CRM integration',
    icon: '⚙️',
  },
  {
    title: 'Marketing Support',
    description: 'SEO, content, and digital marketing strategies',
    icon: '📊',
  },
];

const steps = [
  {
    number: '1',
    title: 'You Sell',
    description: 'Present our services to your clients under your brand',
  },
  {
    number: '2',
    title: 'We Build',
    description: 'Our expert team delivers high-quality solutions',
  },
  {
    number: '3',
    title: 'You Deliver',
    description: 'Client receives work branded as your Brand',
  },
];

const testimonials = [
  {
    name: 'Your Name',
    role: 'Business Owner',
    content: 'EasyBrandLabs freed up 40 hours per month. We can now take on 3x more clients.',
    avatar: '👩‍💼',
  },
  {
    name: 'Your Name',
    role: 'Digital Strategist',
    content: 'The quality is exceptional. Our clients think we build everything in-house.',
    avatar: '👨‍💼',
  },
  {
    name: 'Your Name',
    role: 'Freelance Consultant',
    content: "This is the white-label solution we've been waiting for. Highly recommend.",
    avatar: '👩‍💻',
  },
];

const faqs = [
  {
    question: 'How does working with EasyBrandLabs work?',
answer: 'You focus on running your business — we build the systems that bring you leads. From websites to funnels and automation, everything is done for you with a clear focus on driving real results.',},
  {
    question: 'What quality standard can I expect?',
    answer: 'We deliver production-ready work at the same quality standards as top agencies. All deliverables are reviewed for quality before handoff.',
  },
  {
    question: 'Can I customize the services?',
    answer: 'Absolutely. We work with you to tailor services to your specific client needs. Custom requirements and integrations are our specialty.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Timelines vary based on scope. A simple website: 2-4 weeks. Branding package: 1-3 weeks. Automation: 3-8 weeks. We\'ll provide exact estimates upfront.',
  },
  {
    question: 'Do you handle client communication?',
    answer: 'No, you maintain all client relationships. We work behind the scenes. You\'re the face of the project.',
  },
  {
    question: 'What if a client needs revisions?',
    answer: 'Revisions are included within the agreed scope. We handle them promptly to ensure client satisfaction.',
  },
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Scale Your Brand <br />
            <span className="text-gradient">Without Hiring</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 sm:text-xl">
            web development, branding, automation, and marketing services. Add revenue streams without overhead.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" size="lg" trackAs="home_hero_start_scaling">
              Start Scaling Now
            </Button>
            <Button href="/how-it-works" variant="secondary" size="lg" trackAs="home_hero_see_how_it_works">
              See How It Works
            </Button>
          </div>
        </div>
      </Section>

      {/* Trust Badges */}
      

      {/* Services Section */}
      <Section id="services">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Everything you need to scale your Brand without hiring developers or designers
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title}>
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="mb-2 font-semibold">{service.title}</h3>
              <p className="text-sm text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section id="how-it-works" dark>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">How It Works</h2>
          <p className="mx-auto max-w-2xl text-blue-100">
            A simple, proven process that lets you focus on sales
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-blue-100">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">What You Will Say After Working With Us</h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Agencies and entrepreneurs trust us to grow their business
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <div className="mb-4 flex items-center gap-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-slate-600 italic">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-slate-50">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} hover={false}>
              <details>
                <summary className="cursor-pointer font-semibold text-slate-900 hover:text-blue-600">
                  {faq.question}
                </summary>
                <p className="mt-3 text-slate-600">{faq.answer}</p>
              </details>
            </Card>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section dark className="text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to Scale?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-blue-100">
          See Which Of Our Growth Services Fits You Best
        </p>
        <Button href="/contact" size="lg" trackAs="home_final_get_started_today">
          Get Started Today
        </Button>
      </Section>
    </div>
  );
}
