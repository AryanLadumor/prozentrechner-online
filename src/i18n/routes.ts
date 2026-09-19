// Route translations for German SEO-friendly URLs
export const routes = {
  '/': {
    de: '/',
    en: '/en',
  },
  '/discount-calculator': {
    de: '/rabattrechner',
    en: '/en/discount-calculator',
  },
  '/vat-calculator': {
    de: '/mehrwertsteuerrechner',
    en: '/en/vat-calculator',
  },
  '/rule-of-three-calculator': {
    de: '/dreisatz-rechner',
    en: '/en/rule-of-three-calculator',
  },
  '/percentage-difference': {
    de: '/prozentuale-differenz',
    en: '/en/percentage-difference',
  },
  '/salary-raise-calculator': {
    de: '/gehaltsrechner',
    en: '/en/salary-raise-calculator',
  },
  '/percentage-formula': {
    de: '/prozentrechner-formel',
    en: '/en/percentage-formula',
  },
} as const;

export function getLocalizedPath(path: string, locale: 'de' | 'en'): string {
  // Normalize by stripping trailing slashes (but keep the root '/') so that
  // paths coming from Astro.url.pathname (e.g. '/rabattrechner/') still match.
  const normalized = path.length > 1 ? path.replace(/\/+$/, '') : path;

  for (const [key, translations] of Object.entries(routes)) {
    if (translations.en === normalized || translations.de === normalized || key === normalized) {
      return translations[locale];
    }
  }
  return locale === 'en' ? `/en${normalized}` : normalized;
}
