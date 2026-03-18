import { useState, useEffect } from 'react'
import { nav } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
        border-b border-gold/15 backdrop-blur-xl bg-black/85 transition-all duration-300
        ${scrolled ? 'px-6 md:px-14 py-4' : 'px-6 md:px-14 py-6'}`}
    >
      <a href="#hero" className="font-playfair text-2xl font-bold tracking-wide text-cream">
        {nav.logo.text}<span className="text-gold">{nav.logo.highlight}</span>
      </a>

      <ul className="hidden md:flex gap-10 list-none">
        {nav.links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="relative text-muted-light text-[0.8rem] tracking-[0.12em] uppercase
                font-normal transition-colors duration-300 hover:text-gold
                after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-px
                after:bg-gold after:scale-x-0 after:transition-transform after:duration-300
                hover:after:scale-x-100"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={nav.cta.href}
        className="border border-gold text-gold text-[0.75rem] tracking-[0.12em] uppercase
          px-6 py-2.5 transition-all duration-300 hover:bg-gold hover:text-black font-medium"
      >
        {nav.cta.label}
      </a>
    </nav>
  )
}
