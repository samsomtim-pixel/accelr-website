import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['nl', 'en'],
  defaultLocale: 'nl',
  localePrefix: 'as-needed',
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
    '/cases': '/cases',
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
    '/contact': '/contact'
  }
});

// CRUCIAAL — dit is wat je LanguageSwitcher nodig heeft
export const { Link, usePathname, useRouter, redirect } = createNavigation(routing);


