import { createFileRoute, redirect } from '@tanstack/react-router';
import { MainLayout } from '../layouts/Main';

export const Route = createFileRoute('/')({
  beforeLoad: ({ context, location }) => {
    if (context.auth.status === 'loggedOut') {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: MainLayout,
});
