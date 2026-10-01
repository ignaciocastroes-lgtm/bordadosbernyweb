import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { NfcSection } from '@/components/nfc-section'
import { ServicesCatalog } from '@/components/services-catalog'
import { HowItWorks } from '@/components/how-it-works'
import { ImpactSection } from '@/components/impact-section'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFab } from '@/components/whatsapp-fab'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <NfcSection />
        <ServicesCatalog />
        <HowItWorks />
        <ImpactSection />
      </main>
      <SiteFooter />
      <WhatsappFab />
    </>
  )
}
