// @ts-ignore
import Loadable from "@/layouts/full/shared/loadable/Loadable";
import { lazy } from "react";

const Layouts = Loadable(
  lazy(() => import("@/app/main/presentation/pages/tables/PresentationPages"))
);

const Home1 = () => {
  return (
    <>
      <h1>Bienvenido</h1>
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
    path: "/",
    element: (
        <Layouts />
    ),
    children: [
      {
        index: true,
        element: <Home1 />,
      },
      //////////* rutas ------------
      {/*
        path: ROUTER_PATHS.administracion.root,
        element: <AdministrationModule />,
        children: [
          ///* pais
          {
            path: ROUTER_PATHS.administracion.pais,
            element: <PaisesPage />,
          },
          {
            path: ROUTER_PATHS.administracion.paisCrear,
            element: <CreatePaisPage />,
          },
          {
            path: ROUTER_PATHS.administracion.paisEditar,
            element: <UpdatePaisPage />,
          },
        ],
      */},

    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
];

export default AppRouter;
