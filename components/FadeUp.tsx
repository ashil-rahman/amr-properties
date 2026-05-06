'use client'

import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, fadeRight, scaleIn, EASE_OUT_EXPO } from '@/lib/animations'

type Direction = 'up' | 'right' | 'scale'

interface FadeUpProps {
  children:   React.ReactNode
  className?: string
  delay?:     number
  duration?:  number
  direction?: Direction
  once?:      boolean
  margin?:    `${number}px` | `${number}%` | `${number}px ${number}px` | `${number}% ${number}%`
}

const variantMap: Record<Direction, Variants> = {
  up:    fadeUp,
  right: fadeRight,
  scale: scaleIn,
}

export default function FadeUp({
  children,
  className,
  delay     = 0,
  duration  = 0.65,
  direction = 'up',
  once      = true,
  margin    = '-72px',
}: FadeUpProps) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once, margin })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variantMap[direction]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  )
}
