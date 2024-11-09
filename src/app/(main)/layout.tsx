import React, { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <div>Layout{children}</div>;
};

export default Layout;
