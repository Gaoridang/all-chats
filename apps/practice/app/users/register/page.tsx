'use client';

import { useState } from 'react';

const UserRegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <input
        className='border-2'
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className='border-2'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='btn btn-primary'>회원가입</button>
    </>
  );
};

export default UserRegisterPage;
