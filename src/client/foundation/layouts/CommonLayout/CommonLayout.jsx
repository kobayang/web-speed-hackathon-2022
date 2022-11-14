import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../../components/navs/Header/Header";

export const CommonLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
