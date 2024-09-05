import { useLogin } from '../hooks/useLogin';
import { LoginComponent } from '../pages/Login';

export function LoginLayout() {
  const { logout, onSubmit, status, username } = useLogin();
  return (
    <LoginComponent
      logout={logout}
      onSubmit={onSubmit}
      status={status}
      username={username}
    />
  );
}
