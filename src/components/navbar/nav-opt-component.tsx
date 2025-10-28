import { CaseStudy, FooterColumnProps, SeoFooterProps, SocialLink } from "@/types/page";
import React, { JSX, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaDribbble } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Image, { StaticImageData } from 'next/image';
import Link from "next/link";


const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-2">
      {title && <h4 className="text-lg font-semibold text-gray-900">{title}</h4>}
      <ul className="flex flex-col gap-2">
        {items.map((item, idx) => (
          <Link
            key={idx}
            className="text-gray-700 hover:text-blue-600 transition-colors py-2 font-bold cursor-pointer"
            href={item?.href}
          >
            {item?.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};


const CaseStudyCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => {
  return (
    <div className="bg-black text-white rounded-r-2xl p-6 flex flex-col justify-between w-full max-w-sm">
      <div>
        <p className="text-xs font-semibold uppercase text-gray-400 tracking-wider">
          {caseStudy?.category}
        </p>
        <h3 className="text-xl font-bold mt-1 leading-tight">
          {caseStudy?.title}
        </h3>
      </div>

      <Image
        src={caseStudy?.image}
        alt={caseStudy?.title}
        className="rounded-xl w-full object-cover my-4"
      />

      <a
        href={caseStudy?.linkHref}
        className="text-white text-sm font-medium flex items-center gap-2 hover:underline"
      >
        {caseStudy?.linkText} <span>↗</span>
      </a>
    </div>
  );
};

const SocialLinks: React.FC<{ socialLinks: SocialLink[] }> = ({ socialLinks }) => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          aria-label={link.platform}
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export const SeoFooter: React.FC<SeoFooterProps> = ({
  columns,
  caseStudy,
  socialLinks,
}) => {
  return (
    <footer className="w-[60rem] flex flex-rox text-black">
      <div className="flex flex-col justify-between p-10 gap-10 border border-gray-200">
        {/* Left side - columns */}
        <div className="flex flex-row gap-10 w-full">
          {columns.map((col, i) => (
            <FooterColumn key={i} {...col} />
          ))}
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-200 pt-6 flex flex-row md:flex-col items-center justify-between gap-4">
            <div className="flex items-center gap-3">
            <span className="font-medium text-gray-600">Follow Us:</span>
            <SocialLinks socialLinks={socialLinks} />
            </div>

            <div className="text-gray-600 text-sm">
            Looking for new career?{" "}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
                We’re Hiring
            </a>
            </div>
        </div>        
      </div>
{/* Right side - case study */}
        <div className="flex justify-center lg:justify-end"> 
          <CaseStudyCard caseStudy={caseStudy} />
        </div> 
    </footer>
  );
};

export const NavbarOptions : React.FC<{ options: {name:string, href: string}[]}> = ({options}) => {

    const [overElem, setOverEle] = useState<number>(NaN);

    const handleOnOver = (elem: number) => {
        setOverEle(elem)
    }

    const handleOverLeave = () => {
        setOverEle(NaN)
    }
    return (
        <div className="border border-gray-200 rounded-md" onMouseLeave={() => handleOverLeave()}>
            <div className="flex flex-col">
                {
                    options.map((item, indx) => {
                        return (
                            <Link href={item.href} key={indx} onMouseOver={() => handleOnOver(indx)} className={`py-2 px-4 w-[12rem] rounded-md mx-3 my-2 font-bold ${indx === overElem ? 'bg-blue-100 text-blue-600' : ''}`}>
                                {item.name}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}