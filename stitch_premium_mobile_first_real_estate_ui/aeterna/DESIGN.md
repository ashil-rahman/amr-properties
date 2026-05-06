---
name: AETERNA
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5d5f5d'
  on-secondary: '#ffffff'
  secondary-container: '#e2e3e1'
  on-secondary-container: '#636563'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1b1a'
  on-tertiary-container: '#868382'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e2e3e1'
  secondary-fixed-dim: '#c6c7c5'
  on-secondary-fixed: '#1a1c1b'
  on-secondary-fixed-variant: '#454746'
  tertiary-fixed: '#e6e2df'
  tertiary-fixed-dim: '#cac6c4'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
typography:
  display-xl:
    fontFamily: Noto Serif
    fontSize: 80px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: '0'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: 0.02em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-page: 80px
  section-gap: 160px
  container-max: 1440px
---

## Brand & Style

This design system is defined by an uncompromising commitment to architectural precision and editorial elegance. It is curated for an ultra-high-net-worth audience, evoking feelings of permanence, legacy, and curated luxury. 

The aesthetic style is **Editorial Minimalism**. It treats the screen as a high-end coffee table book, utilizing expansive white space (the "Alabaster" canvas) to allow oversized architectural photography to breathe. The design language balances the structural rigidity of a rigorous grid with the ethereal quality of subtle glassmorphism, creating a digital environment that feels both grounded and modern.

## Colors

The palette is rooted in a high-contrast relationship between **Deep Charcoal** and **Warm Alabaster**. 

- **Primary (Deep Charcoal):** Used for typography, hairline borders, and structural elements to provide weight and authority.
- **Secondary (Warm Alabaster):** The primary surface color, chosen to feel more organic and inviting than a clinical pure white.
- **Accent (Champagne):** Reserved for high-value interactions, signaling exclusivity and "the golden touch."
- **Neutral:** A range of muted grays used sparingly for secondary metadata to ensure the primary hierarchy remains undisturbed.

## Typography

Typography in this design system functions as a structural element. 

**Noto Serif** is utilized for headlines to convey a traditional, authoritative literary tone. It should be typeset with tight tracking in larger sizes to emphasize its high-contrast strokes.

**Plus Jakarta Sans** provides a modern, clean counterpoint for body copy and navigation. To maintain the editorial feel, body text uses generous line heights and increased letter spacing, ensuring maximum legibility and an airy, sophisticated "spread" across the layout.

## Layout & Spacing

This design system employs a **Fixed Grid** model based on a 12-column architecture. The layout philosophy is centered on "The Luxury of Space." 

Key principles:
- **Generous Margins:** Page gutters are wide (80px+) to frame the content like a work of art.
- **Vertical Rhythm:** A strict 4px baseline grid ensures alignment across all components.
- **Sectional Gaps:** Significant vertical breathing room (160px+) is used to separate distinct property narratives, preventing the interface from feeling cluttered or "salesy."
- **Oversized Imagery:** Images should frequently break the grid or span full-bleed to immerse the user in the property.

## Elevation & Depth

Depth is achieved through **Subtle Glassmorphism** and **Soft Shadows** rather than heavy skeuomorphism.

- **Surface Layers:** Navigation bars and floating panels utilize a backdrop blur (20px) with a 60% opacity Alabaster fill, creating a "frosted champagne" effect.
- **Hairline Borders:** Elements are defined by 1px solid borders in low-opacity Charcoal (#1A1A1A at 10%) rather than heavy shadows.
- **Ambient Depth:** When elevation is required for modals or cards, use an extra-diffused shadow with a large blur radius (40px) and very low opacity (4%). The shadow should feel like an ambient glow rather than a physical drop.

## Shapes

The shape language reflects architectural blueprints: sharp, intentional, and clean. 

The design system uses a **Soft (4px)** corner radius for most interactive elements like buttons and input fields to provide a microscopic hint of refinement without losing the "sharp" premium feel. Large imagery and primary structural containers should remain strictly **Sharp (0px)** to maintain the grid's integrity and a sense of "built" permanence.

## Components

### Buttons
Primary buttons are solid Deep Charcoal with Champagne text or Champagne with Charcoal text. They are rectangular with a 4px radius. Secondary buttons use a hairline border (1px) with an arrow icon (→) to suggest movement and progression.

### Input Fields
Inputs are minimalist, consisting of a single 1px bottom border that transitions from a light gray to Charcoal on focus. Labels are always in `label-caps` typography, floating above the line.

### Cards
Property cards are characterized by "The Frame." They feature high-resolution imagery with zero padding, where the typography sits either overlaid on a glassmorphic panel or positioned below with generous white space.

### Glassmorphic Navigation
The primary navigation is a sticky top-bar with a 1px bottom hairline. It uses a heavy backdrop blur to allow the colors of the property photography to bleed through subtly as the user scrolls.

### Image Galleries
Galleries should utilize asymmetrical layouts—mixing large vertical "hero" shots with smaller horizontal details—to mimic the pacing of a physical luxury magazine.