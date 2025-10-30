'use client'

import Banner from '@/components/banner';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <Banner />
  );
}
