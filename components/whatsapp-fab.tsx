'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { WA_MESSAGES, whatsappLink } from '@/lib/links'

const OPTIONS: { key: keyof typeof WA_MESSAGES; label: string }[] = [
  { key: 'escolar', label: 'Bordado escolar / personalizado' },
  { key: 'nfc', label: 'Llaveros con chip NFC' },
  { key: 'circular', label: 'Reparar una prenda' },
  { key: 'b2b', label: 'Cotización por volumen (B2B)' },
  { key: 'matrices', label: 'Digitalizar matriz .pes' },
]

export function WhatsappFab() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  return (
    <div ref={ref} className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            id="wa-selector"
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="w-72 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-forest/20"
          >
            <div className="bg-forest px-4 py-3 text-forest-foreground">
              <p className="font-serif font-semibold">¿En qué te ayudamos?</p>
              <p className="text-xs text-forest-foreground/70">Elige y te abrimos WhatsApp con el mensaje listo.</p>
            </div>
            <ul className="flex flex-col p-2">
              {OPTIONS.map((opt) => (
                <li key={opt.key}>
                  <a
                    href={whatsappLink(WA_MESSAGES[opt.key])}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    <span className="size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {opt.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="wa-selector"
        className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl shadow-accent/30 transition-transform hover:scale-105"
      >
        {open ? <X className="size-6" aria-hidden="true" /> : <MessageCircle className="size-6" aria-hidden="true" />}
        <span className="sr-only">{open ? 'Cerrar selector de WhatsApp' : 'Abrir selector de WhatsApp'}</span>
      </button>
    </div>
  )
}
