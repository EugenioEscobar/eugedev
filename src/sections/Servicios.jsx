import { servicios } from '../data/content'

function PlanCard({ plan, delay }) {
  return (
    <div
      className={`reveal relative flex flex-col p-9 border transition-all duration-300
        hover:-translate-y-1 group
        ${plan.featured
          ? 'border-gold bg-gradient-to-br from-[#161610] to-[#1a1a10]'
          : 'border-gold/15 bg-black-3 hover:border-gold/40'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Shimmer line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent
        transition-opacity duration-300
        ${plan.featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
      />

      {plan.badge && (
        <span className="absolute top-5 right-5 bg-gold text-black text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1.5">
          {plan.badge}
        </span>
      )}

      <div className="font-playfair text-[1.25rem] font-semibold mb-1.5 pr-20 leading-snug">{plan.name}</div>
      <div className="text-[0.72rem] text-muted tracking-[0.1em] uppercase mb-7">{plan.tagline}</div>

      <div className="font-playfair text-[2rem] font-bold text-gold leading-none mb-1.5">{plan.price}</div>
      <p className="text-[0.75rem] text-muted italic mb-7">{plan.priceNote}</p>
      <div className="h-px bg-gold/15 mb-7" />

      <ul className="flex-1 space-y-2.5 mb-7">
        {plan.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[0.85rem] text-muted-light leading-snug">
            <span className="mt-0.5 w-3.5 h-3.5 min-w-[14px] border border-gold/50 rounded-full
              bg-[radial-gradient(circle,rgba(201,162,39,0.25),transparent_70%)]" />
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mb-8">
        {plan.tags.map((t) => (
          <span key={t} className="border border-gold/15 text-[0.68rem] text-muted tracking-[0.08em] px-2.5 py-1">{t}</span>
        ))}
      </div>

      <a
        href="#contacto"
        className={`block text-center py-3.5 text-[0.75rem] tracking-[0.15em] uppercase
          font-medium font-sans transition-all duration-300 border
          ${plan.featured
            ? 'bg-gold border-gold text-black hover:bg-gold-light hover:border-gold-light'
            : 'border-gold/40 text-gold-light hover:bg-gold hover:border-gold hover:text-black'}`}
      >
        {plan.id === 'medida' ? 'Solicitar cotización' : 'Solicitar este plan'}
      </a>
    </div>
  )
}

export default function Servicios() {
  return (
    <section id="servicios" className="bg-black px-6 md:px-14 py-24 md:py-28">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center reveal mb-14">
          <span className="section-tag">{servicios.tag}</span>
          <h2 className="section-title">
            {servicios.title.line1}<br />
            <em className="text-gold not-italic">{servicios.title.line2}</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicios.plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
