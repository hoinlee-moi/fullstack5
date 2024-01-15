import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './app/_lib/auth';

export async function middleware(request: NextRequest) {
  const session = await auth();

  if (!session)
    return NextResponse.redirect(new URL('/api/auth/signin', request.url));
  return NextResponse.next();
}
export const config = {
  matcher: ['/photos', '/sample'],
};
