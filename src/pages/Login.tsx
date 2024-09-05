import React from 'react';
import { TLoginPageProps } from '../definitions/loginPage';

export function LoginComponent(props: TLoginPageProps) {
  const [username, setUsername] = React.useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(username);
  };

  return props.status === 'loggedIn' ? (
    <div>
      Logged in as <strong>{props.username}</strong>
      <div className='h-2' />
      <button
        onClick={props.logout}
        className='text-sm bg-blue-500 text-white border inline-block py-1 px-2 rounded'
      >
        Log out
      </button>
      <div className='h-2' />
    </div>
  ) : (
    <div className='p-2'>
      <div>You must log in!</div>
      <div className='h-2' />
      <form
        onSubmit={onSubmit}
        className='flex gap-2'
      >
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
          className='border p-1 px-2 rounded'
        />
        <button
          type='submit'
          className='text-sm bg-blue-500 text-white border inline-block py-1 px-2 rounded'
        >
          Login
        </button>
      </form>
    </div>
  );
}
