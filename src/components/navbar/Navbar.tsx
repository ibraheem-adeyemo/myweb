'use client';

import React, { JSX, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils'; // optional utility for class merging
import { Menu, X } from 'lucide-react';
import { NavbarProps, NavLink } from '@/types/page';
import { NavbarOptions, SeoFooter } from './nav-opt-component';
import { FaDribbble, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import ModalWrapper from '../general/modals/modal-wrapper';


import NavSeoImage from "../../../public/images/home-page-img/nav-med-mm_img.webp";
import { SeoShowcase } from '../SeoShowcase';
import { blogsNavOptions, caseStudyNavOptions, homeNavOptions, sampleServices, sampleTestimonial } from '@/data';

const columns = [
    {
        items: [
            {
                name:"International SEO",
                href:""
            }, 
            {
                name: "Niche Research",
                href: ""
            }, 
            {
                name: "Link Building",
                href: ""
            }, 
            {
                name: "Enterprise SEO",
                href: ""
            }],
    },
    {
        items: [
            {
                name: "Penalty Recovery",
                href: ""
            },
            {
                name: "Content Optimization",
                href: ""
            }, 
            {
                name: "Technical SEO",
                href: ""
            },
            {
                name:  "Competitor Analysis",
                href: ""
            }],
    },
]

const socialLinks = [
    { platform: "Facebook", icon: <FaFacebookF />, href: "#" },
    { platform: "LinkedIn", icon: <FaLinkedinIn />, href: "#" },
    { platform: "X", icon: <RxCross1 />, href: "#" },
    { platform: "Dribbble", icon: <FaDribbble />, href: "#" },
  ]
const caseStudy = {
    category: "SOFTWARE",
    title: "Medical SEO success..",
    image: NavSeoImage,
    linkText: "Read Casestudy",
    linkHref: "#",
  }

const links2 = [
    { name: 'Home', child: <NavbarOptions options={homeNavOptions} />, href: '/about'},
    { name: 'Company', child: <SeoShowcase services={sampleServices} testimonial={sampleTestimonial} testimonialPosition={"right"} />, href: '/about' },
    { name: 'Services', child: <SeoFooter columns={columns} caseStudy={caseStudy} socialLinks={socialLinks} />, href: '/services' },
    { name: 'Casestudy', child: <NavbarOptions options={caseStudyNavOptions} />, href: '/casestudy'},
    { name: 'Blogs', child: <NavbarOptions options={blogsNavOptions} />, href: '/blogs'},
    { name: 'Contact', child: '', href: '/contact'},
]
const links = [
    { name: 'Home',  href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];
  

  export const ListComponent = ({listItems}:{listItems:{name:string,  href:string}[]}) => {
    return (
        <div>
            {
                listItems.map(list => {
                    return(
                        <Link href={list.href} key={list.name}>{list.name}</Link>
                    )
                })
            }
        </div>
    )
  }
export function Navbar({
  logo = 'MyBrand',
  links,
  className,
  onLinkClick,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [overEle, setOverEle] = useState(NaN)

  const handleOver = (num: number) => {
    setIsOpen(true);
    setOverEle(num)
  }

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (onLinkClick) onLinkClick(href);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-all duration-300',
        className
      )}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 mr-auto text-2xl font-bold text-blue-600 dark:text-blue-400">
            {typeof logo === 'string' ? <span>{logo}</span> : logo}
          </div>

          {/* Desktop Links */}
          <div className="flex w-[50rem] md:hidden space-x-8 relative">
            {links.map((link: NavLink , i:number) => {
                return(
                    <div key={i} onMouseOver={()=>handleOver(i)} onMouseOut={() =>setIsOpen(false)} className="py-10" >
                        <div className={`cursor-pointer font-bold ${overEle === i ? 'text-blue-600':''}`}>{link.name}</div>
                        { overEle === i && isOpen && <div className="rounded-2xl absolute top-25 -translate-x-1/2 max-w-[calc(100vw-2rem)]">{link.child}</div>}
                    </div> //isOpen &&
                )                
            })}
          </div>

        </div>
          {/* Mobile Menu Button */}
          <div className="hidden md:display flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800">
          <ul className="flex flex-col space-y-2 px-4 py-3">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="block text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export const NavbarComponent = () => {
    return (
        <Navbar
            logo={<span className="text-2xl font-extrabold text-blue-600">MyApp</span>}
            links={links2}
            onLinkClick={(href) => console.log('Navigating to:', href)}/>
        )
}