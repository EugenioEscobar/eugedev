import { whatsappFloat } from '../data/content'
import { WhatsAppIcon } from './Icons'

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappFloat.href}
      target="_blank"
      rel="noreferrer"
      aria-label={whatsappFloat.label}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] rounded-full
        flex items-center justify-center shadow-[0_8px_32px_rgba(37,211,102,0.3)]
        transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,0.4)]
        animate-fade-up opacity-0"
      style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
    >
      <WhatsAppIcon size={28} />
    </a>
  )
}
