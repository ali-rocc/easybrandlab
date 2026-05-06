import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { getLocalizedPath, pageContent, type Locale } from '@/lib/i18n/content';

export function HomePage({ locale }: { locale: Locale }) {
  const content = pageContent[locale].home;
  const isArabic = locale === 'ar';

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className="pt-20">
      <Section className="flex min-h-[90vh] items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {content.hero.title[0]} <br />
            <span className="text-gradient">{content.hero.title[1]}</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 sm:text-xl">
            {content.hero.body}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href={getLocalizedPath('contact', locale)} size="lg" trackAs="home_hero_start_scaling">
              {content.hero.primary}
            </Button>
            <Button
              href={getLocalizedPath('howItWorks', locale)}
              variant="secondary"
              size="lg"
              trackAs="home_hero_see_how_it_works"
            >
              {content.hero.secondary}
            </Button>
          </div>
        </div>
      </Section>

      <Section id="services">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{content.servicesTitle}</h2>
          <p className="mx-auto max-w-2xl text-slate-600">{content.servicesBody}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.services.map((service) => (
            <Card key={service.title} className="text-start">
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="mb-2 font-semibold">{service.title}</h3>
              <p className="text-sm text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="how-it-works" dark>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{content.howTitle}</h2>
          <p className="mx-auto max-w-2xl text-blue-100">{content.howBody}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {content.steps.map((step) => (
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

      <Section>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{content.testimonialsTitle}</h2>
          <p className="mx-auto max-w-2xl text-slate-600">{content.testimonialsBody}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {content.testimonials.map((testimonial) => (
            <Card key={`${testimonial.name}-${testimonial.role}`}>
              <div className="mb-4 flex items-center gap-3 text-start">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-slate-600">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{content.faqTitle}</h2>
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
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{content.ctaTitle}</h2>
        <p className="mx-auto mb-8 max-w-2xl text-blue-100">{content.ctaBody}</p>
        <Button href={getLocalizedPath('contact', locale)} size="lg" trackAs="home_final_get_started_today">
          {content.cta}
        </Button>
      </Section>
    </div>
  );
}
