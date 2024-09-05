export type TLoginPageProps = {
  onSubmit: (name: string) => void;
  logout: () => void;
  status: 'loggedOut' | 'loggedIn';
  username?: string;
};
