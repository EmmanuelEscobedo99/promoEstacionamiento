const ES = {
  nav: {
    features: 'Características',
    screenshots: 'Capturas',
    video: 'Video',
    how: 'Cómo funciona',
    roles: 'Roles',
    cta: 'Agenda una demo',
  },
  hero: {
    badge: 'Gestión inteligente',
    titleA: 'El sistema de gestión para tu',
    titleAccent: 'estacionamiento',
    subtitle:
      'Mapa de espacios en tiempo real, cobro automático por tiempo, registro de vehículos y estadísticas de ingresos en un solo lugar. Moderno, rápido y confiable.',
    cta: 'Agenda una demostración',
    ctaSecondary: 'Ver características',
    chips: ['Mapa en tiempo real', 'Cobro por tiempo', 'Reportes e ingresos'],
  },
  features: {
    title: 'Todo lo que tu estacionamiento necesita',
    subtitle: 'Una sola plataforma para administrar cada parte de tu negocio.',
    items: [
      {
        icon: 'map',
        title: 'Mapa de espacios en vivo',
        text: 'Visualiza cada cajón, su estado y a su ocupante en tiempo real desde un solo panel.',
      },
      {
        icon: 'clock',
        title: 'Cobro automático por tiempo',
        text: 'Tarifas calculadas según la duración de la estancia. Sin errores ni cuentas manuales.',
      },
      {
        icon: 'car',
        title: 'Registro de vehículos',
        text: 'Da de alta vehículos con placas y propietario en segundos y mantén el control.',
      },
      {
        icon: 'route',
        title: 'Entradas y salidas',
        text: 'Cada acceso y salida queda registrada con hora exacta, vinculada al espacio y al pago.',
      },
      {
        icon: 'chart',
        title: 'Estadísticas de ingresos',
        text: 'Total recaudado, promedios, máximos y mínimos por método, por día y por mes.',
      },
      {
        icon: 'box',
        title: 'Historial y archivado',
        text: 'Consulta el historial completo y recupera registros cuando lo necesites.',
      },
    ],
  },
  screenshots: {
    title: 'Así se ve por dentro',
    subtitle: 'Un vistazo real al sistema: limpio, moderno y fácil de usar.',
    frames: [
      { caption: 'Mapa de espacios en tiempo real' },
      { caption: 'Pagos y estadísticas de ingresos' },
      { caption: 'Registro de vehículos y clientes' },
      { caption: 'Historial y archivo' },
    ],
  },
  video: {
    title: 'Míralo funcionar',
    subtitle: 'Demostración en vivo del sistema.',
    placeholder: 'Coloca tu video aquí',
    placeholderHint: 'Copia tu archivo MP4 a public/videos/demo.mp4 y aparece automáticamente.',
  },
  how: {
    title: 'Cómo funciona',
    subtitle: 'Comienza en minutos con tres simples pasos.',
    items: [
      {
        icon: 'bolt',
        step: '01',
        title: 'Configura',
        text: 'Crea tu estacionamiento, sus niveles y cada uno de sus espacios.',
      },
      {
        icon: 'users',
        step: '02',
        title: 'Conecta',
        text: 'Registra vehículos y clientes; el sistema lleva el control por ti.',
      },
      {
        icon: 'card',
        step: '03',
        title: 'Cobra',
        text: 'Entradas, salidas y pagos automáticos por tiempo. Listo.',
      },
    ],
  },
  roles: {
    title: 'Pensado para cada rol',
    subtitle: 'Acceso y herramientas según el perfil de quien lo usa.',
    items: [
      {
        icon: 'shield',
        title: 'Administrador',
        text: 'Control total: usuarios, precios, tarifas y estadísticas globales.',
      },
      {
        icon: 'user',
        title: 'Empleado',
        text: 'Maneja el día a día: entradas, salidas y caja desde el mapa.',
      },
      {
        icon: 'car',
        title: 'Cliente',
        text: 'Registra sus vehículos y consulta su historial de pagos y movimientos.',
      },
    ],
  },
  cta: {
    title: '¿Listo para digitalizar tu estacionamiento?',
    text: 'Escríbenos por WhatsApp y agenda una demostración en vivo.',
    button: 'Hablar por WhatsApp',
  },
  footer: {
    tagline: 'Sistema de gestión para estacionamientos.',
    rights: '© 2026 Estacionamiento. Todos los derechos reservados.',
  },
}

