import { NextResponse, type NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const legacyPaths: Record<string, string> = {
    '/about': '/en/about',
    '/contact': '/en/contact',
    '/projects': '/en/projects',
    '/resume': '/en/about',
    '/services': '/en',
    '/blog': '/en',
  };
  if (legacyPaths[pathname]) {
    return NextResponse.redirect(new URL(legacyPaths[pathname], request.url));
  }
  if (pathname.startsWith('/projects/')) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }

  const firstSegment = pathname.split('/')[1];
  const locale = firstSegment === 'fr' ? 'fr' : 'en';
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-portfolio-locale', locale);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\.).*)'],
};
