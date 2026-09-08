import { useLang } from '../LanguageContext'
import { whatsappLink } from '../content'
import Icon from './Icon'

export default function Navbar() {
  const { lang, setLang, t } = useLang()

  return (
    <header className="navbar">
      <a className="nav-brand" href="#top">
        <span className="nav-mark">
          <Icon name="car" size={20} />
        </span>
        <span className="nav-brand-text">
          <strong>Estacionamiento</strong>
          <em>Sistema de gestión</em>
        </span>
      </a>

      <nav className="nav-links">
        {[
          ['features', '#features'],
          ['screenshots', '#screenshots'],
          ['video', '#video'],
          ['how', '#how'],
          ['roles', '#roles'],
        ].map(([key, href]) => (
          <a key={key} href={href}>
            {t.nav[key]}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className="lang-toggle"
          aria-label="Cambiar idioma"
          onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
        >
          <span className={lang === 'ES' ? 'on' : ''}>ES</span>
          <span className={lang === 'EN' ? 'on' : ''}>EN</span>
        </button>
        <a className="btn btn-primary btn-sm" href={whatsappLink(lang)} target="_blank" rel="noreferrer">
          {t.nav.cta}
        </a>
      </div>
    </header>
  )
}