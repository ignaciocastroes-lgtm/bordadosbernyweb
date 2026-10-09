'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Building2, FileCode2, GraduationCap, MessageCircle, Recycle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { WA_MESSAGES, whatsappLink } from '@/lib/links'
import { TiltCard } from '@/components/tilt-card'
import { ServicePatch } from '@/components/service-patch'

type Category = 'escolar' | 'circular' | 'b2b' | 'matrices'

type Service = {
  category: Category
  title: string
  text: string
  tag: string
  /** Real product photo for cards with authentic material — omit to fall
   *  back to the branded ServicePatch illustration (every card still gets
   *  a professional header either way, never a bare icon-on-white). */
  photo?: string
}

const CATEGORIES: { id: Category; label: string; short: string; icon: LucideIcon; anchor?: string }[] = [
  { id: 'escolar', label: 'Comunidad Escolar', short: 'B2C Maipú', icon: GraduationCap },
  { id: 'circular', label: 'Clínica de Ropa Circular', short: 'Villa El Abrazo', icon: Recycle, anchor: 'circular' },
  { id: 'b2b', label: 'Clubes, Colegios y Pymes', short: 'B2B con factura', icon: Building2, anchor: 'empresas' },
  { id: 'matrices', label: 'Matrices Digitales (.pes)', short: 'Todo Chile', icon: FileCode2 },
]

const SERVICES: Service[] = [
  { category: 'escolar', title: 'Insignias de colegio', text: 'Bordado directo en polerón, delantal o blazer con la insignia oficial.', tag: 'Más pedido' },
  { category: 'escolar', title: 'Nombres personalizados', text: 'Que la ropa vuelva a casa: nombre y curso en hilo resistente al lavado.', tag: 'Desde 1 unidad' },
  { category: 'escolar', title: 'Bordado express 24h', text: 'Para esa urgencia de lunes: lo traes hoy, lo retiras mañana.', tag: '24 horas' },
  { category: 'circular', title: 'Reparación profesional', text: 'Bastas, cierres, parches y zurcidos hechos por manos expertas.', tag: 'Comercio justo' },
  { category: 'circular', title: 'Red de costureras mayores', text: 'Cada arreglo genera ingresos para costureras de Villa El Abrazo.', tag: 'Impacto social' },
  { category: 'circular', title: 'Upcycling de prendas', text: 'Dale una segunda vida a tu ropa con bordados y transformaciones.', tag: 'Circular' },
  { category: 'b2b', title: 'Equipamiento deportivo', text: 'Camisetas, buzos y bolsos con escudo y numeración para tu club.', tag: 'Por volumen', photo: '/images/llavero-lo-espejo-amplio.jpg' },
  { category: 'b2b', title: 'Uniformes corporativos', text: 'Logo bordado en poleras, camisas y chaquetas para tu equipo.', tag: 'Con factura', photo: '/images/llavero-marca-generico.jpg' },
  { category: 'b2b', title: 'Merchandising bordado', text: 'Gorros, parches y llaveros NFC con tu marca para eventos.', tag: 'Pymes', photo: '/images/llavero-qr-cafe.jpg' },
  { category: 'matrices', title: 'Digitalización a medida', text: 'Convertimos tu logo en una matriz lista para bordar en tu máquina.', tag: '.pes / .dst', photo: '/images/matriz-pes.jpg' },
  { category: 'matrices', title: 'Catálogo descargable', text: 'Compra matrices listas en la WebApp y descárgalas al instante.', tag: 'Descarga inmediata', photo: '/images/pes-digitalizacion-tablet.jpg' },
  { category: 'matrices', title: 'Ajuste de densidad', text: 'Optimizamos puntadas según tela: piqué, jersey, gabardina o toalla.', tag: 'Todo Chile', photo: '/images/pes-bordadora-maquina.jpg' },
]

export function ServicesCatalog() {
  const [active, setActive] = useState<Category | 'todos'>('todos')
  const visible = active === 'todos' ? SERVICES : SERVICES.filter((s) => s.category === active)
  const activeCategory = CATEGORIES.find((c) => c.id === active)

  return (
    <section id="servicios" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-2xl flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Catálogo de servicios</p>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-forest md:text-5xl">
              Un taller, cuatro formas de trabajar contigo.
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Filtra por lo que necesitas y escríbenos directo: cada botón abre WhatsApp con tu consulta ya escrita.
          </p>
        </div>

        <div role="group" aria-label="Filtrar servicios" className="mt-10 flex gap-2 overflow-x-auto pb-2">
          <FilterButton active={active === 'todos'} onClick={() => setActive('todos')}>
            Todos
          </FilterButton>
          {CATEGORIES.map(({ id, label, icon: Icon }) => (
            <FilterButton key={id} active={active === id} onClick={() => setActive(id)}>
              <Icon className="size-4" aria-hidden="true" />
              {label}
            </FilterButton>
          ))}
        </div>

        {CATEGORIES.filter((c) => c.anchor).map((c) => (
          <span key={c.id} id={c.anchor} className="block scroll-mt-28" aria-hidden="true" />
        ))}

        <motion.ul layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          <AnimatePresence mode="popLayout">
            {visible.map((service, index) => {
              const cat = CATEGORIES.find((c) => c.id === service.category)!
              const Icon = cat.icon
              return (
                <motion.li
                  layout
                  key={service.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Scroll-triggered cascade entrance — independent of the
                      filter-change animation above. Fires once per card the
                      first time it scrolls into view, staggered by index so
                      the grid "builds itself" rather than popping in at once. */}
                  <motion.div
                    className="h-full"
                    initial={{ opacity: 0, y: 28, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.42), ease: [0.22, 1, 0.36, 1] }}
                  >
                    <TiltCard className="h-full">
                      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-forest/10">
                        {/* Header media: real photo when we have one, branded
                            patch illustration otherwise — every card gets a
                            professional visual, never a bare icon-on-white. */}
                        <div className="relative h-36 w-full shrink-0 overflow-hidden bg-forest">
                          {service.photo ? (
                            <Image
                              src={service.photo}
                              alt={service.title}
                              fill
                              sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                              className="object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <ServicePatch icon={Icon} className="h-24 w-24" />
                            </div>
                          )}
                          <span className="absolute right-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                            {service.tag}
                          </span>
                        </div>

                        <div className="flex flex-1 flex-col gap-1.5 p-6 pt-5">
                          <p className="text-xs font-semibold uppercase tracking-wider text-gold">{cat.short}</p>
                          <h3 className="font-serif text-xl font-semibold text-forest">{service.title}</h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                        </div>

                        <a
                          href={whatsappLink(WA_MESSAGES[service.category])}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border-t border-dashed border-border px-6 py-4 text-sm font-semibold text-primary transition-colors hover:text-accent"
                        >
                          <MessageCircle className="size-4" aria-hidden="true" />
                          Cotizar por WhatsApp
                        </a>
                      </div>
                    </TiltCard>
                  </motion.div>
                </motion.li>
              )
            })}
          </AnimatePresence>
        </motion.ul>

        {activeCategory && (
          <p className="mt-6 text-sm text-muted-foreground">
            Mostrando {visible.length} servicios de <span className="font-semibold text-foreground">{activeCategory.label}</span>.
          </p>
        )}
      </div>
    </section>
  )
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors',
        active ? 'bg-primary text-primary-foreground' : 'border border-border bg-card text-foreground hover:border-primary/40',
      )}
    >
      {children}
    </button>
  )
}
