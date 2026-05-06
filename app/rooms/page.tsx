'use client'

import Image from 'next/image'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

const rooms = [
  {
    type:        '2-Bed Room',
    capacity:    '2 Persons',
    description: 'Ideal for supervisors or senior staff seeking a quieter, more private arrangement without sacrificing compound amenities.',
    image:       '/images/room-2.jpg',
    alt:         'AMR Properties 2-bed room with AC and natural light',
  },
  {
    type:        '3-Bed Room',
    capacity:    '3 Persons',
    description: 'A balanced configuration for small teams — comfortable, well-ventilated, and MOHRE compliant.',
    image:       '/images/room-3.jpg',
    alt:         'AMR Properties 3-bed accommodation room',
  },
  {
    type:        '4-Bed Room',
    capacity:    '4 Persons',
    description: 'Our most popular room type for standard labour accommodation — bright, clean, full AC, ample floor space.',
    image:       '/images/room-1.jpg',
    alt:         'AMR Properties 4-bed room interior',
  },
  {
    type:        '5-Bed Room',
    capacity:    '5 Persons',
    description: 'Maximises your accommodation budget without compromising dignity. Best for large-batch deployments.',
    image:       '/images/room-4.jpg',
    alt:         'AMR Properties 5-bed unit',
  },
]

export default function RoomsPage() {
  return (
    <>
      {/* ── Header ──────────────────────────────────── */}
      <section className="relative pt-40 pb-16 sm:pb-24 px-5 sm:px-10 lg:px-page overflow-hidden">
        <Image src="/images/building-front.jpg" alt="" fill
          className="object-cover object-center opacity-[0.07]" priority sizes="100vw" />
        <div className="absolute inset-0 bg-surface/95" />
        <div className="relative mx-auto max-w-[1440px]">
          <FadeUp>
            <span className="label-caps text-on-surface-variant block mb-5">Accommodation</span>
            <h1 className="font-serif text-display-xl text-on-surface max-w-2xl leading-[1.08]">
              Room Types
            </h1>
            <p className="mt-7 max-w-xl font-sans text-body-lg text-on-surface-variant leading-relaxed">
              Four configurations. One standard of quality. All rooms are fully MOHRE compliant and furnished.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Room Grid ───────────────────────────────── */}
      <section className="py-section px-5 sm:px-10 lg:px-page bg-surface hairline-t">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-on-surface/8">
            {rooms.map((room, i) => (
              <FadeUp key={room.type} delay={i * 0.08}>
                <div className="group bg-surface flex flex-col card-lift">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={room.image} alt={room.alt} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* capacity tag */}
                    <div className="absolute top-4 left-4 glass border border-on-surface/10 px-3 py-1.5">
                      <span className="label-caps text-[9px] text-on-surface">{room.capacity}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-7 sm:p-8 flex flex-col flex-1">
                    <h3 className="font-serif text-headline-md text-on-surface mb-4">{room.type}</h3>
                    <p className="font-sans text-body-md text-on-surface-variant leading-relaxed flex-1">{room.description}</p>
                    <Link
                      href="/contact"
                      className="group/btn mt-7 inline-flex items-center gap-2 label-caps text-on-surface border-b border-on-surface/20 pb-0.5 w-fit hover:border-on-surface transition-colors"
                    >
                      Enquire
                      <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Inclusion note */}
          <FadeUp className="mt-12 sm:mt-16">
            <div className="border border-on-surface/8 p-7 sm:p-10 flex gap-6">
              <div className="flex-shrink-0 mt-0.5">
                <div className="h-8 w-8 border border-on-surface/15 flex items-center justify-center text-on-surface text-sm">i</div>
              </div>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                <span className="font-semibold text-on-surface">All rooms include:</span> Air conditioning, furnished beds & bedding, shared bathroom facilities, and full access to all compound amenities — catering, general store, saloon, and 24/7 security.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="py-section px-5 sm:px-10 lg:px-page bg-on-surface hairline-t">
        <div className="mx-auto max-w-[1440px]">
          <FadeUp>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              <div>
                <span className="label-caps text-gold block mb-5">Custom Requirements</span>
                <h2 className="font-serif text-headline-lg text-surface max-w-xl">
                  Need a bespoke configuration for your project?
                </h2>
              </div>
              <Link
                href="/contact"
                className="flex-shrink-0 bg-surface text-on-surface px-10 py-4 label-caps hover:opacity-85 transition-opacity"
              >
                Request a Quote →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
