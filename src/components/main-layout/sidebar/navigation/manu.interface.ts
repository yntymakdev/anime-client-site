import { TypeIconName } from "@/components/ui/icon";

export interface IMenuItem {
  icon: TypeIconName;
  value: string;
  link: string;
}

export interface IMenu {
  title: string;
  items: IMenuItem;
}
import { ADMIN_URL, PUBLIC_URL } from "@/config/url.config";

import { IMenu } from "./menu.interface";

export const userMenu: IMenu = {
  title: "Меню",
  items: [
    {
      icon: "LuCompass",
      link: PUBLIC_URL.home(),
      value: "Главная",
    },
    {
      icon: "LuClapperboard",
      link: PUBLIC_URL.explorer(),
      value: "Фильмы",
    },
    {
      icon: "LuFlame",
      link: PUBLIC_URL.trending(),
      value: "Популярные",
    },
  ],
};
