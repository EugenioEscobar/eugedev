import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Hero from './sections/Hero'
import Valor from './sections/Valor'
import Servicios from './sections/Servicios'
import Dental from './sections/Dental'
import Proyectos from './sections/Proyectos'
import Sobre from './sections/Sobre'
import Contacto from './sections/Contacto'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <div className="min-h-screen bg-black text-cream">
      <Navbar />
      <main>
        <Hero />
        <Valor />
        <Servicios />
        {/* <Dental /> */}
        <Proyectos />
        <Sobre />
        <Contacto />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
