import Link from 'next/link';
import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  const sortedUsers = users.sort((a, b) =>
    sortOrder === 'name' ? a.name.localeCompare(b.name) : a.email.localeCompare(b.email)
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              <Link href={`/users?sortOrder=name`}>name</Link>
            </td>
            <td>
              <Link href={`/users?sortOrder=email`}>email</Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
