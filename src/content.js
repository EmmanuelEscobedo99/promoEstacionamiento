export const WHATSAPP = {
  number: '526183190534',
  messageES: 'Hola, me interesa el sistema de estacionamiento. Quiero agendar una demostración.',
  messageEN: 'Hi, I\'m interested in the parking management system. I\'d like to book a demo.',
}

export function whatsappLink(lang) {
  const message = lang === 'ES' ? WHATSAPP.messageES : WHATSAPP.messageEN
  return `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(message)}`
}

export const SCREENS = [
  { src: '/images/sistema-1.png', captionKey: '0' },
  { src: '/images/sistema-2.png', captionKey: '1' },
  { src: '/images/sistema-3.png', captionKey: '2' },
  { src: '/images/sistema-4.png', captionKey: '3' },
]

export const VIDEO_SRC = '/videos/demo.mp4'