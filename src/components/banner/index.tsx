import React from 'react'
import { HomeBannerCTA } from './banner-CTA'
import Image from 'next/image'
import BannerImage from '../../../public/images/home-page-img/hero-img02.webp'
import SEO1Image from '../../../public/images/home-page-img/hero-img03.png'
import Hero4Image from '../../../public/images/home-page-img/hero-img04.png'
import ContactBannerImage from '../../../public/images/home-page-img/contact-img.webp'

export const HomeBanner = () => {
  return (
    <div className='mx-auto flex w-[1320px]'>
        <HomeBannerCTA />
        <div className='relative'>
            <Image src={BannerImage} alt='An SEO Engineer presing laptop' />
            <div className='absolute top-0 left-20'>
                <Image src={SEO1Image} alt='' />
            </div>
            <div className='absolute bottom-0 right-0'>
                <Image src={Hero4Image} alt='' />
            </div>
        </div>
    </div>
  )
}

export const ContactBanner = () => {
     return (
    <div className='mx-auto flex w-[1320px]'>
        <HomeBannerCTA />
        <div className='relative'>
            <Image src={ContactBannerImage} alt='An SEO Engineer presing laptop' />            
        </div>
    </div>
  )
}
