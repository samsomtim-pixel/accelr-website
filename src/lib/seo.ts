/**
 * SEO Helper Functions
 * Generates correct canonical and alternate URLs for locale-aware pages
 */

export function getCanonicalUrl(locale: string, path: string): string {
  const baseUrl = 'https://accelr.nl';
  
  // For default locale (nl), don't add /nl prefix (localePrefix: 'as-needed')
  if (locale === 'nl') {
    return `${baseUrl}${path}`;
  }
  
  // For non-default locale (en), add /en prefix
  return `${baseUrl}/en${path}`;
}

export function getAlternateUrls(path: string, nlPath: string, enPath: string) {
  const baseUrl = 'https://accelr.nl';
  
  return {
    canonical: baseUrl + (path.startsWith('/en') ? path : path),
    languages: {
      'nl': `${baseUrl}${nlPath}`,
      'en': `${baseUrl}${enPath}`,
      'x-default': `${baseUrl}${nlPath}`
    }
  };
}

/**
 * Get the correct path for a locale based on routing config
 */
export function getLocalizedPath(locale: string, pathname: string): string {
  // Pathname mapping based on routing.ts
  const pathMap: Record<string, { nl: string; en: string }> = {
    '/': { nl: '/', en: '/en' },
    '/diensten': { nl: '/diensten', en: '/en/services' },
    '/diensten/build': { nl: '/diensten/build', en: '/en/services/build' },
    '/diensten/run': { nl: '/diensten/run', en: '/en/services/run' },
    '/diensten/grow': { nl: '/diensten/grow', en: '/en/services/grow' },
    '/score': { nl: '/score', en: '/en/score' },
    '/cases': { nl: '/cases', en: '/en/cases' },
    '/kennisbank': { nl: '/kennisbank', en: '/en/resources' },
    '/investering': { nl: '/investering', en: '/en/pricing' },
    '/over-ons': { nl: '/over-ons', en: '/en/about' },
    '/contact': { nl: '/contact', en: '/en/contact' },
    '/problemen/geen-pipeline': { nl: '/problemen/geen-pipeline', en: '/en/problems/no-pipeline' },
    '/problemen/afhankelijk-van-founder': { nl: '/problemen/afhankelijk-van-founder', en: '/en/problems/founder-dependent-sales' },
    '/problemen/inconsistente-omzet': { nl: '/problemen/inconsistente-omzet', en: '/en/problems/inconsistent-revenue' },
  };
  
  const mapping = pathMap[pathname];
  if (!mapping) {
    // Fallback: if pathname not in map, use as-is
    return locale === 'nl' ? pathname : `/en${pathname}`;
  }
  
  return locale === 'nl' ? mapping.nl : mapping.en;
}
