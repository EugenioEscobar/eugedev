import { proyectos } from '../data/content'

function ProyectoCard({ item, delay }) {
  return (
    <div
      className="reveal bg-black-3 border border-gold/15 overflow-hidden
        transition-all duration-300 hover:border-gold/40 hover:-translate-y-1 group"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Image */}
      <div className="h-48 relative overflow-hidden bg-[#141410]">
        <img
          src={item.image.src}
          alt={item.image.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Dark overlay + grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(201,162,39,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.06) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          opacity: 0.5,
        }} />
        {/* Number watermark */}
        <span className="absolute bottom-3 right-4 font-playfair text-[4rem] font-black text-gold/20 leading-none select-none">
          {item.id}
        </span>
      </div>

      {/* Body */}
      <div className="p-7">
        <div className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-2.5">{item.tag}</div>
        <h3 className="font-playfair text-[1.1rem] font-semibold leading-snug mb-2.5">{item.title}</h3>
        <p className="text-[0.82rem] text-muted leading-relaxed mb-4">{item.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.techs.map((t) => (
            <span key={t} className="bg-gold/[0.08] border border-gold/15 text-[0.65rem]
              text-gold-dim tracking-[0.1em] uppercase px-2.5 py-0.5">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Proyectos() {
  return (
    <section id="proyectos" className="bg-black-2 px-6 md:px-14 py-24 md:py-28">
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal mb-14">
          <span className="section-tag">{proyectos.tag}</span>
          <h2 className="section-title">
            {proyectos.title.line1}<br />
            <em className="text-gold not-italic">{proyectos.title.line2}</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proyectos.items.map((item, i) => (
            <ProyectoCard key={item.id} item={item} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
