// @ts-ignore
import Loadable from "@/layouts/full/shared/loadable/Loadable";
import { lazy } from "react";
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";
import FullLayout from "@/layouts/full/FullLayout";

const AuthLayout = Loadable(
  lazy(() => import("@/auth/pages/LoginPage/LoginPage"))
);

// authentication
const LoginPage = Loadable(
  // lazy(() => import('../views/authentication/auth1/Login')),
  lazy(() => import("../auth/pages/LoginPage/LoginPage"))
);

const Home1 = () => {
  const logout = () => {
    localStorage.removeItem("auth-store");
  };
  return (
    <>
      <h1>Bienvenido</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </>
  );
};
const Error404 = () => {
  return (
    <>
      <h1>ERROR 404</h1>
    </>
  );
};

const AppRouter = [
  ////* Auth
  {
    path: "/auth",
    element: (
      <AuthRoutes>
        <AuthLayout />
      </AuthRoutes>
    ),
    children: [{ path: "login", element: <LoginPage /> }],
  },
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <FullLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <Home1 />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
];

export default AppRouter;
