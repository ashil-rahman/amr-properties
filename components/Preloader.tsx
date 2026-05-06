'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Preloader() {
  const [show, setShow] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const key = 'amr-preloader-shown'
    if (sessionStorage.getItem(key)) {
      setShow(false)
      return
    }
    setShow(true)
    const t = setTimeout(() => {
      setShow(false)
      sessionStorage.setItem(key, '1')
    }, 2600)
    return () => clearTimeout(t)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] bg-surface flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* ── Logo block ── */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {/* Wordmark */}
            <div className="text-center select-none">
              <p
                className="font-serif text-[52px] sm:text-[64px] font-semibold tracking-[-0.03em] text-on-surface leading-none"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                AMR
              </p>
              <p
                className="label-caps text-[10px] tracking-[0.35em] text-on-surface-variant mt-2"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Properties
              </p>
            </div>

            {/* Thin progress bar */}
            <div className="relative w-20 h-px bg-on-surface/12 mt-8 overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 w-full bg-on-surface origin-left rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1], delay: 0.55 }}
              />
            </div>

            {/* City line */}
            <motion.p
              className="label-caps text-[9px] tracking-[0.25em] text-on-surface-variant/50 mt-5"
              style={{ fontFamily: 'var(--font-sans)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              Al Quoz &nbsp;·&nbsp; Dubai, UAE
            </motion.p>
          </motion.div>

          {/* Corner marks */}
          {[
            'top-8 left-8',
            'top-8 right-8',
            'bottom-8 left-8',
            'bottom-8 right-8',
          ].map((pos) => (
            <motion.div
              key={pos}
              className={`absolute ${pos} w-5 h-5 border-on-surface/15`}
              style={{
                borderTop:    pos.includes('top')    ? '1px solid' : undefined,
                borderBottom: pos.includes('bottom') ? '1px solid' : undefined,
                borderLeft:   pos.includes('left')   ? '1px solid' : undefined,
                borderRight:  pos.includes('right')  ? '1px solid' : undefined,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
