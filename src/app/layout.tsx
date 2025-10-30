import { Navbar } from '@/components/navbar/navbar';
import '../styles/globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Next.js Boilerplate',
  description: 'Next.js + Tailwind + Redux + Auth boilerplate',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

    const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
   <html lang="en" className="scroll-smooth">
      <body className="bg-[url(../../public/images/bg/hero-bg02.jpg)] dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Providers>
            <Navbar />
            <main className="pt-20 px-4">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
