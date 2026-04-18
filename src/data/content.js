// ─────────────────────────────────────────────
//  EugeDev — Contenido centralizado del sitio
//  Edita este archivo para personalizar todo.
// ─────────────────────────────────────────────

export const site = {
  name: 'EugeDev',
  tagline: 'Desarrollo Web Profesional',
  url: 'https://eugedev.cl',
}

// ── NAVBAR ──────────────────────────────────
export const nav = {
  logo: { text: 'Euge', highlight: 'Dev' },
  links: [
    { href: '#valor',     label: 'Nosotros'  },
    { href: '#servicios', label: 'Servicios' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#sobre',     label: 'Sobre mí'  },
    { href: '#contacto',  label: 'Contacto'  },
  ],
  cta: { label: 'Cotizar', href: '#contacto' },
}

// ── HERO ────────────────────────────────────
export const hero = {
  badge: 'Desarrollo Web Profesional',
  title: {
    line1: 'Desarrollo Web',
    line2: 'para tu Negocio',   // rendered in gold italic
  },
  subtitle:
    'Soluciones digitales personalizadas para empresas y profesionales que necesitan una presencia web moderna, funcional y pensada para crecer.',
  quote:
    '"No solo desarrollo páginas web. Diseño soluciones digitales que ayudan a los negocios a crecer."',
  buttons: [
    { label: 'Solicitar Cotización', href: '#contacto', variant: 'primary' },
    { label: 'Agendar Reunión',      href: 'https://calendly.com/', variant: 'outline', icon: 'calendar', external: true },
    { label: 'WhatsApp',             href: 'https://wa.me/56972116431', variant: 'whatsapp', icon: 'whatsapp', external: true },
  ],
  // Pexels — professional man at desk, dark tone
  // Photographer: Andrea Piacquadio  |  Free to use
  photo: {
    src: '/image2.png',
    alt: 'Eugenio Escobar — Desarrollador Web',
    credit: 'Foto: Pexels / Andrea Piacquadio',
  },
  stats: [
    { num: '6+',  label: 'Años de experiencia' },
    { num: '15+', label: 'Proyectos entregados' },
  ],
}

// ── PROPUESTA DE VALOR ───────────────────────
export const valor = {
  tag:   '¿Por qué EugeDev?',
  title: { line1: 'Más que una página web,', line2: 'una solución completa' },
  paragraphs: [
    'En EugeDev no solo desarrollamos páginas web. <strong>Analizamos tu negocio</strong> y diseñamos soluciones digitales pensadas para mejorar tu presencia online y optimizar la forma en que interactúas con tus clientes.',
    'Con más de 6 años de experiencia en desarrollo, trabajamos creando soluciones modernas, eficientes y adaptadas a cada necesidad real.',
  ],
  features: [
    { title: 'Diseño a medida',        desc: 'Cada proyecto refleja la identidad única de tu negocio.' },
    { title: 'Orientado a resultados', desc: 'Webs que convierten visitas en clientes reales.' },
    { title: 'Tecnología moderna',     desc: 'Código limpio, rápido y escalable para crecer.' },
    { title: 'Soporte real',           desc: 'Acompañamiento desde el análisis hasta la entrega.' },
  ],
  quote: 'Cada negocio tiene un problema único. Mi trabajo es entenderlo y resolverlo con <em>tecnología bien aplicada.</em>',
}

// ── SERVICIOS / PLANES ───────────────────────
export const servicios = {
  tag:   'Servicios',
  title: { line1: 'Planes pensados', line2: 'para cada etapa' },
  plans: [
    {
      id: 'presencia',
      name: 'Presencia Web Profesional',
      tagline: 'Para profesionales y pequeños negocios',
      price: '$130.000',
      priceNote: 'Pago único — CLP',
      featured: false,
      badge: null,
      includes: [
        'Diseño web profesional a medida',
        'Hasta 5 secciones optimizadas',
        '100% adaptado a móviles',
        'Formulario de contacto integrado',
        'Integración directa con WhatsApp',
        'Optimización SEO básica',
        'Integración con Google Maps',
      ],
      tags: ['Dentistas', 'Abogados', 'Médicos', 'Independientes'],
    },
    {
      id: 'automatizacion',
      name: 'Web Profesional + Automatización',
      tagline: 'Para negocios que quieren captar y automatizar',
      price: '$350.000',
      priceNote: 'Pago único — CLP',
      featured: true,
      badge: '⭐ Más popular',
      includes: [
        'Todo lo del plan anterior +',
        'Sistema de reservas o solicitudes',
        'Panel de administración simple',
        'Automatización de formularios',
        'Integración con correo electrónico',
        'Optimización de rendimiento',
        'Soporte inicial incluido',
      ],
      tags: ['Clínicas', 'Academias', 'Centros médicos', 'Servicios'],
    },
    {
      id: 'medida',
      name: 'Soluciones Web a Medida',
      tagline: 'Para empresas con necesidades complejas',
      price: 'Desde $500.000',
      priceNote: 'Cotización personalizada — CLP',
      featured: false,
      badge: null,
      includes: [
        'Análisis del problema de negocio',
        'Desarrollo completamente personalizado',
        'Sistemas internos y dashboards',
        'Integraciones con APIs externas',
        'Automatización de procesos',
        'Arquitectura escalable y mantenible',
      ],
      tags: ['Empresas', 'Startups', 'Sistemas internos', 'Automatización'],
    },
  ],
}

// ── DENTAL ──────────────────────────────────
export const dental = {
  tag:   'Especialización',
  title: { line1: 'Soluciones Web para', line2: 'Clínicas Dentales' },
  description:
    'Desarrollamos sitios web pensados especialmente para clínicas y profesionales del área dental. Sabemos lo que un paciente busca y lo que una clínica necesita mostrar para generar confianza y conseguir más reservas.',
  cta: { label: 'Quiero mi web dental', href: '#contacto' },
  // Pexels — dental clinic clean professional
  // Photographer: Daniel Frank  |  Free to use
  image: {
    src: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1',
    alt: 'Clínica dental profesional',
    credit: 'Foto: Pexels / Daniel Frank',
  },
  features: [
    { icon: '🦷', title: 'Página profesional',  desc: 'Diseño que transmite confianza y profesionalismo médico desde el primer clic.' },
    { icon: '📅', title: 'Sistema de reservas', desc: 'Agenda online para que los pacientes reserven sin necesidad de llamar.' },
    { icon: '💬', title: 'WhatsApp integrado',  desc: 'Contacto directo con los pacientes en un solo clic.' },
    { icon: '🔍', title: 'Visible en Google',   desc: 'SEO local optimizado para aparecer cuando te busquen en tu zona.' },
  ],
}

// ── PROYECTOS ────────────────────────────────
export const proyectos = {
  tag:   'Proyectos Realizados',
  title: { line1: 'Trabajo que', line2: 'habla por sí solo' },
  items: [
    {
      id: '01',
      tag: 'Sistema Web',
      title: 'Gestión de Solicitudes Empresariales',
      desc: 'Sistema web para gestión y seguimiento de solicitudes internas con panel de administración y automatización de procesos.',
      techs: ['React', 'Node.js', 'PostgreSQL'],
      // Pexels — code on screen, dark
      // Photographer: Markus Spiske  |  Free to use
      image: {
        src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
        alt: 'Sistema de gestión de solicitudes',
      },
    },
    {
      id: '02',
      tag: 'Sitio Web Profesional',
      title: 'Sitio Web para Clínica Dental',
      desc: 'Presencia web completa con sistema de reservas online, integración WhatsApp y optimización SEO local.',
      techs: ['HTML/CSS', 'JavaScript', 'SEO'],
      // Pexels — modern clinic interior
      // Photographer: Pixabay  |  Free to use
      image: {
        src: 'https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
        alt: 'Sitio web clínica dental',
      },
    },
    {
      id: '03',
      tag: 'Dashboard',
      title: 'Dashboard de Análisis de Datos',
      desc: 'Panel de control interactivo para visualización y análisis de datos empresariales en tiempo real.',
      techs: ['React', 'Chart.js', 'API REST'],
      // Pexels — analytics dashboard laptop
      // Photographer: fauxels  |  Free to use
      image: {
        src: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
        alt: 'Dashboard de análisis de datos',
      },
    },
  ],
}

// ── SOBRE MÍ ─────────────────────────────────
export const sobre = {
  tag:   'Sobre EugeDev',
  title: { line1: 'Eugenio Escobar,', line2: 'Desarrollador Web' },
  paragraphs: [
    'Soy desarrollador con más de 6 años de experiencia construyendo soluciones tecnológicas para empresas y profesionales. Mi enfoque está en entender el problema real antes de escribir una sola línea de código.',
    'He trabajado en proyectos para organizaciones que exigen calidad, confiabilidad y resultados medibles. Cada proyecto que entrego es resultado de análisis, diseño cuidadoso y ejecución técnica de primer nivel.',
  ],
  stats: [
    { num: '6+',  label: 'Años de experiencia' },
    { num: '15+', label: 'Proyectos entregados' },
    { num: '100%', label: 'A medida' },
  ],
  orgsLabel: 'Experiencia en organizaciones como:',
  orgs: ['Infycom', 'Ejército de Chile', 'Actis', 'SONDA'],
  // Pexels — professional man dark studio, confidence
  // Photographer: Italo Melo  |  Free to use
  photo: {
    src: '/image1.png',
    alt: 'Eugenio Escobar — EugeDev',
    credit: '',
  },
}

// ── CONTACTO ─────────────────────────────────
export const contacto = {
  tag:         'Contacto',
  title:       { line1: 'Hablemos de', line2: 'tu proyecto' },
  description: 'Cuéntame qué necesitas y te respondo en menos de 24 horas con una propuesta personalizada.',
  quote:       'Cada proyecto comienza con <em>una buena conversación.</em>',
  items: [
    { icon: 'whatsapp', label: 'WhatsApp',       value: '+56 9 7211 6431',        href: 'https://wa.me/56972116431' },
    { icon: 'email',    label: 'Email',           value: 'euge.escobar@eugedev.cl',    href: 'mailto:euge.escobar@eugedev.cl' },
    { icon: 'calendar', label: 'Agendar reunión', value: 'AgendaPro — Sin costo',   href: 'https://eugedev.site.agendapro.com/cl', external: true },
  ],
  form: {
    fields: [
      { id: 'nombre',  label: 'Nombre',            type: 'text',  placeholder: 'Tu nombre',            half: true  },
      { id: 'empresa', label: 'Empresa (opcional)', type: 'text',  placeholder: 'Tu empresa',           half: true  },
      { id: 'email',   label: 'Email',              type: 'email', placeholder: 'tu@email.com',         half: false },
      { id: 'mensaje', label: 'Mensaje',            type: 'area',  placeholder: 'Cuéntame sobre tu proyecto...', half: false },
    ],
  },
  buttons: [
    { label: 'Enviar mensaje',  type: 'submit',   variant: 'primary'   },
    { label: 'WhatsApp',        href: 'https://wa.me/56972116431', variant: 'whatsapp', icon: 'whatsapp', external: true },
    { label: 'Agendar reunión', href: 'https://eugedev.site.agendapro.com/cl',     variant: 'outline',  icon: 'calendar', external: true },
  ],
}

// ── FOOTER ───────────────────────────────────
export const footer = {
  logo:  { text: 'Euge', highlight: 'Dev' },
  copy:  `© ${new Date().getFullYear()} EugeDev · Eugenio Escobar · Desarrollo Web Profesional`,
  links: [
    { href: '#servicios', label: 'Servicios' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto',  label: 'Contacto'  },
  ],
}

// ── GLOBAL ───────────────────────────────────
export const whatsappFloat = {
  href:  'https://wa.me/56972116431',
  label: 'Escríbeme por WhatsApp',
}
