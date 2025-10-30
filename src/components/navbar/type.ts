import { IconType } from "react-icons/lib";

export type SubMenuItem = { text: string; href: string };
export type NavItem = {
  href?: string;
  navText: string;
  subMenu?: React.ComponentType | SubMenuItem[];
};

export type MegaMenucard = {
    title: string;
    description?: string;
    icon?: IconType;
    href: string;
}