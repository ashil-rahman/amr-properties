'use client'

import Image from 'next/image'
import FadeUp from '@/components/FadeUp'

const stats = [
  { value: '6+',    label: 'Years in Operation' },
  { value: '3,390', label: 'Total Beds' },
  { value: '47+',   label: 'Corporate Clients' },
  { value: '94%+',  label: 'Avg. Occupancy Rate' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────── */}
      <section className="pt-40 pb-16 sm:pb-24 px-5 sm:px-10 lg:px-page bg-surface">
        <div className="mx-auto max-w-[1440px]">
          <FadeUp>
            <span className="label-caps text-on-surface-variant block mb-5">Our Story</span>
            <h1 className="font-serif text-display-xl text-on-surface max-w-3xl leading-[1.08]">
              About AMR Properties
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* ── Story — split layout ─────────────────────── */}
      <section className="py-section px-5 sm:px-10 lg:px-page bg-surface hairline-t">
        <div className="mx-auto max-w-[1440px] grid grid-cols-12 gap-gutter items-center">

          <div className="col-span-12 lg:col-span-5 space-y-8">
            <FadeUp>
              <span className="label-caps text-gold block mb-5">Who We Are</span>
              <h2 className="font-serif text-headline-lg text-on-surface mb-7">
                Accommodation Built on Trust
              </h2>
              <div className="space-y-5 font-sans text-body-md text-on-surface-variant leading-relaxed">
                <p>
                  Founded in 2018, AMR Properties was established with a single mission: to provide Dubai&apos;s construction and industrial workforce with accommodation they could be proud of — safe, clean, and fully compliant with UAE regulations.
                </p>
                <p>
                  Located in the heart of Al Quoz, our facilities were purpose-built to serve large-scale contractors who require reliable, scalable housing solutions. We understand the pressures of project-based staffing, which is why our flexible room configurations and swift onboarding process set us apart.
                </p>
                <p>
                  Today, AMR Properties manages over 3,390 beds, serving 47+ corporate clients ranging from mid-sized contractors to some of Dubai&apos;s largest infrastructure groups. We remain family-run, hands-on, and deeply committed to the communities we serve.
                </p>
              </div>
            </FadeUp>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 mt-10 lg:mt-0">
            <FadeUp delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/about-building.webp"
                  alt="AMR Properties headquarters Al Quoz Dubai"
                  fill className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="label-caps text-on-surface-variant mt-4">AMR Properties, Al Quoz Compound</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Mission + Vision ──────────────────────────── */}
      <section className="py-section px-5 sm:px-10 lg:px-page bg-surface-container-low hairline-t">
        <div className="mx-auto max-w-[1440px]">
          <FadeUp className="mb-14">
            <h2 className="font-serif text-headline-lg text-on-surface">Our Purpose</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeUp>
              <div className="border border-on-surface/8 bg-surface p-8 sm:p-12 space-y-6 h-full">
                <span className="label-caps text-gold block">Mission</span>
                <p className="font-serif text-headline-md text-on-surface leading-relaxed">
                  To provide every workforce member with accommodation that is safe, dignified, and compliant — so companies can build Dubai, and workers can rest and recover.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="border border-on-surface/8 bg-on-surface p-8 sm:p-12 space-y-6 h-full">
                <span className="label-caps text-gold block">Vision</span>
                <p className="font-serif text-headline-md text-surface leading-relaxed">
                  To become the UAE&apos;s benchmark for compliant, professionally managed workforce accommodation — setting the standard that regulators, contractors, and workers all trust.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Key Stats ─────────────────────────────────── */}
      <section className="py-section px-5 sm:px-10 lg:px-page bg-surface hairline-t">
        <div className="mx-auto max-w-[1440px]">
          <FadeUp className="mb-14">
            <span className="label-caps text-on-surface-variant block mb-4">By the Numbers</span>
            <h2 className="font-serif text-headline-lg text-on-surface">A Track Record That Speaks</h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-on-surface/8">
            {stats.map((s, i) => (
              <FadeUp key={s.value} delay={i * 0.08}>
                <div className="bg-surface py-12 px-8 text-center">
                  <p className="font-serif text-display-xl text-on-surface">{s.value}</p>
                  <p className="label-caps text-on-surface-variant mt-3">{s.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Strip ─────────────────────────────── */}
      <section className="overflow-hidden">
        <div className="flex">
          {['/images/building-entry.jpg', '/images/corridor.jpg', '/images/washroom.jpg'].map((src, i) => (
            <div key={i} className="relative flex-1 h-48 sm:h-64 lg:h-80 overflow-hidden">
              <Image src={src} alt="AMR Properties facility" fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="33vw" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Leadership ────────────────────────────────── */}
      <section className="py-section px-5 sm:px-10 lg:px-page bg-surface hairline-t">
        <div className="mx-auto max-w-[1440px]">
          <FadeUp className="mb-14">
            <span className="label-caps text-on-surface-variant block mb-4">Leadership</span>
            <h2 className="font-serif text-headline-lg text-on-surface">The Team Behind AMR</h2>
          </FadeUp>
          <FadeUp>
            <div className="card-lift max-w-sm border border-on-surface/8 bg-surface p-8 sm:p-10">
              <div className="mb-6 h-16 w-16 bg-on-surface flex items-center justify-center font-serif text-xl text-surface">
                MS
              </div>
              <h3 className="font-serif text-headline-md text-on-surface">Mr. Shafeeque</h3>
              <p className="label-caps text-gold mt-1.5 mb-5">Managing Director</p>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                With over a decade of experience in UAE real estate and workforce management, Mr. Shafeeque founded AMR Properties with a commitment to raising the standard of staff accommodation across Dubai.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
