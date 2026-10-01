'use client'

/**
 * components/intro-video.tsx
 *
 * Full-screen intro video — plays ONCE per browser session (sessionStorage).
 * - 8s real footage: logo -> embroidery reveal -> NFC keychains marquee
 * - Auto-dismisses when the video ends (or after 8.2s as a safety fallback
 *   in case the `ended` event doesn't fire on some mobile browsers)
 * - Tap/click anywhere skips it immediately
 * - Muted + playsInline: required for autoplay on iOS/Android/Chrome
 * - Renders nothing (null) once seen — zero layout cost on repeat visits
 */

import { useEffect, useRef, useState } from 'react'

const SESSION_KEY = 'bb_intro_seen'
const FALLBACK_MS = 8200 // slightly longer than the 8.0s clip as a safety net

export function IntroVideo() {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Only runs client-side, after hydration — avoids SSR/sessionStorage mismatch
    const seen = sessionStorage.getItem(SESSION_KEY)
    if (!seen) setVisible(true)
  }, [])

  const dismiss = () => {
    if (closing) return
    setClosing(true)
    sessionStorage.setItem(SESSION_KEY, '1')
    // Let the fade-out transition finish before unmounting
    setTimeout(() => setVisible(false), 400)
  }

  useEffect(() => {
    if (!visible) return
    const fallback = setTimeout(dismiss, FALLBACK_MS)
    return () => clearTimeout(fallback)
  }, [visible]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!visible) return null

  return (
    <div
      role="button"
      aria-label="Saltar introducción"
      tabIndex={0}
      onClick={dismiss}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && dismiss()}
      className={`fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-black transition-opacity duration-400 ${
        closing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <video
        ref={videoRef}
        src="/videos/intro.mp4"
        autoPlay
        muted
        playsInline
        onEnded={dismiss}
        className="h-full w-full object-contain sm:max-h-screen sm:max-w-md sm:object-cover"
      />
      <span className="absolute bottom-6 right-6 rounded-full bg-white/15 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
        Toca para saltar
      </span>
    </div>
  )
}
