'use client'

/**
 * components/analytics-gate.tsx
 *
 * Solo monta <Analytics/> (Vercel Analytics) cuando el visitante aceptó
 * cookies — ver cookie-consent.tsx. Escucha el CustomEvent que dispara el
 * banner para activarse al toque, sin recargar la página, y también
 * reacciona si el usuario cambia su elección más tarde desde el footer.
 */

import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { COOKIE_CONSENT_EVENT, getStoredConsent } from '@/components/cookie-consent'

export function AnalyticsGate() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(getStoredConsent() === 'accepted')

    function handleChange(e: Event) {
      const detail = (e as CustomEvent<'accepted' | 'rejected'>).detail
      setEnabled(detail === 'accepted')
    }
    window.addEventListener(COOKIE_CONSENT_EVENT, handleChange)
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, handleChange)
  }, [])

  if (!enabled) return null
  return <Analytics />
}
