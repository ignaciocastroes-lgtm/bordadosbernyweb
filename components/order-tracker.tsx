'use client'

import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const STATES = [
  { label: 'Recibido', dot: 'bg-gold' },
  { label: 'En Producción', dot: 'bg-sky-500' },
  { label: 'Listo', dot: 'bg-emerald' },
  { label: 'Entregado', dot: 'bg-primary' },
]

export function OrderTracker() {
  const [step, setStep] = useState(1)

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % STATES.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="rounded-[2rem] border-4 border-forest bg-forest p-1.5 shadow-2xl shadow-forest/30"
      role="img"
      aria-label="Vista de la WebApp: seguimiento de orden con estados Recibido, En Producción, Listo y Entregado"
    >
      <div className="rounded-[1.6rem] bg-card px-3 pb-4 pt-2">
        <div aria-hidden="true" className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-border" />
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Ticket #B-0428</p>
        <p className="mb-3 font-serif text-sm font-semibold text-forest">Insignia escolar x3</p>
        <ol className="flex flex-col gap-2.5">
          {STATES.map((s, i) => {
            const done = i < step
            const active = i === step
            return (
              <li key={s.label} className="flex items-center gap-2">
                <span
                  className={cn(
                    'flex size-5 shrink-0 items-center justify-center rounded-full transition-all',
                    done || active ? s.dot : 'bg-muted',
                    active && 'ring-4 ring-accent/20',
                  )}
                >
                  {done && <Check className="size-3 text-card" aria-hidden="true" />}
                </span>
                <span
                  className={cn(
                    'text-xs transition-colors',
                    active ? 'font-semibold text-foreground' : done ? 'text-foreground/70' : 'text-muted-foreground',
                  )}
                >
                  {s.label}
                </span>
              </li>
            )
          })}
        </ol>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-accent transition-all duration-700"
            style={{ width: `${((step + 1) / STATES.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
