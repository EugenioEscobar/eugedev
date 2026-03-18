import { footer } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-black-2 border-t border-gold/15 px-6 md:px-14 py-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#hero" className="font-playfair text-xl font-bold text-cream">
          {footer.logo.text}<span className="text-gold">{footer.logo.highlight}</span>
        </a>
        <p className="text-[0.75rem] text-muted tracking-[0.08em] text-center">
          {footer.copy}
        </p>
        <ul className="flex gap-6 list-none">
          {footer.links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-muted text-[0.75rem] transition-colors duration-300 hover:text-gold"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
