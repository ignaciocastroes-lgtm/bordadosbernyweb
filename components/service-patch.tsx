/**
 * components/service-patch.tsx
 *
 * A circular "embroidered patch" treatment for service cards that don't
 * have a real product photo. Reuses the exact visual grammar of the real
 * Bordados Berny logo (gold ring, dashed inner ring, side stars, forest
 * green fill) so every card reads as premium/on-brand — never a bare
 * Lucide icon floating on white.
 */

import type { LucideIcon } from 'lucide-react'

export function ServicePatch({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-hidden="true">
      <circle cx="60" cy="60" r="56" fill="#0B3B2C" />
      <circle cx="60" cy="60" r="56" stroke="#D4AF37" strokeWidth="3" fill="none" />
      <circle cx="60" cy="60" r="47" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" fill="none" />
      <path d="M38 30 L44 22 L50 30" stroke="#D4AF37" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M70 30 L76 22 L82 30" stroke="#D4AF37" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
      {/* side stars, echoing the logo */}
      <path d="M22 60 l2.4 1.7 -0.9 2.8 2.4 -1.7 2.4 1.7 -0.9 -2.8 2.4 -1.7 h-2.9 L26.5 57 Z" fill="#D4AF37" opacity="0.85" />
      <path d="M98 60 l-2.4 1.7 0.9 2.8 -2.4 -1.7 -2.4 1.7 0.9 -2.8 -2.4 -1.7 h2.9 L93.5 57 Z" fill="#D4AF37" opacity="0.85" />
      {/* centered icon */}
      <foreignObject x="38" y="38" width="44" height="44">
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon color="#D4AF37" strokeWidth={1.75} style={{ width: 26, height: 26 }} />
        </div>
      </foreignObject>
    </svg>
  )
}
