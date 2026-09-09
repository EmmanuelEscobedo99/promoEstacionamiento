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
    chips: [
      'Mapa en tiempo real',
      'Reservas de espacios',
      'Pago por QR y monedero',
      'Reportes e ingresos',
    ],
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
        title: 'Reservas de espacios',
        text: 'El cliente aparta su lugar desde el mapa, con ventana de tiempo y avisos automáticos.',
      },
      {
        icon: 'qr',
        title: 'Pago con código QR',
        text: 'Cada estancia genera su propio QR; el empleado lo cobra a la salida en segundos.',
      },
      {
        icon: 'wallet',
        title: 'Monedero electrónico',
        text: 'El cliente recarga saldo y paga sus estancias con un toque, sin efectivo ni tarjetas.',
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
      { caption: 'Reserva y ocupa tu espacio desde el mapa' },
      { caption: 'Pago con QR, monedero y tarjeta en la salida' },
      { caption: 'Mi cuenta: saldo, monedero y movimientos' },
      { caption: 'Registro de vehículos y clientes' },
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
        title: 'Cobra por QR o monedero',
        text: 'Entradas, salidas y pagos automáticos por tiempo, por QR y con monedero. Listo.',
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
        text: 'Maneja el día a día: entradas, salidas, caja y cobros por QR desde el mapa.',
      },
      {
        icon: 'wallet',
        title: 'Cliente',
        text: 'Reserva su lugar, recarga su monedero y paga sus estancias en un toque.',
      },
    ],
  },
  cta: {
    title: '¿Listo para digitalizar tu estacionamiento?',
    text: 'Mapa en tiempo real, reservas, pago por QR y monedero. Agenda una demostración en vivo.',
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
    chips: [
      'Real-time map',
      'Space reservations',
      'QR and wallet payments',
      'Reports and revenue',
    ],
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
        title: 'Space reservations',
        text: 'Clients book their spot from the map, with a time window and automatic alerts.',
      },
      {
        icon: 'qr',
        title: 'QR code payments',
        text: 'Every stay generates its own QR; the employee charges it at the exit in seconds.',
      },
      {
        icon: 'wallet',
        title: 'E-wallet',
        text: 'Clients top up their balance and pay for their stays in one tap, no cash or cards.',
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
      { caption: 'Reserve and occupy your spot from the map' },
      { caption: 'Pay by QR, wallet or card at the exit' },
      { caption: 'My account: balance, wallet and activity' },
      { caption: 'Vehicle and client registry' },
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
        title: 'Charge by QR or wallet',
        text: 'Entries, exits and automatic time-based payments, by QR and with wallet. Done.',
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
        text: 'Handles day-to-day: entries, exits, cash and QR charges from the map.',
      },
      {
        icon: 'wallet',
        title: 'Client',
        text: 'Reserves their spot, tops up their wallet and pays their stays in one tap.',
      },
    ],
  },
  cta: {
    title: 'Ready to digitalize your parking lot?',
    text: 'Real-time map, reservations, QR payments and wallet. Book a live demonstration.',
    button: 'Chat on WhatsApp',
  },
  footer: {
    tagline: 'Parking lot management system.',
    rights: '© 2026 Estacionamiento. All rights reserved.',
  },
}

export const LOCALES = { ES, EN }