import { useAuthStore } from "@/store";
import { Loadable } from "@/layouts";
import { lazy } from "react";

export interface PrivateRoutesProps {
  children: React.ReactNode;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ children }) => {
  const isAuth = useAuthStore((s) => s.isAuth);
  const Home1 = Loadable(lazy(() => import("@/app/main/MainPage")));
  if (!isAuth) return <Home1 />;

  return children;
};

export default PrivateRoutes;
