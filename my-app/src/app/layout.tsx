import type { Metadata } from 'next'
import './globals.css'
import Nav from './components/navigation/nav'
import Footer from './components/footer/foot'

import { ClientClickContext } from './components/clickthisbutton'

export const metadata: Metadata = {
  title: 'WritterLo',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-skylight text-skygold font-cuprum">
        <ClientClickContext >
          <header>
            <Nav />
          </header>
          {children}
          <footer className='z-10 relative'>
            <Footer/>
          </footer>
        </ClientClickContext>
      </body>
    </html>
  )
}
