import React, { Suspense } from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href={'/users/new'}>Go to New Users Tab</Link>
      <Link href={'/users/register'} className='ml-4'>
        <button className='btn'>회원가입</button>
      </Link>
      <Suspense fallback={<div>...Loading</div>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