const EN = {
  nav: {
    features: 'Features',
    screenshots: 'Screenshots',
    video: 'Video',
    how: 'How it works',
    roles: 'Roles',
    cta: 'Request a demo',
  },
  hero: {
    badge: 'Smart management',
    titleA: 'The management system for your',
    titleAccent: 'parking lot',
    subtitle:
      'Real-time space map, automatic time-based billing, vehicle registry and revenue statistics in one place. Modern, fast and reliable.',
    cta: 'Request a demonstration',
    ctaSecondary: 'See features',
    chips: ['Real-time map', 'Time-based billing', 'Reports and revenue'],
  },
  features: {
    title: 'Everything your parking lot needs',
    subtitle: 'One platform to run every part of your business.',
    items: [
      {
        icon: 'map',
        title: 'Live space map',
        text: 'See every spot, its status and its occupant in real time from a single panel.',
      },
      {
        icon: 'clock',
        title: 'Automatic time-based billing',
        text: 'Rates calculated from the length of the stay. No mistakes, no manual math.',
      },
      {
        icon: 'car',
        title: 'Vehicle registry',
        text: 'Register vehicles with plates and owner in seconds and keep full control.',
      },
      {
        icon: 'route',
        title: 'Entries and exits',
        text: 'Every check-in and check-out is recorded with exact time, linked to the spot and payment.',
      },
      {
        icon: 'chart',
        title: 'Revenue statistics',
        text: 'Total collected, averages, highs and lows by method, by day and by month.',
      },
      {
        icon: 'box',
        title: 'History and archive',
        text: 'Browse the full history and restore records whenever you need them.',
      },
    ],
  },
  screenshots: {
    title: 'See it from the inside',
    subtitle: 'A real look at the system: clean, modern and easy to use.',
    frames: [
      { caption: 'Real-time space map' },
      { caption: 'Payments and revenue statistics' },
      { caption: 'Vehicle and client registry' },
      { caption: 'History and archive' },
    ],
  },
  video: {
    title: 'Watch it work',
    subtitle: 'Live demonstration of the system.',
    placeholder: 'Add your video here',
    placeholderHint: 'Drop your MP4 at public/videos/demo.mp4 and it appears automatically.',
  },
  how: {
    title: 'How it works',
    subtitle: 'Start in minutes with three simple steps.',
    items: [
      {
        icon: 'bolt',
        step: '01',
        title: 'Set up',
        text: 'Create your parking lot, its levels and every single space.',
      },
      {
        icon: 'users',
        step: '02',
        title: 'Connect',
        text: 'Register vehicles and clients; the system keeps track for you.',
      },
      {
        icon: 'card',
        step: '03',
        title: 'Charge',
        text: 'Entries, exits and automatic time-based payments. Done.',
      },
    ],
  },
  roles: {
    title: 'Built for every role',
    subtitle: 'Access and tools based on the profile of who uses it.',
    items: [
      {
        icon: 'shield',
        title: 'Administrator',
        text: 'Full control: users, pricing, rates and global statistics.',
      },
      {
        icon: 'user',
        title: 'Employee',
        text: 'Handles day-to-day: entries, exits and cash from the map.',
      },
      {
        icon: 'car',
        title: 'Client',
        text: 'Registers their vehicles and checks their payment and activity history.',
      },
    ],
  },
  cta: {
    title: 'Ready to digitalize your parking lot?',
    text: 'Message us on WhatsApp and book a live demonstration.',
    button: 'Chat on WhatsApp',
  },
  footer: {
    tagline: 'Parking lot management system.',
    rights: '© 2026 Estacionamiento. All rights reserved.',
  },
}

export const LOCALES = { ES, EN }