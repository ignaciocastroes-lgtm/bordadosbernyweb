'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react'
import { LogoBordadosBernyGold } from '@/components/logo-bordados-berny'
import { APP_URL, WA_MESSAGES, whatsappLink } from '@/lib/links'

const NAV_LINKS = [
  { href: '#app', label: 'App 4.0' },
  { href: '#nfc', label: 'Llaveros NFC' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria-pes', label: 'Galería .pes' },
  { href: '#circular', label: 'Costura Circular' },
  { href: '#empresas', label: 'Empresas y Clubes' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <nav aria-label="Principal" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <LogoBordadosBernyGold className="h-11 w-11 shrink-0" />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold text-primary">Bordados Berny</span>
            <span className="text-xs font-medium tracking-wide text-muted-foreground">Taller Textil 4.0</span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={whatsappLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-forest"
          >
            Entrar a la App 4.0
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>
      </nav>

      {open && (
        <div id="menu-movil" className="border-t border-border bg-background px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-dashed border-border py-3 text-base font-medium text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Entrar a la App 4.0
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 px-4 py-3 text-sm font-semibold text-primary"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
