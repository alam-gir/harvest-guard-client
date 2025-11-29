import { NextRequest, NextResponse } from 'next/server';
import { i18n } from './i18n-config';
import Negotiator from 'negotiator';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import { fetcher } from './lib/fetcher';
import { TFarmerProfileResponse } from './types/auth.types';

const PROTECTED_ROUTES = ['/dashboard', '/profile'];

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const defaultLocale = i18n.defaultLocale;

  return matchLocale(languages, locales, defaultLocale);
}

const isAuthenticated = () => {
  // const request = await fetch('/auth/me', { credentials: 'include' });
  // console.log('Auth check response status:', request.status);
  // if(request.ok){
  //   const data : TFarmerProfileResponse = await request.json();
  //   return !!data.data;
  // }
  // return false;
  return true;
}; 

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. Check if the path needs protection
  const isProtectedRoute = PROTECTED_ROUTES.some((route) => 
    pathname.includes(route)
  );

  // 3. Check if the pathname already contains a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // --- SECURITY CHECK ---
    // If trying to access protected route without cookie, redirect to login
    if (isProtectedRoute && !isAuthenticated) {
      const locale = pathname.split('/')[1];
      const loginUrl = new URL(`/${locale}/login`, request.url);
      // Optional: Add ?next=... to redirect back after login
      return NextResponse.redirect(loginUrl);
    }
    // ----------------------
    
    return;
  }
  
  // 4. Root Rewrite (Default Locale)
  if (pathname === '/') {
      return NextResponse.rewrite(
        new URL(`/${i18n.defaultLocale}`, request.url)
      );
  }

  // 5. Locale Redirection for missing locales
  const locale = getLocale(request);
  return NextResponse.redirect(
    new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};