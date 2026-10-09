'use client'

/**
 * components/cookie-consent.tsx
 *
 * Banner de consentimiento de cookies/datos — Ley N° 21.719 sobre
 * Protección de Datos Personales (Chile).
 *
 * Esta web usa cookies de analítica (Vercel Analytics) y guarda datos
 * personales del cliente en los formularios/WhatsApp. La ley exige que el
 * tratamiento de datos no esenciales tenga consentimiento informado y
 * revocable, así que:
 *  - No se carga nada no esencial hasta que el visitante elige.
 *  - La elección se guarda en localStorage y puede cambiarse después desde
 *    el enlace "Preferencias de cookies" en el footer.
 *  - Avisamos el cambio con un CustomEvent para que <AnalyticsGate> reaccione
 *    sin necesidad de recargar la página.
 */

import { useEffect, useState } from 'react'
import { Cookie } from 'lucide-react'

export const COOKIE_CONSENT_KEY = 'bb-cookie-consent'
export const COOKIE_CONSENT_EVENT = 'bb-cookie-consent-changed'

export type ConsentValue = 'accepted' | 'rejected'

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null
  const v = window.localStorage.getItem(COOKIE_CONSENT_KEY)
  return v === 'accepted' || v === 'rejected' ? v : null
}

function setStoredConsent(value: ConsentValue) {
  window.localStorage.setItem(COOKIE_CONSENT_KEY, value)
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }))
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(getStoredConsent() === null)

    // Permite reabrir el banner desde "Preferencias de cookies" en el footer.
    function handleReopen() {
      setVisible(true)
    }
    window.addEventListener('bb-cookie-consent-reopen', handleReopen)
    return () => window.removeEventListener('bb-cookie-consent-reopen', handleReopen)
  }, [])

  if (!visible) return null

  function choose(value: ConsentValue) {
    setStoredConsent(value)
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentimiento de cookies y datos personales"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/98 px-4 py-4 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm md:px-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <Cookie className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-foreground/80">
            Usamos cookies propias y de analítica para entender cómo se usa esta web. De acuerdo a la{' '}
            <span className="font-semibold text-foreground">Ley N° 21.719 de Protección de Datos Personales</span>,
            tú decides: puedes aceptarlas o rechazarlas, y cambiar tu elección cuando quieras desde{' '}
            <a href="/politica-de-privacidad" className="underline underline-offset-2 hover:text-primary">
              nuestra política de privacidad
            </a>
            .
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => choose('rejected')}
            className="rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-forest"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  )
}
