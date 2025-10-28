import { StaticImageData } from "next/image";
import { JSX } from "react";
import { IconType } from "react-icons/lib";

type MyComponentProps = {
  child?: string | Record<string, any> | Array<string | Record<string, any>>;
};

export interface NavLink {
  name: string;
  href: string;
  child: JSX.Element | string;
}

export interface NavbarProps {
  logo?: JSX.Element | string;
  links: NavLink[];
  className?: string;
  onLinkClick?: (href: string) => void;
}

export interface FooterColumnProps {
  title?: string;
  items: {name: string; href: string;}[];
}

export interface CaseStudy {
  category: string;
  title: string;
  image: string | StaticImageData;
  linkText: string;
  linkHref: string;
}

export interface SocialLink {
  platform: string;
  icon: JSX.Element;
  href: string;
}

export interface SeoFooterProps {
  columns: FooterColumnProps[];
  socialLinks: SocialLink[];
  caseStudy: CaseStudy;
}

// components/SeoShowcase/types.ts
export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  icon?: string| IconType; // optional svg path or url (can be replaced with ReactNode if needed)
}

export interface Rating {
  score: number; // e.g. 4.8
  max?: number; // default 5
  count?: number; // number of reviews
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  avatar?: string; // image url
  quote: string;
  rating?: Rating;
}

export interface SeoShowcaseProps {
  services: ServiceItem[];
  testimonial: Testimonial;
  testimonialPosition?: "left" | "right"; // default right
}