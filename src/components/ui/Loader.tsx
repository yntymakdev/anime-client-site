import React, { FC } from "react";
import { LuLoader } from "react-icons/lu";

const Loader: FC = () => {
  return <LuLoader className="size-8 text-state-400 animate-spin" />;
};

export default Loader;
