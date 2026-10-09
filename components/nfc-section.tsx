import Image from 'next/image'
import { Backpack, Briefcase, Dog, MessageCircle, Nfc, Trophy } from 'lucide-react'
import { WA_MESSAGES, whatsappLink } from '@/lib/links'

const LAYERS = [
  { title: 'Borde bordado', text: 'Satín de alta resistencia que no se deshilacha con el uso diario.' },
  { title: 'Centro laminado', text: 'Acabado brillante que protege tu logo, escudo o código QR.' },
  { title: 'Chip NFC oculto', text: 'Acerca el celular y abre tu perfil, ficha o enlace al instante.' },
]

const USE_CASES = [
  { icon: Backpack, title: 'SOS Mochilas Escolares', text: 'Datos de contacto del apoderado a un toque.' },
  { icon: Trophy, title: 'Clubes Deportivos', text: 'Escudo del club + ficha del jugador o socio.' },
  {
    icon: Dog,
    title: 'Mascotas Silenciosas',
    text: 'Placa sin ruido con la info de tu mascota.',
    photo: '/images/llavero-mascota-perro.jpg',
    photoAlt: 'Llavero NFC azul con silueta de perro para placa de mascota',
  },
  {
    icon: Briefcase,
    title: 'Tarjeta Digital Emprendedores',
    text: 'Tu catálogo, redes y WhatsApp en un llavero.',
    photo: '/images/llavero-menu-simplificado.jpg',
    photoAlt: 'Llavero NFC bordado para menú digital de negocio',
  },
]

export function NfcSection() {
  return (
    <section id="nfc" className="scroll-mt-20 bg-forest py-20 text-forest-foreground md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-foreground">
            <Nfc className="size-4" aria-hidden="true" />
            ¡Nuevo lanzamiento 4.0!
          </span>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight md:text-5xl">
            Llaveros y etiquetas NFC: bordado que también se conecta.
          </h2>
          <p className="text-pretty leading-relaxed text-forest-foreground/75">
            Unimos el oficio del bordado con tecnología sin contacto. Cada pieza tiene tres capas pensadas para durar y
            para funcionar.
          </p>

          <ol className="flex flex-col gap-4">
            {LAYERS.map((layer, i) => (
              <li key={layer.title} className="flex gap-4 rounded-2xl border border-dashed border-gold/40 p-4">
                <span className="font-serif text-2xl font-semibold text-gold" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{layer.title}</h3>
                  <p className="text-sm leading-relaxed text-forest-foreground/70">{layer.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <a
            href={whatsappLink(WA_MESSAGES.nfc)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Cotizar llaveros NFC
          </a>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-5">
            <figure className="overflow-hidden rounded-3xl bg-forest-foreground/5 sm:col-span-3">
              <div className="relative aspect-square">
                <Image
                  src="/images/llavero-lo-espejo.jpg"
                  alt="Llavero NFC rojo con borde bordado blanco y escudo del club Internacional Lo Espejo Hockey Patín"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm">
                <span className="font-semibold text-gold">Trabajo real entregado</span>
                <span className="text-forest-foreground/70"> · Trabajo realizado para Club Hockey Patín</span>
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-3xl bg-forest-foreground/5 sm:col-span-2">
              <div className="relative aspect-square sm:aspect-[3/4]">
                <Image
                  src="/images/llavero-qr-cafe.jpg"
                  alt="Llavero bordado azul con código QR de menú digital para cafetería"
                  fill
                  sizes="(min-width: 1024px) 280px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-forest-foreground/70">Versión QR + NFC para negocios</figcaption>
            </figure>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {USE_CASES.map(({ icon: Icon, title, text, photo, photoAlt }) => (
              <li key={title} className="flex items-start gap-3 rounded-2xl bg-forest-foreground/5 p-4">
                {photo ? (
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-lg">
                    <Image src={photo} alt={photoAlt ?? title} fill sizes="40px" className="object-cover" />
                  </div>
                ) : (
                  <Icon className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                )}
                <div>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-forest-foreground/70">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
