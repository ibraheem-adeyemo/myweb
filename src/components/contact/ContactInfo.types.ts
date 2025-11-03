import { JSX } from "react";

export interface ContactInfoData {
  phone: string;
  email: string;
  socialLinks: { icon: JSX.Element; href: string }[];
  offices: { title: string; address: string }[];
  hours: { days: string; time: string }[];
}

export interface ContactInfoProps {
  data: ContactInfoData;
}

export interface ContactFormData {
    name: string;
    phone: string;
    email: string;
    message: string;
}