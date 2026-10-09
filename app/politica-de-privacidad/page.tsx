import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { WHATSAPP_DISPLAY } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Bordados Berny',
  description: 'Cómo Bordados Berny trata tus datos personales, de acuerdo a la Ley N° 21.719 de Protección de Datos Personales de Chile.',
}

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Legal</p>
        <h1 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-forest md:text-4xl">
          Política de Privacidad
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Última actualización: octubre de 2026</p>

        <div className="mt-10 flex flex-col gap-8 text-pretty leading-relaxed text-foreground/85">
          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl font-semibold text-forest">1. Quiénes somos</h2>
            <p>
              Bordados Berny ("nosotros") es un taller de bordado, confección y digitalización de matrices textiles
              ubicado en Villa El Abrazo, Maipú, Santiago de Chile. Esta política explica qué datos personales
              recopilamos a través de este sitio y de nuestra WebApp de pedidos, y cómo los tratamos, conforme a la{' '}
              <span className="font-semibold text-foreground">Ley N° 21.719 sobre Protección de Datos Personales</span>.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl font-semibold text-forest">2. Qué datos recopilamos</h2>
            <ul className="flex flex-col gap-2 pl-5">
              <li className="list-disc">Nombre, teléfono y dirección, cuando nos escribes por WhatsApp o creas un pedido en la WebApp.</li>
              <li className="list-disc">Imágenes de referencia que subes para bordados o digitalización de matrices (.pes).</li>
              <li className="list-disc">Información de pago procesada por Mercado Pago — nosotros no almacenamos datos de tu tarjeta.</li>
              <li className="list-disc">Datos de navegación anónimos (páginas vistas, dispositivo) a través de cookies de analítica, solo si aceptaste cookies no esenciales.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl font-semibold text-forest">3. Para qué los usamos</h2>
            <p>
              Usamos tus datos únicamente para gestionar tu pedido (cotización, producción, entrega y pago),
              comunicarnos contigo por WhatsApp sobre su estado, y entender cómo mejorar este sitio. No vendemos ni
              compartimos tus datos con terceros ajenos al servicio (por ejemplo, Mercado Pago para pagos y Supabase
              como proveedor de almacenamiento seguro).
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl font-semibold text-forest">4. Cookies</h2>
            <p>
              Usamos cookies esenciales para que el sitio funcione, y cookies de analítica (Vercel Analytics) solo
              si las aceptas en el banner que aparece al visitar el sitio. Puedes cambiar tu elección en cualquier
              momento desde el enlace "Preferencias de cookies" en el pie de página.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl font-semibold text-forest">5. Tus derechos</h2>
            <p>
              Puedes pedirnos en cualquier momento acceder, corregir o eliminar tus datos personales, o revocar tu
              consentimiento para su tratamiento, escribiéndonos por WhatsApp al {WHATSAPP_DISPLAY}. Responderemos tu
              solicitud dentro de un plazo razonable.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
