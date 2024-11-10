import React from "react";
import Logo from "./logo/Logo";
import MenuContainer from "./navigation/MenuContainer";
import Subscribe from "./subscribe/Subscribe";

const SideBar = () => {
  return (
    <div>
      <Logo />
      <MenuContainer />
      <Subscribe />
    </div>
  );
};

export default SideBar;
