import { dental } from '../data/content'

export default function Dental() {
  return (
    <section id="dental" className="relative bg-black-2 px-6 md:px-14 py-24 md:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 80% at 80% 50%, rgba(201,162,39,0.05), transparent 60%)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left text */}
        <div className="reveal">
          <span className="section-tag">{dental.tag}</span>
          <h2 className="section-title mb-5">
            {dental.title.line1}<br />
            <em className="text-gold not-italic">{dental.title.line2}</em>
          </h2>
          <div className="section-divider" />
          <p className="text-muted-light leading-[1.9] mb-10 text-[0.97rem]">{dental.description}</p>
          <a href={dental.cta.href} className="btn-primary inline-flex">{dental.cta.label}</a>
        </div>

        {/* Right — image + feature grid */}
        <div className="reveal-right space-y-4">
          {/* Real Pexels image */}
          <div className="relative overflow-hidden border border-gold/20 h-48">
            <img
              src={dental.image.src}
              alt={dental.image.alt}
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-2 right-3 text-[0.55rem] text-white/40 tracking-wider">
              {dental.image.credit}
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-2 gap-3">
            {dental.features.map(({ icon, title, desc }) => (
              <div key={title}
                className="bg-black/80 border border-gold/15 p-5 transition-all duration-300 hover:border-gold/40">
                <div className="text-xl mb-2">{icon}</div>
                <h4 className="text-[0.85rem] font-semibold mb-1 text-cream">{title}</h4>
                <p className="text-[0.78rem] text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
