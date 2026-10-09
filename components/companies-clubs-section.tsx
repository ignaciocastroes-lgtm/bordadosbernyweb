/**
 * components/companies-clubs-section.tsx
 *
 * New "Empresas y Clubes" section (#empresas) — the B2B pitch that never
 * existed as content before: volume orders for amateur sports clubs
 * (team jerseys, numbering) and companies (corporate uniforms with an
 * embroidered logo). Same forest/gold inverted palette and card pattern
 * as NfcSection so the dark band reads as part of the same site, and the
 * same WhatsApp-quote flow used everywhere else (WA_MESSAGES.b2b).
 */

import Image from 'next/image'
import { ArrowUpRight, Building2, MessageCircle, Trophy } from 'lucide-react'
import { APP_URL, WA_MESSAGES, whatsappLink } from '@/lib/links'

const AUDIENCES = [
  {
    icon: Trophy,
    title: 'Clubes y equipos amateur',
    text: 'Camisetas y poleras de equipo con escudo bordado, numeración y nombres por jugador. Mismo flujo de siempre: nos mandas el diseño y cotizamos por cantidad.',
    photo: '/images/llavero-lo-espejo-amplio.jpg',
    photoAlt:
      'Llavero NFC bordado con el escudo del Club Internacional Lo Espejo Hockey Patín, trabajo real entregado por Bordados Berny',
    caption: 'Trabajo real · Club Hockey Patín Internacional Lo Espejo',
  },
  {
    icon: Building2,
    title: 'Empresas y pymes',
    text: 'Uniformes corporativos con tu logo bordado en poleras, camisas y chaquetas, con factura para tu empresa.',
    photo: '/images/llavero-marca-generico.jpg',
    photoAlt:
      'Llavero NFC bordado en cuero con espacio genérico "Pone tu marca aquí", listo para personalizar con el logo de una empresa',
    caption: 'Tu logo, bordado y listo',
  },
]

const BENEFITS = [
  'Precio escalonado por cantidad: a más prendas, mejor precio por unidad.',
  'Cotización con una foto de tu logo o escudo, por WhatsApp o en la WebApp.',
  'Boleta o factura para tu club, colegio o empresa.',
]

export function CompaniesClubsSection() {
  return (
    <section id="empresas" className="scroll-mt-20 bg-forest py-20 text-forest-foreground md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-foreground">
            <Building2 className="size-4" aria-hidden="true" />
            Ventas por volumen
          </span>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight md:text-5xl">
            Equipa a tu club o tu empresa, con tu marca bordada.
          </h2>
          <p className="text-pretty leading-relaxed text-forest-foreground/75">
            Trabajamos con clubes deportivos amateur, colegios y pymes de Maipú y todo Chile: un solo diseño, bordado
            consistente en cada prenda, al precio de la cantidad que necesites.
          </p>

          <ul className="flex flex-col gap-3">
            {BENEFITS.map((text) => (
              <li
                key={text}
                className="rounded-2xl border border-dashed border-gold/40 p-4 text-sm leading-relaxed text-forest-foreground/80"
              >
                {text}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(WA_MESSAGES.b2b)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Cotizar por volumen
            </a>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 px-6 py-3.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              Cotizar en la WebApp
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {AUDIENCES.map(({ icon: Icon, title, text, photo, photoAlt, caption }) => (
            <div key={title} className="flex flex-col overflow-hidden rounded-3xl bg-forest-foreground/5">
              <div className="relative aspect-square">
                <Image src={photo} alt={photoAlt} fill sizes="(min-width: 1024px) 320px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <Icon className="size-5 text-gold" aria-hidden="true" />
                <h3 className="font-serif text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-forest-foreground/70">{text}</p>
                <p className="mt-auto pt-2 text-xs text-forest-foreground/50">{caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
