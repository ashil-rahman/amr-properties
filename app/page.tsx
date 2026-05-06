'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeUp from '@/components/FadeUp'
import ParallaxImage from '@/components/ParallaxImage'
import {
  fadeUp,
  fadeRight,
  scaleIn,
  staggerContainer,
  staggerGrid,
  lineReveal,
  EASE_OUT_EXPO,
} from '@/lib/animations'

/* ── data ───────────────────────────────────────────────────── */
const advantages = [
  { n: '01', title: 'Prime Location',         body: "Al Quoz — Dubai's industrial hub — with direct motorway access to every major project site." },
  { n: '02', title: 'MOHRE Compliance',        body: 'Every unit, corridor, and facility meets Ministry of Human Resources & Emiratisation standards.' },
  { n: '03', title: 'Stable Occupancy',        body: 'A 94%+ average occupancy rate across six years reflects the trust contractors place in us.' },
  { n: '04', title: 'Flexible Configurations', body: 'Room types from 2 to 5 beds let you scale headcount without renegotiating long-term contracts.' },
  { n: '05', title: '24/7 Support',            body: 'On-site management, security, and maintenance around the clock — your HR desk stays clear.' },
  { n: '06', title: 'Full-Service Compound',   body: 'Catering, store, saloon, CCTV — every essential on-site, keeping your workforce focused.' },
]

const metrics = [
  { value: '3,390', label: 'Total Beds' },
  { value: '47+',   label: 'Corporate Clients' },
  { value: '94%+',  label: 'Avg. Occupancy' },
  { value: '6+',    label: 'Years Operating' },
]

/* ── shared button motion props ─────────────────────────────── */
const btnHover = { scale: 1.04, transition: { duration: 0.22, ease: EASE_OUT_EXPO } }
const btnTap   = { scale: 0.97 }

