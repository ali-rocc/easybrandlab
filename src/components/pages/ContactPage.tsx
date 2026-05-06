import { CalendlyModal } from '@/components/CalendlyModal';
import { Card } from '@/components/Card';
import { ContactForm } from '@/components/ContactForm';
import { Section } from '@/components/Section';
import { TrackedAnchor } from '@/components/TrackedAnchor';
import { pageContent, type Locale } from '@/lib/i18n/content';

export function ContactPage({ locale }: { locale: Locale }) {
  const content = pageContent[locale].contact;
  const isArabic = locale === 'ar';

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className="pt-20">
      <Section className="flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 py-16 sm:py-20 lg:py-24">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">{content.heroTitle}</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">{content.heroBody}</p>
        </div>
      </Section>

      <Section>
        <div dir="ltr" className="grid gap-12 lg:grid-cols-2">
          <div dir={isArabic ? 'rtl' : 'ltr'} className={`text-start ${isArabic ? 'lg:order-2' : ''}`}>
            <h2 className="mb-6 text-2xl font-bold">{content.formTitle}</h2>
            <ContactForm locale={locale} />
          </div>

          <div dir={isArabic ? 'rtl' : 'ltr'} className={`text-start ${isArabic ? 'lg:order-1' : ''}`}>
            <h2 className="mb-6 text-2xl font-bold">{content.infoTitle}</h2>
            <div className="space-y-4">
              <Card hover={false} className="text-start">
                <h3 className="mb-2 font-semibold">{content.email}</h3>
                <TrackedAnchor
                  href="mailto:support@easybrandlabs.com"
                  trackingLabel="support@easybrandlabs.com"
                  trackingLocation="contact_email_card"
                  className="text-blue-600 hover:underline"
                >
                  support@easybrandlabs.com
                </TrackedAnchor>
              </Card>

              <Card hover={false} className="text-start">
                <h3 className="mb-2 font-semibold">{content.phone}</h3>
                <TrackedAnchor
                  href="tel:+966-506797843"
                  trackingLabel="+966 50 679 7843"
                  trackingLocation="contact_phone_card"
                  className="text-blue-600 hover:underline"
                >
                  +966 50 679 7843
                </TrackedAnchor>
              </Card>

              <Card hover={false} className="text-start">
                <h3 className="mb-2 font-semibold">{content.schedule}</h3>
                <p className="mb-3 text-sm text-slate-600">{content.scheduleBody}</p>
                <CalendlyModal locale={locale} />
              </Card>

              <Card hover={false} className="text-start">
                <h3 className="mb-2 font-semibold">{content.hours}</h3>
                <p className="whitespace-pre-line text-slate-600">{content.hoursBody}</p>
              </Card>

              <Card hover={false} className="bg-blue-50 text-start">
                <h3 className="mb-2 font-semibold">{content.quick}</h3>
                <p className="text-sm text-slate-600">{content.quickBody}</p>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">{content.faqTitle}</h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {content.faqs.map((faq) => (
            <Card key={faq.question} hover={false} className="text-start">
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

      <Section dark className="text-center">
        <h2 className="mb-4 text-2xl font-bold">{content.connectTitle}</h2>
        <p className="mb-6 text-blue-100">{content.connectBody}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
            <TrackedAnchor
              key={social}
              href="#"
              trackingLabel={social}
              trackingLocation="contact_social"
              className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
            >
              {social}
            </TrackedAnchor>
          ))}
        </div>
      </Section>
    </div>
  );
}
