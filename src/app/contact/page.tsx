import {ContactBanner, HomeBanner} from '@/components/banner'
import Contact from '@/components/contact/contact'
import { Navbar } from '@/components/navbar/navbar'
import React from 'react'

const Page = () => {
  return (
    <div className='bg-[url(../../public/images/bg/page_bg01.jpg)] flex flex-col gap-[10rem] bg-no-repeat py-[4rem]\\\\'>
        <div className=''>
            <Navbar />
            <ContactBanner />
        </div>
        <Contact />
        <div>Contract Page</div>
    </div>
  )
}

export default Page