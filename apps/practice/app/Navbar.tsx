'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className='flex gap-4 p-4'>
      <Link href={'/'}>Go to Home page</Link>
      <Link href={'/users'}>Go to Users tab</Link>
      <Link href={'/admin'}>Go to Admin tab</Link>
      {status === 'authenticated' && (
        <div>
          {session.user!.name}
          <Link href={'/api/auth/signout'} className='ml-4'>
            로그아웃
          </Link>
        </div>
      )}
      {status === 'unauthenticated' && <Link href={'/api/auth/signin'}>로그인</Link>}
    </nav>
  );
};

export default Navbar;
