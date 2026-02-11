import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Skip locale routing for portal and admin routes
  if (request.nextUrl.pathname.startsWith('/portal') || request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next();
  }
  
  // Redirect root to portal login
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/portal/login', request.url));
  }
  
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(nl|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};


