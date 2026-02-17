import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

const intlMiddleware = createMiddleware(routing);

const supabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Portal, admin, and auth routes: Supabase session handling
  if (
    pathname.startsWith('/portal') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/auth')
  ) {
    if (supabaseConfigured) {
      return updateSession(request);
    }
    return NextResponse.next();
  }

  // All other routes: i18n middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/',
    '/(nl|en)/:path*',
    '/portal/:path*',
    '/admin/:path*',
    '/auth/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
