import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-on-surface/8 w-full">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-page py-16 sm:py-20">
        <div className="grid grid-cols-12 gap-gutter">

          {/* Brand */}
          <div className="col-span-12 md:col-span-5 space-y-6">
            <div>
              <p className="font-serif text-2xl font-semibold tracking-tight text-on-surface">AMR</p>
              <p className="label-caps text-[9px] tracking-[0.22em] text-on-surface-variant mt-0.5">Properties</p>
            </div>
            <p className="font-sans text-body-md text-on-surface-variant max-w-sm leading-relaxed">
              Dubai&apos;s trusted provider of MOHRE-compliant workforce accommodation. Compounds across Al Quoz, Jebel Ali, Sonapur, DIP 1 & DIP 2. Serving contractors since 2018.
            </p>
            <div className="flex gap-4 pt-2">
              {['in', 'fb', 'ig'].map(s => (
                <div key={s} className="h-8 w-8 border border-on-surface/15 flex items-center justify-center label-caps text-[9px] text-on-surface-variant hover:border-on-surface hover:text-on-surface transition-colors cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="col-span-6 md:col-span-2 md:col-start-7 space-y-5">
            <h5 className="label-caps text-on-surface">Navigation</h5>
            <ul className="space-y-3 font-sans text-body-md">
              {[['/', 'Home'], ['/about', 'About'], ['/rooms', 'Rooms'], ['/facilities', 'Facilities'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-on-surface-variant hover:text-on-surface transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-6 md:col-span-2 space-y-5">
            <h5 className="label-caps text-on-surface">Contact</h5>
            <ul className="space-y-3 font-sans text-body-md text-on-surface-variant">
              <li><a href="tel:+97165542201"         className="hover:text-on-surface transition-colors">+971 6 554 2201</a></li>
              <li><a href="mailto:info@amrproperties.ae" className="hover:text-on-surface transition-colors">info@amrproperties.ae</a></li>
              <li>Office: Al Quoz, Dubai, UAE</li>
              <li>amrproperties.ae</li>
            </ul>
          </div>

          {/* CTA block */}
          <div className="col-span-12 md:col-span-3 space-y-5 md:text-right">
            <h5 className="label-caps text-on-surface">Ready to book?</h5>
            <p className="font-sans text-body-md text-on-surface-variant">
              Speak to our team within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-block border border-on-surface/20 px-6 py-3 label-caps text-on-surface hover:bg-on-surface hover:text-surface transition-all duration-300"
            >
              Get a Quote →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-on-surface/6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="label-caps text-[9px] text-on-surface-variant">
            © {new Date().getFullYear()} AMR Properties. All rights reserved.
          </p>
          <p className="label-caps text-[9px] text-on-surface-variant">
            Dubai, UAE · Al Quoz · Jebel Ali · Sonapur · DIP · MOHRE Compliant
          </p>
        </div>
      </div>
    </footer>
  )
}
