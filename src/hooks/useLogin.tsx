import { useRouter } from '@tanstack/react-router';
import { Route } from '../routes/login';
import { TLoginPageProps } from '../definitions/loginPage';
import { TAuth } from '../definitions/auth';
import React from 'react';

export function useLogin(): TLoginPageProps {
  const router = useRouter();

  const search = Route.useSearch();
  const { auth, status } = Route.useRouteContext({
    select: ({ auth }) => ({ auth, status: auth.status }),
  });

  React.useLayoutEffect(() => {
    if (status === 'loggedIn' && search.redirect) {
      router.history.push(search.redirect);
    }
  }, [status, search.redirect]);

  const onSubmit = (userName: string) => {
    auth.login(userName);
    router.invalidate();
  };
  const logout = () => {
    auth.logout();
    router.invalidate();
  };

  return {
    logout,
    onSubmit,
    status: status as TAuth['status'],
    username: auth.username,
  };
}
