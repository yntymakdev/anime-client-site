import { FC } from "react";
import * as Icons from "react-icons/lu";
import cn from "clsx";
export type TypeIconName = keyof typeof Icons;

interface IIcon {
  name: TypeIconName;
  className?: string;
}

export const Icon: FC<IIcon> = ({ name, className }) => {
  const IConComponent = Icons[name];
  return <IConComponent className={cn("size-4", className)} />;
};
