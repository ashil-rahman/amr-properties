'use client'

import { useState } from 'react'
import FadeUp from '@/components/FadeUp'

const BED_OPTIONS = ['< 50 beds', '50 – 100 beds', '100 – 250 beds', '250 – 500 beds', '500+ beds']

type FormState = { name: string; company: string; phone: string; email: string; beds: string; message: string }
const EMPTY: FormState = { name: '', company: '', phone: '', email: '', beds: '', message: '' }

const CONTACTS = [
  { label: 'Phone',    value: '+971 6 554 2201',       href: 'tel:+97165542201' },
  { label: 'WhatsApp', value: '+971 6 554 2201',       href: 'https://wa.me/97165542201' },
  { label: 'Email',    value: 'info@amrproperties.ae', href: 'mailto:info@amrproperties.ae' },
  { label: 'Head Office', value: 'Al Quoz, Dubai, UAE', href: undefined },
  { label: 'Locations',   value: 'Al Quoz · Jebel Ali · Jebel Ali Industrial · Sonapur · DIP 1 · DIP 2', href: undefined },
]

const inputBase =
  'w-full bg-transparent border-0 border-b border-on-surface/20 py-4 font-sans text-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-on-surface transition-colors'
const labelBase = 'label-caps text-on-surface-variant block mb-1'

export default function ContactPage() {
  const [form,    setForm]    = useState<FormState>(EMPTY)
  const [success, setSuccess] = useState(false)

  const set = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(p => ({ ...p, [k]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const sub  = encodeURIComponent(`Accommodation Enquiry — ${form.company || form.name} — ${form.beds}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nBeds: ${form.beds}\n\n${form.message}`
    )
    window.location.href = `mailto:info@amrproperties.ae?subject=${sub}&body=${body}`
    setSuccess(true)
    setForm(EMPTY)
  }

  return (
    <>
      {/* ── Header ──────────────────────────────────── */}
      <section className="pt-40 pb-16 sm:pb-24 px-5 sm:px-10 lg:px-page bg-surface">
        <div className="mx-auto max-w-[1440px]">
          <FadeUp>
            <span className="label-caps text-on-surface-variant block mb-5">Get in Touch</span>
            <h1 className="font-serif text-display-xl text-on-surface max-w-2xl leading-[1.08]">
              Contact Us
            </h1>
            <p className="mt-7 max-w-lg font-sans text-body-lg text-on-surface-variant leading-relaxed">
              Tell us your requirements and our team will respond within 24 hours with availability and pricing.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Split layout ─────────────────────────────── */}
      <section className="py-section px-5 sm:px-10 lg:px-page bg-surface hairline-t">
        <div className="mx-auto max-w-[1440px] grid grid-cols-12 gap-gutter gap-y-16">

          {/* Contact details */}
          <FadeUp className="col-span-12 lg:col-span-4">
            <div className="sticky top-28">
              <h2 className="font-serif text-headline-lg text-on-surface mb-10">Reach Our Team</h2>
              <div className="space-y-8">
                {CONTACTS.map(({ label, value, href }) => (
                  <div key={label} className="hairline-b pb-6">
                    <span className="label-caps text-on-surface-variant block mb-2">{label}</span>
                    {href ? (
                      <a href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="font-sans text-body-lg text-on-surface hover:opacity-60 transition-opacity"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-sans text-body-lg text-on-surface">{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={0.15} className="col-span-12 lg:col-span-7 lg:col-start-6">
            <h2 className="font-serif text-headline-lg text-on-surface mb-10">Send an Enquiry</h2>

            {success && (
              <div className="mb-8 border border-on-surface/15 p-5">
                <p className="font-sans text-body-md text-on-surface">
                  Thank you — your email client has been opened. We&apos;ll respond within 24 hours.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className={labelBase}>Full Name *</label>
                  <input required type="text" value={form.name} onChange={set('name')}
                    placeholder="Ahmed Al Mansouri" className={inputBase} />
                </div>
                <div>
                  <label className={labelBase}>Company Name *</label>
                  <input required type="text" value={form.company} onChange={set('company')}
                    placeholder="ABC Construction LLC" className={inputBase} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className={labelBase}>Phone Number</label>
                  <input type="tel" value={form.phone} onChange={set('phone')}
                    placeholder="+971 50 123 4567" className={inputBase} />
                </div>
                <div>
                  <label className={labelBase}>Email Address *</label>
                  <input required type="email" value={form.email} onChange={set('email')}
                    placeholder="hr@yourcompany.ae" className={inputBase} />
                </div>
              </div>

              <div>
                <label className={labelBase}>Beds Required</label>
                <select value={form.beds} onChange={set('beds')} className={`${inputBase} cursor-pointer`}>
                  <option value="">Select capacity...</option>
                  {BED_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div>
                <label className={labelBase}>Message</label>
                <textarea rows={5} value={form.message} onChange={set('message')}
                  placeholder="Move-in date, contract length, any specific requirements..."
                  className={`${inputBase} resize-none`} />
              </div>

              <button type="submit"
                className="w-full bg-on-surface text-surface py-4 label-caps hover:opacity-85 active:scale-[0.99] transition-all duration-300"
              >
                Send Enquiry
              </button>
              <p className="label-caps text-[9px] text-on-surface-variant text-center">
                This will open your email client pre-filled with your details.
              </p>
            </form>
          </FadeUp>
        </div>
      </section>

      {/* ── Map ─────────────────────────────────────── */}
      <section className="px-5 sm:px-10 lg:px-page py-16 bg-surface-container-low hairline-t">
        <div className="mx-auto max-w-[1440px]">
          <FadeUp>
            <div className="relative border border-on-surface/8 overflow-hidden" style={{ paddingBottom: '30%', minHeight: '220px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.9956490316457!2d55.2297!3d25.1502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69e7ed052cb5%3A0x4b8e1e70439c1e28!2sAl%20Quoz%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1234567890"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="AMR Properties — Al Quoz, Dubai"
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
