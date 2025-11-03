'use client'

import {HomeBanner} from '@/components/banner';
import './globals.css';
import { Navbar } from '@/components/navbar/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className='bg-[url(../../public/images/bg/hero-bg02.jpg)] py-[4rem]'>        
        <Navbar />
        <HomeBanner />
    </div>
  );
}
