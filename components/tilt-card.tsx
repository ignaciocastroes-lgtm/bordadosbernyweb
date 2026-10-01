'use client'

/**
 * components/tilt-card.tsx
 *
 * Desktop-only 3D tilt-on-hover wrapper. Wraps a card's INNER content —
 * does not replace the outer motion.li's layout/filter animations in
 * services-catalog.tsx, so there's no conflict between Framer Motion's
 * `layout` prop and manual mouse-driven transforms on the same element.
 *
 * - Mouse position -> rotateX/rotateY (±7deg), smoothed with useSpring
 * - A radial "sheen" highlight follows the cursor for a premium glossy feel
 * - Resets to 0 on mouse leave
 * - No-op on touch devices (no real mousemove there) and respects
 *   prefers-reduced-motion
 */

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const TILT_RANGE = 7 // degrees, max rotation each axis

export function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const mx = useMotionValue(0) // -0.5..0.5
  const my = useMotionValue(0)

  const springCfg = { stiffness: 220, damping: 20, mass: 0.6 }
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [TILT_RANGE, -TILT_RANGE]), springCfg)
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-TILT_RANGE, TILT_RANGE]), springCfg)

  // Sheen position follows the cursor (0%..100% within the card)
  const sheenX = useTransform(mx, [-0.5, 0.5], ['0%', '100%'])
  const sheenY = useTransform(my, [-0.5, 0.5], ['0%', '100%'])
  const sheenBackground = useTransform([sheenX, sheenY], ([x, y]: [string, string]) =>
    `radial-gradient(360px circle at ${x} ${y}, rgba(212,175,55,0.16), transparent 55%)`,
  )

  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const isTouch = typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches
  const disabled = prefersReducedMotion || isTouch

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (disabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseEnter() {
    if (!disabled) setHovered(true)
  }

  function handleMouseLeave() {
    mx.set(0)
    my.set(0)
    setHovered(false)
  }

  return (
    <div style={{ perspective: 1000 }} className={className}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={disabled ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative h-full"
      >
        {children}

        {!disabled && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
            style={{ background: sheenBackground, opacity: hovered ? 1 : 0 }}
          />
        )}
      </motion.div>
    </div>
  )
}
