import { ArrowUpRight, Camera, CreditCard, Radar } from 'lucide-react'
import { APP_URL } from '@/lib/links'

const STEPS = [
  { icon: Camera, title: 'Sube tu foto', text: 'Una foto del logo, insignia o prenda. Desde el celular, a cualquier hora.' },
  { icon: CreditCard, title: 'Cotiza y paga seguro', text: 'Elige tamaño y cantidad, ve el precio al tiro y paga online.' },
  { icon: Radar, title: 'Sigue tu orden en vivo', text: 'Recibido, En Producción, Listo, Entregado: sabrás cuándo retirar.' },
]

export function HowItWorks() {
  return (
    <section aria-labelledby="como-funciona" className="border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">WebApp 4.0</p>
          <h2 id="como-funciona" className="text-balance font-serif text-3xl font-semibold text-forest md:text-5xl">
            Cómo funciona, en tres puntadas.
          </h2>
        </div>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-8 hidden border-t-2 border-dashed border-gold/60 md:block"
          />
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="relative flex flex-col items-center gap-4 text-center">
              <span className="relative flex size-16 items-center justify-center rounded-full bg-forest text-gold ring-8 ring-card">
                <Icon className="size-6" aria-hidden="true" />
                <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {i + 1}
                </span>
              </span>
              <h3 className="font-serif text-xl font-semibold text-forest">{title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-forest"
          >
            Empezar en la WebApp
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
