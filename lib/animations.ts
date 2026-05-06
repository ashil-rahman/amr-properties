import type { Variants } from 'framer-motion'

/* ── Premium easing curves ─────────────────────────────────── */
export const EASE_OUT_EXPO  = [0.16, 1, 0.3,  1] as const
export const EASE_IN_OUT    = [0.76, 0, 0.24, 1] as const
export const EASE_SMOOTH    = [0.22, 1, 0.36, 1] as const

/* ── Reusable variants ──────────────────────────────────────── */

/** Fade + rise — the workhorse */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT_EXPO },
  },
}

/** Shorter travel distance for tight sections */
export const fadeUpSm: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO },
  },
}

/** Slide from the left */
export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE_OUT_EXPO },
  },
}

/** Scale in — hero image, feature cards */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: EASE_OUT_EXPO },
  },
}

/** Stagger parent — wrap around children that use fadeUp/scaleIn */
export const staggerContainer: Variants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
}

/** Stagger parent — tighter gap for grids */
export const staggerGrid: Variants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

/** Hairline reveal — animated decorative lines */
export const lineReveal: Variants = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.9, ease: EASE_IN_OUT },
  },
}

/** Count-up label (used as the number itself is rendered via JS) */
export const labelFade: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}
