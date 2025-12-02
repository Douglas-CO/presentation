// @ts-ignore
import { Loadable } from '@/layouts';
import { lazy } from 'react';
import AuthRoutes from './AuthRoutes';
import PrivateRoutes from './PrivateRoutes';
import { ADMINISTRACION_PATHS } from './constants';

const AuthLayout = Loadable(
  lazy(() => import('@/app/auth/AuthLogin')),
);

const Home1 = Loadable(lazy(() => import('@/app/main/MainPage')));


// authentication
const LoginPage = Loadable(
  lazy(() => import('@/app/auth/AuthLogin')),
);

const AppRouter = [
  ////* Auth
  {
    path: '/auth',
    element: (
      <AuthRoutes>
        <AuthLayout />
      </AuthRoutes>
    ),
    children: [{ path: 'login', element: <LoginPage /> }],
  },
  {
    path: '/',
    element: (
      <PrivateRoutes>
        <>Full Layout</>
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <Home1 />,
      },

      //////////* Administration ------------
      {
        path: ADMINISTRACION_PATHS.administracion.root,
        element: <>Outlet</>,
        children: [
          ///* pais
          {
            path: ADMINISTRACION_PATHS.administracion.pais,
            element: <>Normal Pais</>,
          },
          {
            path: ADMINISTRACION_PATHS.administracion.paisCrear,
            element: <>Crear Pais</>,
          },
          {
            path: ADMINISTRACION_PATHS.administracion.paisEditar,
            element: <>Actualizar Pais</>,
          },

        ],
      },

    ],
  },
  {
    path: '*',
    element: <>Error 404</>,
  },
];

export default AppRouter;
