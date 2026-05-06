import type { Metadata } from 'next'
import { Noto_Serif, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Preloader from '@/components/Preloader'

const serif = Noto_Serif({
  subsets:  ['latin'],
  weight:   ['400', '600', '700'],
  style:    ['normal', 'italic'],
  variable: '--font-serif',
  display:  'swap',
})

const sans = Plus_Jakarta_Sans({
  subsets:  ['latin'],
  weight:   ['400', '500', '600', '700'],
  variable: '--font-sans',
  display:  'swap',
})

export const metadata: Metadata = {
  title:       'AMR Properties | Staff Accommodation & Labour Camps – Dubai',
  description: "Dubai's most trusted MOHRE-compliant workforce accommodation. 3,390 beds, 24/7 security, full facilities in Al Quoz.",
  keywords:    'staff accommodation Dubai, labour camp Al Quoz, MOHRE compliant, workforce housing UAE',
  openGraph: {
    title:       'AMR Properties | Staff Accommodation Dubai',
    description: 'MOHRE-compliant workforce accommodation in Al Quoz, Dubai.',
    url:         'https://amrproperties.ae',
    siteName:    'AMR Properties',
    locale:      'en_AE',
    type:        'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} scroll-smooth`}>
      <body className="bg-surface text-on-surface font-sans antialiased overflow-x-hidden selection:bg-on-surface selection:text-surface">
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
