import React, { FC, PropsWithChildren } from "react";
import s from "./MainLayout.module.scss";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";
const MainLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>
      <Header />
      <SideBar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
