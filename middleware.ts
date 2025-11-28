import { NextRequest, NextResponse } from 'next/server';
import { i18n } from './i18n-config';
import Negotiator from 'negotiator';
import { match as matchLocale } from '@formatjs/intl-localematcher';

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const defaultLocale = i18n.defaultLocale;

  return matchLocale(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Step 1: Check if the pathname already contains a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return;
  }
  
  // If we are at the root, always show the default locale's content by rewriting
  if (pathname === '/') {
      return NextResponse.rewrite(
        new URL(`/${i18n.defaultLocale}`, request.url)
      );
  }

  // For any other path without a locale, detect the browser's locale and redirect
  const locale = getLocale(request);
  return NextResponse.redirect(
    new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
  );
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};
