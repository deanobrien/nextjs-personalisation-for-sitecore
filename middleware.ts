import NextAuth from 'next-auth';
export { auth as middleware } from "/auth"
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|favicon|_next/static|_next/image|.*\\.png$).*)'],
};