export const APP_URL = 'https://bordados-berny.vercel.app'
export const WHATSAPP_NUMBER = '56951896142'
export const WHATSAPP_DISPLAY = '+56 9 5189 6142'

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WA_MESSAGES = {
  general: 'Hola Berny! Quiero hacer una consulta sobre sus servicios de bordado...',
  nfc: 'Hola Berny! Quiero cotizar llaveros bordados con chip NFC...',
  escolar: 'Hola Berny! Quiero cotizar un bordado escolar / personalizado...',
  circular: 'Hola Berny! Necesito reparar una prenda en la Clínica de Ropa Circular...',
  b2b: 'Hola Berny! Escribo por una cotización por volumen (B2B)...',
  matrices: 'Hola Berny! Necesito digitalizar un logo a matriz de bordado (.pes)...',
} as const
