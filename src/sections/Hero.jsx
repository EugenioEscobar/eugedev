import { useEffect, useRef } from 'react'
import { hero } from '../data/content'
import { WhatsAppIcon, CalendarIcon, ChevronRight } from '../components/Icons'

function resolveIcon(name, size = 15) {
  if (name === 'whatsapp') return <WhatsAppIcon size={size} />
  if (name === 'calendar') return <CalendarIcon size={size} />
  return null
}

function HeroButton({ btn }) {
  const base = 'inline-flex items-center gap-2.5 font-sans font-medium tracking-[0.1em] uppercase text-[0.8rem] transition-all duration-300'
  const variants = {
    primary:   'px-8 py-4 bg-gold text-black hover:bg-gold-light',
    outline:   'px-7 py-[15px] border border-white/20 text-cream hover:border-gold hover:text-gold',
    whatsapp:  'px-6 py-[15px] border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]',
  }
  const cls = `${base} ${variants[btn.variant] || variants.outline}`
  const icon = btn.icon ? resolveIcon(btn.icon) : null

  if (btn.href?.startsWith('#')) {
    return <a href={btn.href} className={cls}>{icon}{btn.label}{btn.variant === 'primary' && <ChevronRight size={15}/>}</a>
  }
  return (
    <a href={btn.href} target="_blank" rel="noreferrer" className={cls}>
      {icon}{btn.label}
    </a>
  )
}

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const els = heroRef.current?.querySelectorAll('[data-hero]')
    els?.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.12}s`
      el.style.animationFillMode = 'forwards'
      el.classList.add('animate-fade-up')
    })
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-14 pt-[120px] pb-20"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0d0c08]" />
      <div className="absolute inset-0" style={{
        background: [
          'radial-gradient(ellipse 60% 80% at 70% 50%, rgba(201,162,39,0.06) 0%, transparent 60%)',
          'radial-gradient(ellipse 40% 50% at 20% 80%, rgba(201,162,39,0.04) 0%, transparent 50%)',
        ].join(', '),
      }} />
      <div className="absolute inset-0 hero-grid-bg" />
      <div className="absolute inset-0 noise-overlay opacity-[0.025]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT */}
        <div>
          <div data-hero className="opacity-0 inline-flex items-center gap-2.5 border border-gold/40 bg-gold/[0.06]
            text-gold text-[0.7rem] tracking-[0.2em] uppercase px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-dot" />
            {hero.badge}
          </div>

          <h1 data-hero className="opacity-0 font-playfair text-[clamp(2.6rem,5vw,4.5rem)] font-bold leading-[1.1] mb-7">
            {hero.title.line1}
            <em className="text-gold not-italic block">{hero.title.line2}</em>
          </h1>

          <p data-hero className="opacity-0 text-muted-light text-base leading-[1.85] max-w-[480px] mb-10 font-light">
            {hero.subtitle}
          </p>

          <blockquote data-hero className="opacity-0 font-cormorant text-[1.05rem] italic text-gold-light
            border-l-2 border-gold pl-5 mb-12 leading-relaxed">
            {hero.quote}
          </blockquote>

          <div data-hero className="opacity-0 flex flex-wrap gap-4">
            {hero.buttons.map((btn) => (
              <HeroButton key={btn.label} btn={btn} />
            ))}
          </div>
        </div>

        {/* RIGHT — Photo */}
        <div className="flex justify-center lg:justify-end items-end relative order-first lg:order-last">
          <div className="relative w-[280px] md:w-[360px]">
            <div className="absolute -top-5 -right-5 w-full h-full border border-gold/40 pointer-events-none" />
            <div className="absolute -bottom-5 -left-5 w-3/5 h-3/5 border border-gold/20 pointer-events-none" />

            <img
              src={hero.photo.src}
              alt={hero.photo.alt}
              className="relative z-10 w-full h-full object-cover object-top"
              style={{ aspectRatio: '3/4', filter: 'sepia(30%) contrast(110%) brightness(90%)' }}
              loading="eager"
            />

            {/* Photo credit */}
            <p className="absolute -bottom-6 right-0 text-[0.55rem] text-muted/50 tracking-wider z-10">
              {hero.photo.credit}
            </p>
          </div>

          {/* Stats — desktop only */}
          <div className="absolute -left-16 bottom-14 hidden lg:flex flex-col gap-3 z-20">
            {hero.stats.map(({ num, label }) => (
              <div key={num} className="bg-[#0e0d0a]/95 border border-gold/15 px-5 py-3.5 backdrop-blur-sm min-w-[140px]">
                <div className="font-playfair text-[1.8rem] font-bold text-gold leading-none">{num}</div>
                <div className="text-[0.65rem] tracking-[0.15em] uppercase text-muted mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
