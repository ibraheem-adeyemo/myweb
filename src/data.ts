import { ServiceItem, Testimonial } from "./types/page";

import { HiMiniWifi } from 'react-icons/hi2';
import { TbStack2Filled } from 'react-icons/tb';
import { AiFillDollarCircle } from 'react-icons/ai';
import { AiOutlineTeam } from 'react-icons/ai';

export const sampleServices: ServiceItem[] = [
  { id: "about", title: "About Us", subtitle: "Learn More About Innomax", href:"", icon:HiMiniWifi },
  { id: "pricing", title: "Our Pricing", subtitle: "Streamlined Pricing", href:"", icon:AiFillDollarCircle },
  { id: "team", title: "Our Team", subtitle: "We Are Friendly. Join Our Team.", href:"", icon:AiOutlineTeam },
  { id: "services", title: "Services", subtitle: "Happy To Help You!", href:"", icon:TbStack2Filled },
//   { id: "services-details", title: "Services Details", subtitle: "Happy To Help You!", href:"", icon:"" },
//   { id: "casestudy", title: "Casestudy", subtitle: "Explore All Case Studies.", href:"", icon:"" },
//   { id: "career", title: "Career", subtitle: "Work With Us!", href:"", icon:"" },
//   { id: "career-details", title: "Career Details", subtitle: "Open Roles And More.", href:"", icon:"" },
//   { id: "terms", title: "Terms & Conditions", subtitle: "Your Rights & Responsibilities.", href:"", icon:"" },
//   { id: "privacy", title: "Privacy Policy", subtitle: "Commitment To Confidentiality.", href:"", icon:"" },
];

export const sampleTestimonial: Testimonial = {
  id: "t1",
  name: "Maverick Phoenix",
  role: "CEO at Innomax",
  avatar: "/images/avatar-maverick.jpg",
  quote:
    "As CEO at Innomax, I've worked hard to clarify client requirements and deliver results efficiently without reinventing the wheel.",
  rating: { score: 5, max: 5, count: 200 },
};

export const homeNavOptions = [
    {
        name: 'SEO Strategy',
        href: 'seo-strategy'
    },
    {
        name: 'It Services',
        href: 'it-services'
    },
    {
        name: 'AI & Data Solution',
        href: 'Ai-and-data-solution'
    },
    {
        name: 'Cyber Security',
        href: 'cyber-security'
    },
    {
        name: 'Cloud & Devops',
        href: 'cloud-devops'
    },
    {
        name: 'Help Desk Saas',
        href: 'help-desk-saas'
    },

]

export const caseStudyNavOptions = [
    {
        name: 'Casestudy',
        href: 'casestudy'
    },
    {
        name: 'Casestudy Details',
        href: 'casestudy-details'
    },
]

export const blogsNavOptions = [
    {
        name: 'Blogs',
        href: 'blogs'
    },
    {
        name: 'Blogs Details',
        href: 'blogs-details'
    },
]