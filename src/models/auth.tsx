import { TAuth } from '../definitions/auth';

export const auth: TAuth = {
  status: 'loggedOut',
  username: undefined,
  login: (username: string) => {
    auth.status = 'loggedIn';
    auth.username = username;
  },
  logout: () => {
    auth.status = 'loggedOut';
    auth.username = undefined;
  },
};
