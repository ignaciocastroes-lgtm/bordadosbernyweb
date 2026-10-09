'use client'

/**
 * components/pes-gallery.tsx
 *
 * "Galería .pes" — a Behance-style showcase of the digitizing service
 * (logo → matriz de bordado). Uses real studio photos (tablet digitizing,
 * the embroidery machine stitching, the finished patch) instead of stock
 * icons, so a prospective B2B/matrices client can actually see the process
 * before writing in. Sits right after the services catalog, closest to the
 * "Matrices Digitales (.pes)" category it illustrates.
 */

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WA_MESSAGES, whatsappLink } from '@/lib/links'
import { TiltCard } from '@/components/tilt-card'

type GalleryItem = {
  src: string
  alt: string
  title: string
  text: string
  /** Spans more grid cells for the "hero" shots in the masonry layout. */
  span?: 'lg' | 'md'
}

const GALLERY: GalleryItem[] = [
  {
    src: '/images/pes-digitalizacion-estudio.jpg',
    alt: 'Estudio de digitalización: tableta gráfica, máquina de bordado y herramientas para convertir un logo en matriz .pes',
    title: 'Del logo a la matriz',
    text: 'Vectorizamos tu diseño y lo convertimos en puntadas: ruta, densidad y orden de colores pensados para que corra limpio en tu máquina.',
    span: 'lg',
  },
  {
    src: '/images/pes-digitalizacion-tablet.jpg',
    alt: 'Digitalización de matriz de bordado en tableta, con software de puntadas abierto junto a la máquina',
    title: 'Matricería profesional',
    text: 'Trabajamos con bordadoras profesionales que necesitan archivos .pes, .dst o .jef listos para producción, sin reprocesos.',
  },
  {
    src: '/images/pes-bordadora-maquina.jpg',
    alt: 'Máquina de bordado industrial bordando en vivo el parche verde y dorado de Bordados Berny',
    title: 'Probado en máquina real',
    text: 'Cada matriz se testea en nuestra propia bordadora antes de entregarla, así no te llevas sorpresas con hilos ni tensión.',
  },
  {
    src: '/images/matriz-pes.jpg',
    alt: 'Archivo de matriz de bordado digital .pes lista para descarga',
    title: 'Entrega y ajustes',
    text: 'Recibes el archivo listo para tu tela — piqué, jersey, gabardina o toalla — con la densidad ya ajustada.',
  },
]

export function PesGallery() {
  return (
    <section id="galeria-pes" className="scroll-mt-20 bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-2xl flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Galería .pes</p>
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-forest md:text-5xl">
              Así se hace una matriz de bordado, de cerca.
            </h2>
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Fotos reales de nuestro taller digitalizando logos para bordadoras y marcas en todo Chile.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item, index) => (
            <div key={item.title} className={item.span === 'lg' ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''}>
              <motion.div
                className="h-full"
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.42), ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard className="h-full">
                  <figure className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-forest/10">
                    <div className={`relative w-full overflow-hidden bg-forest ${item.span === 'lg' ? 'aspect-[16/11]' : 'aspect-[4/3]'}`}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes={item.span === 'lg' ? '(min-width: 1024px) 680px, 100vw' : '(min-width: 1024px) 340px, 100vw'}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="flex flex-1 flex-col gap-1.5 p-6 pt-5">
                      <h3 className="font-serif text-xl font-semibold text-forest">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    </figcaption>
                  </figure>
                </TiltCard>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={whatsappLink(WA_MESSAGES.matrices)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Cotizar digitalización de matriz
          </a>
        </div>
      </div>
    </section>
  )
}
