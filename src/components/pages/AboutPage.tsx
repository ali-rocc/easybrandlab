import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { getLocalizedPath, pageContent, type Locale } from '@/lib/i18n/content';

export function AboutPage({ locale }: { locale: Locale }) {
  const content = pageContent[locale].about;
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
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-start">
            <h2 className="mb-4 text-3xl font-bold">{content.storyTitle}</h2>
            {content.story.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-slate-600 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-slate-50 p-12 text-center">
            <div className="text-6xl">🚀</div>
            <p className="mt-4 font-semibold text-slate-900">{content.badge}</p>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">{content.approachTitle}</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.values.map((item) => (
            <Card key={item.title} className="text-start">
              <div className="mb-4 text-4xl">{item.icon}</div>
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">{content.whyTitle}</h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          {content.columns.map((column) => (
            <div key={column.title} className="text-start">
              <h3 className="mb-4 font-semibold text-slate-900">{column.title}</h3>
              <p className="mb-4 text-slate-600">{column.body}</p>
              <div className="space-y-2">
                {column.points.map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <span className="shrink-0 text-blue-600">✓</span> {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {content.stats.map(([value, label]) => (
            <div key={`${value}-${label}`} className="text-center">
              <p className="text-4xl font-bold text-blue-600">{value}</p>
              <p className="text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark className="text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{content.ctaTitle}</h2>
        <p className="mx-auto mb-8 max-w-2xl text-blue-100">{content.ctaBody}</p>
        <Button href={getLocalizedPath('contact', locale)} size="lg" trackAs="about_final_get_started">
          {content.cta}
        </Button>
      </Section>
    </div>
  );
}
