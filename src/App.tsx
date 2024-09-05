import { RouterProvider } from '@tanstack/react-router';
import { Spinner } from './components/Spinner.tsx';
import { createRouter } from '@tanstack/react-router';
import { auth } from './models/auth.tsx';
import { MAbout } from './models/about.tsx';
import './styles/tailwind.css';

import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
    about: undefined!,
  },
  defaultPendingComponent: () => (
    <div className={`p-2 text-2xl`}>
      <Spinner />
    </div>
  ),
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <div>
      <RouterProvider
        router={router}
        defaultPreload='intent'
        defaultPendingMs={500}
        defaultPendingMinMs={500}
        context={{
          auth,
          about: MAbout,
        }}
      />
    </div>
  );
}
