import { Navigate, useRoutes } from 'react-router-dom';

import { PATH_AFTER_LOGIN } from 'src/config';

import { mainRoutes } from './sections/main';
import { authRoutes } from './sections/auth';
import { dashboardRoutes } from './sections/dashboard';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to={PATH_AFTER_LOGIN} replace />,
    },

    // Auth routes
    ...authRoutes,

    // Dashboard routes
    ...dashboardRoutes,

    // Main routes
    ...mainRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
