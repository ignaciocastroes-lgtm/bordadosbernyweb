'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react'
import { APP_URL, WA_MESSAGES, whatsappLink } from '@/lib/links'
import { OrderTracker } from '@/components/order-tracker'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section id="inicio" className="linen relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-12 md:px-6 lg:grid-cols-2 lg:gap-16 lg:pb-28 lg:pt-20">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={fadeUp}
            className="stitch inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-xs font-semibold text-primary md:text-sm"
          >
            <Sparkles className="size-4 text-gold" aria-hidden="true" />
            El primer Taller Textil 4.0 de Maipú • A pasos de tu colegio
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-balance font-serif text-4xl font-semibold leading-tight text-forest md:text-5xl lg:text-6xl"
          >
            La calidez de la sastrería de barrio,{' '}
            <span className="relative whitespace-nowrap text-primary">
              con la velocidad
              <span aria-hidden="true" className="absolute inset-x-0 -bottom-1 h-0 border-b-2 border-dashed border-gold" />
            </span>{' '}
            de una App.
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Personalizamos uniformes, creamos llaveros inteligentes con chip NFC, digitalizamos matrices para todo Chile y
            reparamos tus prendas junto a nuestra red de costureras mayores de Villa El Abrazo.
          </motion.p>

          <motion.div variants={fadeUp} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-forest"
            >
              Cotizar en la WebApp 24/7
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-card px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Hablar por WhatsApp
            </a>
          </motion.div>

          <motion.dl variants={fadeUp} className="mt-2 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div className="flex flex-col">
              <dt className="text-muted-foreground">Bordado express</dt>
              <dd className="font-semibold text-foreground">24 horas</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-muted-foreground">Matrices .pes</dt>
              <dd className="font-semibold text-foreground">Envío a todo Chile</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-muted-foreground">Ubicación</dt>
              <dd className="font-semibold text-foreground">Villa El Abrazo, Maipú</dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <figure className="relative flex flex-col-reverse overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-xl shadow-forest/10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/parche-logo-berny.jpg"
                alt="Parche bordado real con el logo dorado de Bordados Berny sobre fondo verde"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-2 px-3 py-3 text-xs">
              <span className="font-semibold uppercase tracking-widest text-primary">Nuestro Oficio, en Vivo</span>
              <span className="text-muted-foreground">Bordado en el taller · Maipú</span>
            </figcaption>
          </figure>

          <div id="app" className="absolute -bottom-12 -left-2 w-48 scroll-mt-28 sm:-left-8 sm:w-56">
            <OrderTracker />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
