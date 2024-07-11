import {
  Users,
  Bookmark,
  LayoutGrid
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "Pré Notas",
          active: pathname.includes("/none"),
          icon: LayoutGrid,
          submenus: [
            {
              href: "/prenota",
              label: "Listagem",
              active: pathname === "/"
            },
            {
              href: "/prenota/incluir",
              label: "Incluir",
              active: pathname === "/incluir"
            }
          ]
        }
      ]
    },
    {
      groupLabel: "Links Externos",
      menus: [
        {
          href: "http://hesk.rodoparana.com.br",
          label: "Help Desk",
          active: pathname === "http://hesk.rodoparana.com.br",
          icon: Users,
          submenus: []
        },
        {
          href: "https://sites.google.com/site/baserodoparana/home",
          label: "Intranet",
          active: pathname === "https://sites.google.com/site/baserodoparana/home",
          icon: Bookmark,
          submenus: []
        }
      ]
    }
  ];
}
