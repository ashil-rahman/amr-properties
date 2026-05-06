'use client'

import Image from 'next/image'
import FadeUp from '@/components/FadeUp'

const facilities = [
  {
    n:     '01',
    image: '/images/corridor.jpg',
    alt:   'AMR Properties 24/7 security walkway',
    title: '24/7 Security & CCTV',
    body:  'Round-the-clock on-site security personnel and a comprehensive CCTV network covering all entry points, corridors, and common areas.',
  },
  {
    n:     '02',
    image: '/images/building-front.jpg',
    alt:   'AMR Properties trained staff compound',
    title: 'Trained On-Site Staff',
    body:  'Our resident management team handles maintenance, occupant welfare, and operations — freeing your HR desk from facility management entirely.',
  },
  {
    n:     '03',
    image: '/images/fire-safety.jpg',
    alt:   'AMR Properties general store and fire safety',
    title: 'General Store',
    body:  'An on-site convenience store stocked with daily essentials — personal care, snacks, beverages, and household items.',
  },
  {
    n:     '04',
    image: '/images/kitchen.jpg',
    alt:   'AMR Properties commercial catering kitchen',
    title: 'Catering Services',
    body:  'Professionally prepared meals served in our on-site dining facility. Menus support the nutritional needs of a physically active workforce.',
  },
  {
    n:     '05',
    image: '/images/bathroom.jpg',
    alt:   'AMR Properties clean tiled bathroom',
    title: 'Saloon & Barber',
    body:  'An on-compound barbershop operated by professional staff — saving workers time and transportation costs.',
  },
  {
    n:     '06',
    image: '/images/building-entry.jpg',
    alt:   'AMR Properties motorway access Al Quoz',
    title: 'Easy Motorway Access',
    body:  'Al Quoz compound with direct access to Sheikh Zayed Road — minimising commute times to sites across Dubai, Sharjah, and Abu Dhabi.',
  },
]

export default function FacilitiesPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative pt-40 pb-16 sm:pb-24 px-5 sm:px-10 lg:px-page overflow-hidden">
        <Image src="/images/dining-hall.jpg" alt="" fill
          className="object-cover opacity-[0.08]" priority sizes="100vw" />
        <div className="absolute inset-0 bg-surface/96" />
        <div className="relative mx-auto max-w-[1440px]">
          <FadeUp>
            <span className="label-caps text-on-surface-variant block mb-5">On-Site Amenities</span>
            <h1 className="font-serif text-display-xl text-on-surface max-w-3xl leading-[1.08]">
              World-Class Facilities for Your Workforce
            </h1>
            <p className="mt-7 max-w-2xl font-sans text-body-lg text-on-surface-variant leading-relaxed">
              Every feature of our compound is designed to keep your workers safe, comfortable, and ready — without burdening your operations team.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Facilities — numbered editorial grid ────── */}
      <section className="py-section px-5 sm:px-10 lg:px-page bg-surface hairline-t">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-on-surface/8">
            {facilities.map((f, i) => (
              <FadeUp key={f.n} delay={i * 0.07}>
                <div className="group bg-surface flex flex-col card-lift">
                  {/* image */}
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <Image src={f.image} alt={f.alt} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/30 to-transparent" />
                  </div>
                  {/* content */}
                  <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <span className="label-caps text-on-surface-variant">{f.n}</span>
                      <div className="h-px flex-1 bg-on-surface/8" />
                    </div>
                    <div>
                      <h3 className="font-serif text-headline-md text-on-surface mb-3">{f.title}</h3>
                      <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">{f.body}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map ─────────────────────────────────────── */}
      <section className="py-section px-5 sm:px-10 lg:px-page bg-surface-container-low hairline-t">
        <div className="mx-auto max-w-[1440px]">
          <FadeUp className="mb-10">
            <span className="label-caps text-on-surface-variant block mb-4">Find Us</span>
            <h2 className="font-serif text-headline-lg text-on-surface">Al Quoz, Dubai</h2>
            <p className="mt-3 font-sans text-body-md text-on-surface-variant">
              Direct motorway access via Sheikh Zayed Road.
            </p>
          </FadeUp>
          <FadeUp>
            <div className="relative border border-on-surface/8 overflow-hidden" style={{ paddingBottom: '37.5%', minHeight: '260px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.9956490316457!2d55.2297!3d25.1502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69e7ed052cb5%3A0x4b8e1e70439c1e28!2sAl%20Quoz%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1234567890"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="AMR Properties — Al Quoz, Dubai"
              />
            </div>
            <p className="mt-3 label-caps text-[9px] text-on-surface-variant">
              * Contact us for exact compound address and access instructions.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
