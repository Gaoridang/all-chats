import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];

  return (
    <nav className='flex space-x-6 border-b px-5 mb-5 h-14 items-center'>
      <Link href='/'>Logo</Link>
      <ul className='flex space-x-6'>
        {links.map((link) => (
          <li key={link.href} className='text-zinc-500 hover:text-zinc-800 transition-colors'>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;