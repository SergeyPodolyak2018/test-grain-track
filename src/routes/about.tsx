import { createFileRoute, redirect } from '@tanstack/react-router';
import { AboutLayout } from '../layouts/About';

export const Route = createFileRoute('/about')({
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
  component: AboutLayout,
});
