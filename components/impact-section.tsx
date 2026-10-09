import { HandHeart, Scissors } from 'lucide-react'

const PILLARS = [
  {
    icon: HandHeart,
    title: 'Comercio Justo',
    text: 'Trabajamos con costureras mayores de Villa El Abrazo, con pago justo y horarios que respetan su ritmo.',
  },
  {
    icon: Scissors,
    title: 'Historia con Identidad',
    text: 'Heredamos el oficio del abuelo sastre. Hoy el taller es liderado por mujeres que lo llevan al 4.0.',
  },
]

export function ImpactSection() {
  return (
    <section aria-labelledby="impacto" className="linen py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Impacto social</p>
            <h2 id="impacto" className="text-balance font-serif text-3xl font-semibold leading-tight text-forest md:text-4xl">
              Cada puntada sostiene algo más que una prenda.
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Somos un taller de barrio. La tecnología nos ayuda a llegar más lejos, pero el corazón sigue siendo la
              comunidad de Maipú.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="stitch flex flex-col gap-4 rounded-2xl bg-card p-6">
                <Icon className="size-7 text-primary" aria-hidden="true" />
                <h3 className="font-serif text-xl font-semibold text-forest">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
