import { sobre } from '../data/content'

export default function Sobre() {
  return (
    <section id="sobre" className="bg-black-2 px-6 md:px-14 py-24 md:py-28">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-20 items-start">

        {/* Photo */}
        <div className="reveal">
          <div className="relative p-5 border border-gold/15">
            <div className="absolute inset-2 border border-gold/40 pointer-events-none z-10" />
            <img
              src={sobre.photo.src}
              alt={sobre.photo.alt}
              className="w-full block object-cover object-top"
              style={{ aspectRatio: '3/4' }}
              loading="lazy"
            />
            <p className="absolute bottom-7 right-7 text-[0.55rem] text-white/30 tracking-wider z-20">
              {sobre.photo.credit}
            </p>
          </div>
        </div>

        {/* Text */}
        <div className="reveal-right">
          <span className="section-tag">{sobre.tag}</span>
          <h2 className="section-title mb-5">
            {sobre.title.line1}<br />
            <em className="text-gold not-italic">{sobre.title.line2}</em>
          </h2>
          <div className="section-divider" />

          {sobre.paragraphs.map((p, i) => (
            <p key={i} className="text-muted-light leading-[1.9] mb-5 text-[0.97rem]">{p}</p>
          ))}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {sobre.stats.map(({ num, label }) => (
              <div key={num} className="text-center border border-gold/15 bg-black/60 py-5">
                <span className="font-playfair text-[2rem] font-bold text-gold block leading-none">{num}</span>
                <span className="text-[0.7rem] text-muted tracking-[0.12em] uppercase mt-1 block leading-snug">{label}</span>
              </div>
            ))}
          </div>

          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted mb-3">
            {sobre.orgsLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            {sobre.orgs.map((org) => (
              <span key={org} className="border border-gold/15 text-muted-light text-[0.72rem] tracking-[0.1em] px-3.5 py-1.5">
                {org}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
