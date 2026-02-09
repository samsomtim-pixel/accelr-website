import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['nl', 'en'],
  defaultLocale: 'nl',
  localePrefix: 'as-needed', // NL = root, EN = /en/
  pathnames: {
    '/': '/',
    '/diensten': {
      nl: '/diensten',
      en: '/services'
    },
    '/diensten/build': {
      nl: '/diensten/build',
      en: '/services/build'
    },
    '/diensten/run': {
      nl: '/diensten/run',
      en: '/services/run'
    },
    '/diensten/grow': {
      nl: '/diensten/grow',
      en: '/services/grow'
    },
    '/score': '/score',
    '/problemen/geen-pipeline': {
      nl: '/problemen/geen-pipeline',
      en: '/problems/no-pipeline'
    },
    '/problemen/afhankelijk-van-founder': {
      nl: '/problemen/afhankelijk-van-founder',
      en: '/problems/founder-dependent-sales'
    },
    '/problemen/inconsistente-omzet': {
      nl: '/problemen/inconsistente-omzet',
      en: '/problems/inconsistent-revenue'
    },
    '/cases': {
      nl: '/cases',
      en: '/cases'
    },
    '/kennisbank': {
      nl: '/kennisbank',
      en: '/resources'
    },
    '/investering': {
      nl: '/investering',
      en: '/pricing'
    },
    '/over-ons': {
      nl: '/over-ons',
      en: '/about'
    },
    '/contact': {
      nl: '/contact',
      en: '/contact'
    }
  }
});

