import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://accelr.nl';
  
  const pages = [
    { path: '', nlPath: '', enPath: '/en', priority: 1.0 },
    { path: '/diensten', nlPath: '/diensten', enPath: '/en/services', priority: 0.9 },
    { path: '/diensten/build', nlPath: '/diensten/build', enPath: '/en/services/build', priority: 0.8 },
    { path: '/diensten/run', nlPath: '/diensten/run', enPath: '/en/services/run', priority: 0.8 },
    { path: '/diensten/grow', nlPath: '/diensten/grow', enPath: '/en/services/grow', priority: 0.8 },
    { path: '/score', nlPath: '/score', enPath: '/en/score', priority: 0.9 },
    // Cases en kennisbank tijdelijk verwijderd uit sitemap (noindex tot content klaar is)
    { path: '/investering', nlPath: '/investering', enPath: '/en/pricing', priority: 0.7 },
    { path: '/over-ons', nlPath: '/over-ons', enPath: '/en/about', priority: 0.5 },
    { path: '/contact', nlPath: '/contact', enPath: '/en/contact', priority: 0.5 },
    { path: '/problemen/geen-pipeline', nlPath: '/problemen/geen-pipeline', enPath: '/en/problems/no-pipeline', priority: 0.6 },
    { path: '/problemen/afhankelijk-van-founder', nlPath: '/problemen/afhankelijk-van-founder', enPath: '/en/problems/founder-dependent-sales', priority: 0.6 },
    { path: '/problemen/inconsistente-omzet', nlPath: '/problemen/inconsistente-omzet', enPath: '/en/problems/inconsistent-revenue', priority: 0.6 },
  ];

  return pages.flatMap(page => [
    {
      url: `${baseUrl}${page.nlPath}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page.priority,
      alternates: {
        languages: {
          nl: `${baseUrl}${page.nlPath}`,
          en: `${baseUrl}${page.enPath}`,
        }
      }
    },
    {
      url: `${baseUrl}${page.enPath}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page.priority,
      alternates: {
        languages: {
          nl: `${baseUrl}${page.nlPath}`,
          en: `${baseUrl}${page.enPath}`,
        }
      }
    }
  ]);
}


