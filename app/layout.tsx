import type { Metadata, Viewport } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import { IntroVideo } from '@/components/intro-video'
import { CookieConsent } from '@/components/cookie-consent'
import { AnalyticsGate } from '@/components/analytics-gate'
import './globals.css'

const _fraunces = Fraunces({ subsets: ['latin'], weight: ['500', '600', '700'] })
const _jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bordados Berny | Taller Textil 4.0 en Maipú',
  description:
    'Bordados personalizados, llaveros con chip NFC, matrices digitales .pes para todo Chile, uniformes por volumen para clubes y empresas, y clínica de ropa circular. Cotiza 24/7 en nuestra WebApp. Villa El Abrazo, Maipú.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0B3B2C',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CL" className="bg-background">
      <body className="antialiased">
        <IntroVideo />
        {children}
        <CookieConsent />
        {process.env.NODE_ENV === 'production' && <AnalyticsGate />}
      </body>
    </html>
  )
}
