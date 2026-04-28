import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { CalendlyModal } from '@/components/CalendlyModal';

export const metadata: Metadata = {
  title: 'Contact - EasyBrandLabs',
  description: 'Get in touch with our team',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="py-16 sm:py-20 lg:py-24 flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Get In Touch</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Lets discuss how EasyBrandLabs can help your Brand scale
          </p>
        </div>
      </Section>

      {/* Contact Content */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">Send us a message</h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">Other ways to reach us</h2>
            <div className="space-y-4">
              <Card hover={false}>
                <h3 className="mb-2 font-semibold">Email</h3>
                <a href="mailto:support@easybrandlabs.com" className="text-blue-600 hover:underline">
                  support@easybrandlabs.com
                </a>
              </Card>

              <Card hover={false}>
                <h3 className="mb-2 font-semibold">Phone</h3>
                <a href="tel:+966-506797843" className="text-blue-600 hover:underline">
                  +966 50 679 7843
                </a>
              </Card>

              <Card hover={false}>
                <h3 className="mb-2 font-semibold">Schedule a Call</h3>
                <p className="mb-3 text-sm text-slate-600">
                  Book a 30-minute call with our team to discuss your needs
                </p>
                <CalendlyModal />
              </Card>

              <Card hover={false}>
                <h3 className="mb-2 font-semibold">Business Hours</h3>
                <p className="text-slate-600">
                  Monday - Friday: 9am - 6pm EST <br />
                  Saturday - Sunday: Closed
                </p>
              </Card>

              <Card hover={false} className="bg-blue-50">
                <h3 className="mb-2 font-semibold">Quick Response</h3>
                <p className="text-sm text-slate-600">
                  We aim to respond to all inquiries within 2 business hours during business hours.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-slate-50">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {[
            {
              question: 'How long does it take to get a response?',
              answer: 'We respond to all inquiries within 2 business hours during business hours (Mon-Fri, 9am-6pm EST). Urgent matters can call us directly.',
            },
            {
              question: 'Is there a free consultation?',
              answer: 'Absolutely! We offer a free 30-minute consultation to discuss your needs and how we can help your Brand scale.',
            },
            {
              question: 'Can I book an immediate call?',
              answer: 'Yes, use our scheduling link to find a time that works for you. We have availability throughout the week.',
            },
            {
              question: 'Do you offer a demo?',
              answer: 'Yes! We can walk you through our process, show examples of our work, and answer all your questions on a demo call.',
            },
            {
              question: 'What information do you need initially?',
              answer: "Just tell us about your Brand, what services you want to offer, and your growth goals. We'll take it from there!",
            },
          ].map((faq, index) => (
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

      {/* Follow Us */}
      <Section dark className="text-center">
        <h2 className="mb-4 text-2xl font-bold">Connect With Us</h2>
        <p className="mb-6 text-blue-100">Follow for updates, tips, and success stories</p>
        <div className="flex justify-center gap-4">
          {[
            { label: 'Twitter', url: '#' },
            { label: 'LinkedIn', url: '#' },
            { label: 'Instagram', url: '#' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.url}
              className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
            >
              {social.label}
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
}
