'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

interface Props {
  src:       string
  alt:       string
  className?: string
  /** 0–1: fraction of container height to shift. Default 0.1 */
  strength?: number
  sizes?:    string
  priority?: boolean
}

export default function ParallaxImage({
  src,
  alt,
  className  = '',
  strength   = 0.1,
  sizes,
  priority,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target:  ref,
    offset:  ['start end', 'end start'],
  })

  /* image travels ±strength×100% relative to its container */
  const pct = strength * 100
  const y   = useTransform(scrollYProgress, [0, 1], [`${-pct}%`, `${pct}%`])

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.div
        style={{ y, willChange: 'transform' }}
        className="absolute inset-0 scale-[1.2]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes={sizes ?? '100vw'}
        />
      </motion.div>
    </div>
  )
}
