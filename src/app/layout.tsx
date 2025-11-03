import '../styles/globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Next.js Boilerplate',
  description: 'Next.js + Tailwind + Redux + Auth boilerplate',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
   <html lang="en" className="scroll-smooth">
      <body className="dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Providers>
            <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
