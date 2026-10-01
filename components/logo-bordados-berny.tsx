export function LogoBordadosBernyGold({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Logo Bordados Berny"
    >
      <circle cx="100" cy="100" r="94" fill="#0B3B2C" />
      <circle cx="100" cy="100" r="90" stroke="#D4AF37" strokeWidth="3" />
      <circle cx="100" cy="100" r="83" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M68 112 L102 36" stroke="#D4AF37" strokeWidth="3.5" strokeLinecap="round" />
      <ellipse cx="97" cy="46" rx="2" ry="5" transform="rotate(24 97 46)" fill="#0B3B2C" stroke="#D4AF37" strokeWidth="1.5" />
      <path
        d="M80 62 C95 40, 128 48, 118 70 C112 82, 95 82, 90 82 C115 82, 132 95, 118 112 C105 125, 78 118, 78 102 C78 95, 135 110, 145 95"
        stroke="#F3E5AB"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <text x="100" y="138" textAnchor="middle" fill="#D4AF37" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="14" letterSpacing="3">
        BORDADOS
      </text>
      <text x="100" y="162" textAnchor="middle" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="24" letterSpacing="2">
        BERNY
      </text>
      <text x="100" y="177" textAnchor="middle" fill="#D4AF37" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="9" letterSpacing="2">
        EST. 2026 • CHILE
      </text>
    </svg>
  )
}
