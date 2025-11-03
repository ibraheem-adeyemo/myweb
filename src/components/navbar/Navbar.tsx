import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../general/form/custom-button'

import LogoImage from '../../../public/images/logo/logo07.svg';
import { NavItem, SubMenuItem } from './type';
import { MegaMenu1 } from './megaMenu1';

const navBarData = [
    {
        navText: 'Home', 
        subMenu: [
            {text: 'Seo Agent', href: ''},
            {text: 'IT Services', href: 'home-2'},
            {text: 'AI & Data Solution', href: 'home-3'},
            {text: 'Cyber Security', href: 'home-4'},
            {text: 'Cloud and Devops', href: ''},
            {text: 'Help Desk Saas', href: 'home-5'},
        ],
        href: '/'
    },
    {
       navText: 'Company',
       subMenu: () => <MegaMenu1 />,
       href: '/'
    },
    {
        navText: 'Services',
        subMenu: ()=><></>,
        href: '/'
    },
    {
        navText: 'Casestudy', 
        subMenu: [
            {text: 'Casestudy', href: 'casestudy'},
            {text: 'Casestudy Details', href: 'casestudy-details'},
        ],
        href: '/'
    },
    {
        navText: 'Blog', 
        subMenu: [
            {text: 'Blog', href: 'blog'},
            {text: 'Blog Details', href: 'blog-details'},
        ],
        href: '/'
    },
    {
        navText: 'Contact', 
        subMenu: [],
        href: '/contact'
    },
]

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center mb-[4rem] mx-auto w-[1320px]">
      {/* Logo */}
      <div>
        <Image src={LogoImage} alt="Company Logo" />
      </div>

      {/* Navigation */}
      <div className="flex md:hi">
        {navBarData.map((item: NavItem, i: number) => {
          const isComponent = typeof item.subMenu === "function";
          const isArray = Array.isArray(item.subMenu);

          const SubMenuComponent = isComponent
            ? (item.subMenu as React.ComponentType)
            : null;
          const subMenuArray = isArray
            ? (item.subMenu as SubMenuItem[])
            : [];

          return (
            <div
              key={item.navText ?? i}
              className="relative px-4 py-2 mr-2 hover:bg-white text-lg group rounded-lg"
            >
              <Link href={item.href ?? "#"} className="inline-flex items-center font-[600]">
                {item.navText}
                {item.subMenu && (
                  <span className="ml-1 text-gray-500">+</span>
                )}
              </Link>

              {/* If subMenu is a React component */}
              {SubMenuComponent && (
                <div className="left-0 translate-x-[-32%] bg-white mt-2 z-20 mt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute transition-all duration-300 ease-in-out ">
                  <SubMenuComponent />
                </div>
              )}

              {/* If subMenu is an array */}
              {isArray && subMenuArray.length > 0 && (
                <ul
                  className="
                    opacity-0 invisible w-[15rem]
                    group-hover:opacity-100 group-hover:visible left-[-4px]
                    transition-all duration-300 ease-in-out
                    absolute mt-8 bg-white p-4 rounded-lg shadow-md z-20
                  "
                >
                  {subMenuArray.map((subM, k) => (
                    <li key={k} className="hover:bg-blue-100 rounded">
                      <Link
                        href={subM.href}
                        className="block w-full font-[600] px-3 py-2 text-gray-800 hover:text-blue-600 "
                      >
                        {subM.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      <div>

      </div>

      {/* CTA Button */}
      <div>
        <Button text="Let's talk" />
      </div>
    </div>
  );
};