import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
 
export default function middleware(request: NextRequest) {
  return createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'de'],
 
    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: 'en'
  })(request);
}
 
export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
