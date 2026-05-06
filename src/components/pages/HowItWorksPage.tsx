import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { getLocalizedPath, pageContent, type Locale } from '@/lib/i18n/content';

const icons = ['💡', '🛠️', '🚀', '📈'];

export function HowItWorksPage({ locale }: { locale: Locale }) {
  const content = pageContent[locale].howItWorks;
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
        <div className="space-y-12">
          {content.steps.map((step, index) => {
            const copy = (
              <div dir={isArabic ? 'rtl' : 'ltr'} className="text-start">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl">{step.title}</h2>
                <p className="mb-6 text-lg text-slate-600">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-slate-600">
                      <span className="shrink-0 text-blue-600">✓</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
            const visual = (
              <div className="hidden lg:block">
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 p-10 text-center">
                  <div className="text-5xl">{icons[index]}</div>
                </div>
              </div>
            );

            return (
              <div key={step.number} dir="ltr" className="grid gap-8 lg:grid-cols-2 lg:items-center">
                {(isArabic ? index % 2 !== 0 : index % 2 === 0) ? (
                  <>
                    {copy}
                    {visual}
                  </>
                ) : (
                  <>
                    {visual}
                    {copy}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">{content.timelineTitle}</h2>
          <p className="mx-auto max-w-2xl text-slate-600">{content.timelineBody}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {content.timeline.map((item) => (
            <Card key={item.phase} className="text-start">
              <p className="font-semibold text-blue-600">{item.phase}</p>
              <p className="mb-2 text-2xl font-bold text-slate-900">{item.duration}</p>
              <p className="text-sm text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">{content.whyTitle}</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.reasons.map((item) => (
            <Card key={item.title} className="text-start">
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section dark className="text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{content.ctaTitle}</h2>
        <p className="mx-auto mb-8 max-w-2xl text-blue-100">{content.ctaBody}</p>
        <Button href={getLocalizedPath('contact', locale)} size="lg" trackAs="how_it_works_final_get_started">
          {content.cta}
        </Button>
      </Section>
    </div>
  );
}
