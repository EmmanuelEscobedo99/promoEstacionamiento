import { useLang } from '../LanguageContext'
import { whatsappLink } from '../content'
import Icon from './Icon'

export default function Hero() {
  const { lang, t } = useLang()

  return (
    <section id="top" className="hero">
      <span className="hero-glow hero-glow-a" />
      <span className="hero-glow hero-glow-b" />

      <div className="hero-layout">
        <div className="hero-copy">
          <span className="hero-badge">
            <Icon name="sparkles" size={14} />
            {t.hero.badge}
          </span>
          <h1>
            {t.hero.titleA} <span>{t.hero.titleAccent}</span>
          </h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={whatsappLink(lang)} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={18} />
              {t.hero.cta}
            </a>
            <a className="btn btn-ghost" href="#features">
              {t.hero.ctaSecondary}
            </a>
          </div>

          <ul className="hero-chips">
            {t.hero.chips.map((chip) => (
              <li key={chip}>
                <Icon name="check" size={14} />
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="preview-window">
            <div className="preview-bar">
              <span className="preview-dot r" />
              <span className="preview-dot y" />
              <span className="preview-dot g" />
              <span className="preview-url">sistema.estacionamiento.app</span>
            </div>
            <div className="preview-img">
              <img
                src="/images/MAPA TIEMPO REAL.png"
                alt="Mapa de espacios del sistema en tiempo real"
              />
            </div>
          </div>
          <div className="preview-caption">
            <Icon name="map" size={14} />
            Mapa de espacios · tiempo real
          </div>
        </div>
      </div>
    </section>
  )
}