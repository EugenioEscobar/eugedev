import { useState } from 'react'
import { contacto, api } from '../data/content'
import { Icon, WhatsAppIcon, CalendarIcon } from '../components/Icons'

function ContactItem({ item }) {
  return (
    <a
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noreferrer' : undefined}
      className="flex items-start gap-4 p-5 border border-gold/15 bg-black-3
        transition-colors duration-300 hover:border-gold/40 no-underline"
    >
      <span className="text-xl min-w-[24px] text-center pt-0.5 text-gold">
        <Icon name={item.icon} size={20} />
      </span>
      <div>
        <div className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-1">{item.label}</div>
        <div className="text-[0.9rem] text-muted-light">{item.value}</div>
      </div>
    </a>
  )
}

function FormButton({ btn, sent }) {
  const base = 'inline-flex items-center gap-2.5 font-sans font-medium tracking-[0.1em] uppercase text-[0.8rem] transition-all duration-300'
  const variants = {
    primary: `px-8 py-4 bg-gold text-black hover:bg-gold-light ${sent ? '!bg-green-700 !text-white' : ''}`,
    outline: 'px-7 py-[15px] border border-white/20 text-cream hover:border-gold hover:text-gold',
    whatsapp: 'px-6 py-[15px] border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]',
  }

  if (btn.type === 'submit') {
    return (
      <button type="submit" className={`${base} ${variants.primary}`}>
        {sent ? '✓ Mensaje enviado' : btn.label}
      </button>
    )
  }
  return (
    <a
      href={btn.href}
      target={btn.external ? '_blank' : undefined}
      rel={btn.external ? 'noreferrer' : undefined}
      className={`${base} ${variants[btn.variant] || variants.outline}`}
    >
      {btn.icon && <Icon name={btn.icon} size={15} />}
      {btn.label}
    </a>
  )
}

export default function Contacto() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState(
    Object.fromEntries(contacto.form.fields.map((f) => [f.id, '']))
  )

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch(api.contactoUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: form.nombre,
          email: form.email,
          mensaje: form.mensaje,
          empresa: form.empresa || '',
          website: form.website || '',
        })
      })

      if (!response.ok) {
        throw new Error('Error en la solicitud')
      }

      setSent(true)
      setForm({
        nombre: '',
        email: '',
        mensaje: '',
        empresa: '',
        website: ''
      })

      setTimeout(() => setSent(false), 3500)

    } catch (error) {
      console.error('Error enviando formulario:', error)
      alert('Hubo un problema al enviar el mensaje')
    }
  }

  // Group fields: pairs that are half go in same row
  const rows = []
  let i = 0
  const fields = contacto.form.fields
  while (i < fields.length) {
    if (fields[i].half && fields[i + 1]?.half) {
      rows.push([fields[i], fields[i + 1]])
      i += 2
    } else {
      rows.push([fields[i]])
      i++
    }
  }

  return (
    <section id="contacto" className="bg-black-2 px-6 md:px-14 py-24 md:py-28">
      <div className="max-w-[1200px] mx-auto">

        <div className="text-center max-w-xl mx-auto mb-16 reveal">
          <span className="section-tag">{contacto.tag}</span>
          <h2 className="section-title mb-4">
            {contacto.title.line1}<br />
            <em className="text-gold not-italic">{contacto.title.line2}</em>
          </h2>
          <p className="text-muted-light text-[0.95rem] mt-4">{contacto.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16">

          {/* Left */}
          <div className="reveal space-y-4">
            {contacto.items.map((item) => (
              <ContactItem key={item.label} item={item} />
            ))}

            <div className="bg-gold/[0.05] border border-gold/15 border-l-[3px] border-l-gold p-8 relative mt-2">
              <span className="absolute top-2 left-4 font-playfair text-[5rem] text-gold/15 leading-none select-none">"</span>
              <p
                className="font-cormorant text-[1.1rem] italic leading-relaxed text-cream relative z-10"
                dangerouslySetInnerHTML={{ __html: contacto.quote }}
              />
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            <form onSubmit={handleSubmit} className="space-y-5">
              {rows.map((row, ri) => (
                <div key={ri} className={row.length === 2 ? 'grid grid-cols-1 sm:grid-cols-2 gap-5' : ''}>
                  {row.map((field) => (
                    <div key={field.id}>
                      <label className="block text-[0.7rem] tracking-[0.18em] uppercase text-muted mb-2">
                        {field.label}
                      </label>
                      {field.type === 'area' ? (
                        <textarea
                          className="w-full bg-black-3 border border-gold/15 text-cream font-sans
                            text-[0.9rem] font-light px-4 py-3.5 outline-none transition-colors
                            duration-300 placeholder:text-[#444] focus:border-gold resize-none"
                          placeholder={field.placeholder}
                          rows={5}
                          value={form[field.id]}
                          onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        />
                      ) : (
                        <input
                          type={field.type}
                          className="w-full bg-black-3 border border-gold/15 text-cream font-sans
                            text-[0.9rem] font-light px-4 py-3.5 outline-none transition-colors
                            duration-300 placeholder:text-[#444] focus:border-gold"
                          placeholder={field.placeholder}
                          value={form[field.id]}
                          onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}

              <div className="flex flex-wrap gap-3 pt-3">
                {contacto.buttons.map((btn) => (
                  <FormButton key={btn.label} btn={btn} sent={sent} />
                ))}
              </div>
              {/* Honeypot anti-spam — invisible para humanos, los bots lo rellenan */}
              <input
                type="text"
                name={api.honeypotField}
                value={form.website || ''}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
