import { Outlet } from 'react-router-dom';

export type MainModuleProps = {};

const MainModule: React.FC<MainModuleProps> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MainModule;