// import { NextRequest, NextResponse } from 'next/server';
// import middleware from 'next-auth/middleware';

// export default middleware 없이 바로 export
export { default } from 'next-auth/middleware';

// 내장 미들웨어 안 쓸 때
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/new-page', request.url));
// }

// export default middleware;

export const config = {
  // *: 0 or more parameters
  // +: one or more
  // ?: 0 or 1
  // matcher: ['/users/:id*'],
  matcher: ['/dashboard/:path*'],
};
