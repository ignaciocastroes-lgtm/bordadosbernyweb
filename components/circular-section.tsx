/**
 * components/circular-section.tsx
 *
 * Dedicated "Costura Circular" section — the Clínica de Ropa Circular de
 * Villa El Abrazo gets its own anchor (#circular) and full story instead
 * of living as a single card inside ImpactSection. Mirrors the pillar-card
 * language of ImpactSection (stitch-bordered cards, forest/gold palette)
 * so the two sections still read as one family, while giving this real
 * differentiator (reparación + red de costureras + upcycling) room to
 * breathe.
 */

import { MessageCircle, Recycle, Scissors, Users } from 'lucide-react'
import { WA_MESSAGES, whatsappLink } from '@/lib/links'

const PILLARS = [
  {
    icon: Scissors,
    title: 'Reparación profesional',
    text: 'Bastas, cierres, parches y zurcidos hechos por manos expertas, antes de pensar en reemplazar la prenda.',
  },
  {
    icon: Users,
    title: 'Red de costureras mayores',
    text: 'Cada arreglo genera trabajo e ingresos para costureras de Villa El Abrazo, con pago justo y horarios que respetan su ritmo.',
  },
  {
    icon: Recycle,
    title: 'Upcycling de prendas',
    text: 'Transformamos ropa que ya no usas en algo nuevo, con bordados y parches que le dan una segunda vida con identidad.',
  },
]

export function CircularSection() {
  return (
    <section id="circular" className="scroll-mt-20 border-y border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="flex flex-col gap-4 lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Costura Circular</p>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-forest md:text-4xl">
              La Clínica de Ropa Circular de Villa El Abrazo.
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Antes de comprar algo nuevo, repara, transforma o dale una segunda vida a lo que ya tienes. Es un
              diferenciador real de nuestro taller: menos ropa desechada, más trabajo justo para el barrio.
            </p>
            <a
              href={whatsappLink(WA_MESSAGES.circular)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-forest"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Reparar o transformar una prenda
            </a>
          </div>

          <ul className="grid gap-4 md:grid-cols-3 lg:col-span-8">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="stitch flex flex-col gap-4 rounded-2xl bg-card p-6">
                <Icon className="size-7 text-primary" aria-hidden="true" />
                <h3 className="font-serif text-xl font-semibold text-forest">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
