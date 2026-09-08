import { useLang } from '../LanguageContext'
import { whatsappLink } from '../content'
import Icon from './Icon'

export default function Cta() {
  const { lang, t } = useLang()

  return (
    <section id="contacto" className="section cta">
      <div className="cta-card">
        <span className="cta-glow" />
        <Icon name="whatsapp" size={34} className="cta-icon" />
        <h2>{t.cta.title}</h2>
        <p>{t.cta.text}</p>
        <a
          className="btn btn-whatsapp"
          href={whatsappLink(lang)}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="whatsapp" size={18} />
          {t.cta.button}
        </a>
      </div>
    </section>
  )
}