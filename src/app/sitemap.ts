import type { MetadataRoute } from 'next';
import { getAbsoluteUrl, routeKeys } from '@/lib/i18n/content';

export default function sitemap(): MetadataRoute.Sitemap {
  return routeKeys.flatMap((route) => {
    const languages = {
      en: getAbsoluteUrl(route, 'en'),
      ar: getAbsoluteUrl(route, 'ar'),
      'x-default': getAbsoluteUrl(route, 'en'),
    };

    return [
      {
        url: getAbsoluteUrl(route, 'en'),
        lastModified: new Date(),
        changeFrequency: route === 'home' || route === 'services' ? 'weekly' : 'monthly',
        priority: route === 'home' ? 1 : route === 'services' ? 0.8 : 0.7,
        alternates: { languages },
      },
      {
        url: getAbsoluteUrl(route, 'ar'),
        lastModified: new Date(),
        changeFrequency: route === 'home' || route === 'services' ? 'weekly' : 'monthly',
        priority: route === 'home' ? 1 : route === 'services' ? 0.8 : 0.7,
        alternates: { languages },
      },
    ];
  });
}
