import { valor } from '../data/content'

export default function Valor() {
  return (
    <section id="valor" className="bg-black-2 px-6 md:px-14 py-24 md:py-28">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* Left */}
        <div className="reveal">
          <span className="section-tag">{valor.tag}</span>
          <h2 className="section-title mb-5">
            {valor.title.line1}<br />
            <em className="text-gold not-italic">{valor.title.line2}</em>
          </h2>
          <div className="section-divider" />

          {valor.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-muted-light leading-[1.9] mb-5 text-[0.97rem]"
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}

          <div className="grid grid-cols-2 gap-6 mt-6">
            {valor.features.map(({ title, desc }) => (
              <div key={title} className="border-l-2 border-gold/40 pl-5">
                <h4 className="font-playfair text-base font-semibold mb-1.5">{title}</h4>
                <p className="text-[0.82rem] text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="reveal-right relative">
          <div className="absolute -top-10 -right-10 w-28 h-28 border border-gold/15 rounded-full
            hidden lg:flex items-center justify-center">
            <div className="w-20 h-20 border border-gold/40 rounded-full" />
          </div>

          <div className="bg-gold/[0.05] border border-gold/15 border-l-[3px] border-l-gold p-10 relative">
            <span className="absolute top-2.5 left-5 font-playfair text-[6rem] text-gold/15 leading-none select-none">"</span>
            <p
              className="font-cormorant text-[1.4rem] italic leading-relaxed text-cream relative z-10"
              dangerouslySetInnerHTML={{ __html: valor.quote }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
