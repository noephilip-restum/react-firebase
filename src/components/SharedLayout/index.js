import { Outlet } from "react-router-dom";

import { Nav } from "../Nav";

export const SharedLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default SharedLayout;