export default function Home() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col md:flex-row pt-20 overflow-hidden">

        {/* Left — text content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full md:w-5/12 flex flex-col justify-center
                     px-5 sm:px-10 lg:px-page
                     py-16 sm:py-24 bg-surface relative z-10"
        >
          <div className="max-w-lg space-y-10">

            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="overflow-hidden">
              <motion.span
                className="label-caps text-on-surface-variant block"
                variants={fadeUp}
              >
                Al Quoz, Dubai — Est. 2018
              </motion.span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={staggerContainer} className="space-y-2">
              {["Where Dubai's", 'Workforce', 'Calls Home'].map((line) => (
                <div key={line} className="overflow-hidden">
                  <motion.h1
                    variants={fadeUp}
                    className="font-serif text-display-xl text-on-surface leading-[1.08]"
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
            </motion.div>

            {/* Divider line */}
            <motion.div
              variants={lineReveal}
              className="h-px bg-on-surface/12 w-full origin-left"
            />

            {/* Body */}
            <motion.p
              variants={fadeUp}
              className="font-sans text-body-lg text-on-surface-variant leading-relaxed max-w-sm"
            >
              MOHRE-compliant staff accommodation and labour camps for Dubai&apos;s leading contractors. 3,390 beds, full facilities, 24/7 support.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-1">
              <motion.div whileHover={btnHover} whileTap={btnTap}>
                <Link
                  href="/contact"
                  className="bg-on-surface text-surface px-10 py-4 label-caps hover:opacity-85 inline-block transition-opacity"
                  style={{ boxShadow: '0 4px 24px rgba(27,28,28,0.12)' }}
                >
                  Get a Quote
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/rooms"
                  className="group flex items-center gap-2 label-caps text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  View Rooms
                  <span className="inline-block">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-5 sm:left-10 lg:left-page right-0 hairline-b" />
        </motion.div>

        {/* Right — Dubai aerial hero image */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="w-full md:w-7/12 relative min-h-[60vw] md:min-h-screen"
        >
          <ParallaxImage
            src="/images/dubai-hero.jpg"
            alt="Aerial view of Dubai — Burj Al Arab and Palm Jumeirah"
            className="absolute inset-0 w-full h-full"
            strength={0.08}
            priority
            sizes="(max-width: 768px) 100vw, 58vw"
          />
          <div className="absolute inset-0 bg-on-surface/8" />

          {/* Glassmorphic location tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: EASE_OUT_EXPO }}
            className="absolute bottom-10 right-8 glass border border-on-surface/10 px-5 py-4"
          >
            <span className="label-caps text-[9px] text-on-surface-variant block mb-1">Location</span>
            <span className="font-sans text-sm font-semibold text-on-surface tracking-wide">Al Quoz, Dubai, UAE</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ══ METRICS BAR ═════════════════════════════════════════ */}
      <motion.section
        variants={staggerGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="bg-surface-container-low hairline-b hairline-t"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-page">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-on-surface/8">
            {metrics.map(({ value, label }) => (
              <motion.div key={value} variants={fadeUp} className="py-10 px-6 text-center">
                <p className="font-serif text-4xl sm:text-5xl text-on-surface tracking-tight">{value}</p>
                <p className="label-caps text-on-surface-variant mt-2">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ══ EDITORIAL INTRO ═════════════════════════════════════ */}
      <section className="bg-surface py-section px-5 sm:px-10 lg:px-page">
        <div className="mx-auto max-w-[1440px] grid grid-cols-12 gap-gutter items-center">

          <div className="col-span-12 md:col-span-4 space-y-7">
            <FadeUp>
              <h2 className="font-serif text-headline-lg text-on-surface">
                The Standard for Staff Accommodation
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                AMR Properties specialises in compliant, comfortable workforce housing — giving contractors the confidence to focus on their projects, not their workers&apos; living conditions.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 label-caps text-on-surface border-b border-on-surface pb-0.5 hover:opacity-60 transition-opacity"
                >
                  Our Story →
                </Link>
              </motion.div>
            </FadeUp>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-2 gap-gutter"
            >
              <motion.div variants={scaleIn} className="space-y-3">
                <motion.div
                  className="relative aspect-[3/4] overflow-hidden"
                  whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
                >
                  <ParallaxImage
                    src="/images/room-1.jpg"
                    alt="AMR Properties room interior"
                    className="absolute inset-0 w-full h-full"
                    strength={0.06}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
                <p className="label-caps text-on-surface-variant">Clean Interiors</p>
              </motion.div>
              <motion.div variants={scaleIn} className="space-y-3 mt-12 sm:mt-20">
                <motion.div
                  className="relative aspect-[3/4] overflow-hidden"
                  whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
                >
                  <ParallaxImage
                    src="/images/corridor.jpg"
                    alt="AMR Properties compound corridor"
                    className="absolute inset-0 w-full h-full"
                    strength={0.06}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
                <p className="label-caps text-on-surface-variant">Structured Compound</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ ADVANTAGES GRID ══════════════════════════════════════ */}
      <section className="bg-surface-container-low py-section px-5 sm:px-10 lg:px-page">
        <div className="mx-auto max-w-[1440px]">

          <FadeUp className="mb-16 hairline-b pb-12">
            <span className="label-caps text-gold block mb-4">Why AMR Properties</span>
            <h2 className="font-serif text-headline-lg text-on-surface max-w-xl">
              Six Reasons Contractors Choose Us First
            </h2>
          </FadeUp>

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-14 md:gap-y-20"
          >
            {advantages.map((a) => (
              <motion.div key={a.n} variants={fadeUp} className="space-y-5 group">
                <div className="flex items-center gap-4">
                  <span className="label-caps text-on-surface-variant">{a.n}</span>
                  <motion.div
                    className="h-px flex-1 bg-on-surface/8 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.1 }}
                  />
                </div>
                <h3 className="font-serif text-headline-md text-on-surface">{a.title}</h3>
                <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">{a.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ DATA BENTO ═══════════════════════════════════════════ */}
      <section className="bg-surface py-section px-5 sm:px-10 lg:px-page">
        <div className="mx-auto max-w-[1440px] grid grid-cols-12 gap-gutter items-center">

          <div className="col-span-12 lg:col-span-5 space-y-12">
            <FadeUp>
              <span className="label-caps text-gold block mb-4">Occupancy & Compliance</span>
              <h2 className="font-serif text-headline-lg text-on-surface mb-6">Built to Perform, Built to Last</h2>
              <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
                AMR Properties has maintained above-industry occupancy rates across six years — a reflection of the trust major contractors place in our facilities.
              </p>
            </FadeUp>
            <FadeUp delay={0.12}>
              <div className="space-y-6">
                {[
                  { label: 'Average Occupancy Rate',   value: '94%+' },
                  { label: 'MOHRE Compliance Score',    value: '100%' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-end hairline-b pb-4">
                    <span className="label-caps text-on-surface-variant">{label}</span>
                    <span className="font-serif text-headline-lg text-on-surface">{value}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.15} className="col-span-12 lg:col-span-6 lg:col-start-7 mt-10 lg:mt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Bar chart card */}
              <motion.div
                className="col-span-2 border border-on-surface/8 bg-surface-container-low p-6 sm:p-8"
                whileHover={{ boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="label-caps text-on-surface-variant">Beds Across Compound — Growth</span>
                  <span className="text-on-surface">↗</span>
                </div>
                <motion.div
                  variants={staggerGrid}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="h-32 sm:h-40 flex items-end gap-1.5 sm:gap-2"
                >
                  {[40, 55, 65, 78, 88, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      className={`w-full rounded-sm ${i === 5 ? 'bg-on-surface' : 'bg-surface-container-highest'}`}
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ height: `${h}%`, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.08, ease: EASE_OUT_EXPO }}
                    />
                  ))}
                </motion.div>
                <div className="flex justify-between mt-3 label-caps text-[9px] text-on-surface-variant">
                  {['2019','2020','2021','2022','2023','2024'].map(y => <span key={y}>{y}</span>)}
                </div>
              </motion.div>

              {/* Stat — Room types */}
              <motion.div
                className="border border-on-surface/8 bg-surface-container-low p-6 flex flex-col justify-between aspect-square"
                whileHover={{ translateY: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.07)' }}
                transition={{ duration: 0.3 }}
              >
                <span className="label-caps text-on-surface-variant">Room Types</span>
                <div>
                  <div className="font-serif text-headline-md text-on-surface mb-1">2–5 Bed</div>
                  <p className="label-caps text-[9px] text-on-surface-variant">Configurations</p>
                </div>
              </motion.div>

              {/* Dark stat — 24/7 */}
              <motion.div
                className="border border-on-surface/8 bg-on-surface p-6 flex flex-col justify-between aspect-square"
                whileHover={{ translateY: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.15)' }}
                transition={{ duration: 0.3 }}
              >
                <span className="label-caps text-surface/60">Security</span>
                <div>
                  <div className="font-serif text-headline-md text-surface mb-1">24/7</div>
                  <p className="label-caps text-[9px] text-surface/60">On-Site Coverage</p>
                </div>
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ NARRATIVE — lifestyle ════════════════════════════════ */}
      <section className="bg-surface-container-low py-section px-5 sm:px-10 lg:px-page">
        <div className="mx-auto max-w-[1440px] grid grid-cols-12 gap-gutter items-center">

          <div className="col-span-12 md:col-span-5 order-2 md:order-1">
            <FadeUp direction="scale">
              <motion.div
                className="relative aspect-[3/4] overflow-hidden"
                whileHover={{ scale: 1.01, transition: { duration: 0.5 } }}
              >
                <ParallaxImage
                  src="/images/about-building.webp"
                  alt="AMR Properties headquarters Al Quoz"
                  className="absolute inset-0 w-full h-full"
                  strength={0.09}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </motion.div>
            </FadeUp>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7 order-1 md:order-2 mb-10 md:mb-0">
            <FadeUp>
              <span className="label-caps text-gold block mb-6">The Compound</span>
              <h2 className="font-serif text-headline-lg text-on-surface mb-8">
                A Sanctuary of Dignity and Purpose
              </h2>
              <p className="font-sans text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                Beyond compliance metrics, AMR Properties delivers an environment where workers genuinely rest, recover, and return to site ready to perform. Every detail is managed by trained staff who take pride in the compound they maintain.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[['6+', 'Years of Trust'], ['47+', 'Corporate Clients']].map(([v, l]) => (
                  <motion.div
                    key={l}
                    className="border-l border-on-surface/10 pl-6"
                    whileHover={{ paddingLeft: '1.75rem', transition: { duration: 0.25 } }}
                  >
                    <div className="font-serif text-headline-md text-on-surface">{v}</div>
                    <div className="label-caps text-on-surface-variant mt-2">{l}</div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══ PHOTO MONTAGE ════════════════════════════════════════ */}
      <section className="px-5 sm:px-10 lg:px-page py-section bg-surface">
        <div className="mx-auto max-w-[1440px] grid grid-cols-12 gap-gutter h-[380px] sm:h-[520px] lg:h-[640px]">
          <FadeUp direction="scale" className="col-span-8 relative overflow-hidden">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.02, transition: { duration: 0.6 } }}
            >
              <ParallaxImage
                src="/images/kitchen.jpg"
                alt="AMR Properties catering kitchen"
                className="absolute inset-0 w-full h-full"
                strength={0.07}
                sizes="(max-width: 1024px) 66vw, 800px"
              />
            </motion.div>
          </FadeUp>
          <div className="col-span-4 flex flex-col gap-gutter h-full">
            <FadeUp direction="scale" delay={0.12} className="relative flex-1 overflow-hidden">
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.03, transition: { duration: 0.6 } }}
              >
                <ParallaxImage
                  src="/images/dining-hall.jpg"
                  alt="AMR Properties dining hall"
                  className="absolute inset-0 w-full h-full"
                  strength={0.07}
                  sizes="(max-width: 1024px) 33vw, 400px"
                />
              </motion.div>
            </FadeUp>
            <FadeUp delay={0.2} className="flex-1 bg-surface-container-low border border-on-surface/8 flex flex-col justify-center p-6 sm:p-8 lg:p-10 space-y-4">
              <h4 className="font-serif text-headline-md text-on-surface">World-Class Facilities</h4>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed hidden sm:block">
                Catering, security, store, CCTV — everything on compound.
              </p>
              <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <Link href="/facilities" className="inline-flex items-center gap-2 label-caps text-on-surface border-b border-on-surface pb-0.5 w-fit hover:opacity-60 transition-opacity">
                  View Facilities →
                </Link>
              </motion.div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ═══════════════════════════════════════════ */}
      <section className="bg-on-surface py-section px-5 sm:px-10 lg:px-page overflow-hidden relative">
        {/* Subtle background parallax */}
        <div className="absolute inset-0 opacity-[0.04]">
          <ParallaxImage
            src="/images/dubai-hero.jpg"
            alt=""
            className="absolute inset-0 w-full h-full"
            strength={0.05}
          />
        </div>

        <div className="relative mx-auto max-w-[1440px]">
          <FadeUp>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
              <div className="max-w-xl">
                <span className="label-caps text-gold block mb-5">Get in Touch</span>
                <h2 className="font-serif text-headline-lg text-surface leading-[1.15]">
                  Looking for accommodation for your workforce?
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <motion.a
                  href="https://wa.me/97165542201"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] px-8 py-4 label-caps text-surface"
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 28px rgba(37,211,102,0.35)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
                >
                  <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-surface/25 px-8 py-4 label-caps text-surface hover:bg-surface/10 transition-colors"
                  >
                    Send an Enquiry →
                  </Link>
                </motion.div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
