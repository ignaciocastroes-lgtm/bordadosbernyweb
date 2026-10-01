import { ArrowUpRight, Award, MapPin, MessageCircle } from 'lucide-react'
import { LogoBordadosBernyGold } from '@/components/logo-bordados-berny'
import { APP_URL, WA_MESSAGES, WHATSAPP_DISPLAY, whatsappLink } from '@/lib/links'

export function SiteFooter() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-3 md:px-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <LogoBordadosBernyGold className="h-16 w-16" />
            <div className="leading-tight">
              <p className="font-serif text-xl font-semibold">Bordados Berny</p>
              <p className="text-sm text-forest-foreground/70">Taller Textil 4.0</p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-forest-foreground/70">
            Sastrería de barrio con velocidad de App. Bordado, NFC, matrices digitales y costura circular.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <h2 className="font-semibold text-gold">Visítanos y escríbenos</h2>
          <p className="flex items-start gap-2 text-forest-foreground/80">
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            Villa El Abrazo, Maipú, Santiago de Chile
          </p>
          <a
            href={whatsappLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-forest-foreground/80 hover:text-accent"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            {WHATSAPP_DISPLAY}
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-forest-foreground/80 hover:text-accent"
          >
            <ArrowUpRight className="size-4" aria-hidden="true" />
            bordados-berny.vercel.app
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 rounded-2xl border border-dashed border-gold/50 p-4">
            <Award className="size-8 shrink-0 text-gold" aria-hidden="true" />
            <p className="text-sm leading-snug">
              <span className="block font-semibold text-gold">Proyecto Ganador</span>
              Capital Abeja Emprende 2026 · Sercotec
            </p>
          </div>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
          >
            Entrar a la App 4.0
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="border-t border-forest-foreground/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-forest-foreground/60 md:px-6">
          {'© 2026 Bordados Berny · Est. 2026 · Hecho con hilo y código en Maipú.'}
        </p>
      </div>
    </footer>
  )
}
