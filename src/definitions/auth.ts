export type TAuth = {
  login: (username: string) => void;
  logout: () => void;
  status: 'loggedOut' | 'loggedIn';
  username?: string;
};
