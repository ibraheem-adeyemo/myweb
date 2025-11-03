'use client'

import React from 'react'
import { ContactInfo } from './contactInfo'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { ContactForm } from './contactForm';
import { useFormPro } from '@/hooks/useFormPro';

const contactData = {
  phone: "+(1) 1230 452 8597",
  email: "innomax@example.com",
  socialLinks: [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaXTwitter />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
  ],
  offices: [
    {
      title: "United States Office",
      address: "Sunshine Example Park, Floor No 05A, Sector-94,",
    },
    {
      title: "United Kingdom Office",
      address: "12 Buckingham Rd, Example Thwaite, HG3 4TY, UK",
    },
  ],
  hours: [
    { days: "Mon - Sat", time: "8.00 - 5.00" },
    { days: "Sunday", time: "Closed" },
  ],
};


const contact = () => {
  return (
    <div className='flex flex-row w-[1320px] gap-[4rem] mx-auto'>
        <div className='w-2/3'>
            <ContactForm />
        </div>
        <div className="flex w-1/3">
            <ContactInfo data={contactData} />
        </div>
    </div>
  )
}

export default contact