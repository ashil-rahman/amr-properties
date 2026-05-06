'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

const NAV = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About' },
  { href: '/rooms',      label: 'Rooms' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/contact',    label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-20 flex items-center justify-between transition-all duration-500
        px-5 sm:px-10 lg:px-page
        ${scrolled
          ? 'glass border-b border-on-surface/8 shadow-ambient'
          : 'bg-transparent'
        }`}
    >
      {/* Logo */}
      <Link href="/" className="flex flex-col leading-none group">
        <span className="font-serif text-xl font-semibold tracking-tight text-on-surface group-hover:opacity-75 transition-opacity">
          AMR
        </span>
        <span className="label-caps text-[9px] tracking-[0.22em] text-on-surface-variant">
          Properties
        </span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-10">
        {NAV.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`nav-link font-sans text-sm tracking-wide transition-colors duration-200 ${
              pathname === href
                ? 'text-on-surface font-semibold active'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* CTA + hamburger */}
      <div className="flex items-center gap-5">
        <Link
          href="/contact"
          className="hidden sm:inline-block border border-on-surface/20 px-6 py-2.5 text-on-surface label-caps hover:bg-on-surface hover:text-surface transition-all duration-300"
        >
          Get a Quote
        </Link>

        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden relative h-9 w-9 flex flex-col justify-center items-center gap-[5px]"
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-on-surface transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block h-px w-6 bg-on-surface transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-px w-6 bg-on-surface transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 inset-x-0 glass border-b border-on-surface/8 shadow-ambient md:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-0">
              {NAV.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`py-4 border-b border-on-surface/6 font-sans text-sm tracking-wide last:border-0 transition-colors ${
                    pathname === href ? 'text-on-surface font-semibold' : 'text-on-surface-variant'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-5 border border-on-surface/20 px-6 py-3 text-center label-caps text-on-surface hover:bg-on-surface hover:text-surface transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
