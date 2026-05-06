import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { ServiceShowcase } from '@/components/ServiceShowcase';
import { getLocalizedPath, pageContent, serviceDetails, ui, type Locale } from '@/lib/i18n/content';

export function ServicesPage({ locale }: { locale: Locale }) {
  const content = pageContent[locale];
  const isArabic = locale === 'ar';

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className="pt-20">
      <Section className="flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 py-16 sm:py-20 lg:py-24">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">{locale === 'ar' ? 'خدماتنا' : 'Our Services'}</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            {isArabic
              ? 'خدمات رقمية تساعدك تطلق مشروعك بشكل احترافي وتكبر شغلك بسهولة.'
              : 'Everything you need to deliver world-class digital solutions to your clients.'}
          </p>
        </div>
      </Section>

      {serviceDetails[locale].map((service) => (
        <Section key={service.id} className="bg-transparent">
          <ServiceShowcase
            service={service}
            copy={ui[locale].serviceShowcase}
            contactHref={getLocalizedPath('contact', locale)}
            language={locale}
          />
        </Section>
      ))}

      <Section dark className="text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
          {isArabic ? 'جاهز نبدأ على مشروعك؟' : 'Ready to Add These Services?'}
        </h2>
        <Button href={getLocalizedPath('contact', locale)} size="lg" trackAs="services_final_get_started">
          {content.home.hero.primary}
        </Button>
      </Section>
    </div>
  );
}
