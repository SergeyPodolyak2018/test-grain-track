import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <ul className='flex border-b'>
        <li className='-mb-px mr-1'>
          <Link
            to='/'
            className='bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold'
          >
            Main
          </Link>
        </li>
        <li className='mr-1'>
          <Link
            to='/about'
            className='bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold'
          >
            About
          </Link>
        </li>
      </ul>
      {/* <div className='p-2 flex gap-10'>
        <Link
          to='/'
          className='[&.active]:font-bold'
        >
          Home
        </Link>{' '}
        <Link
          to='/about'
          className='[&.active]:font-bold'
        >
          About
        </Link>
      </div> */}
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
