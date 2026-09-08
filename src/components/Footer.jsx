import { useLang } from '../LanguageContext'
import Icon from './Icon'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="nav-mark">
          <Icon name="car" size={18} />
        </span>
        <div>
          <strong>Estacionamiento</strong>
          <span>{t.footer.tagline}</span>
        </div>
      </div>

      <nav className="footer-links">
        <a href="#features">Features</a>
        <a href="#screenshots">Screenshots</a>
        <a href="#how">How it works</a>
        <a href="#roles">Roles</a>
        <a href="#contacto">Contact</a>
      </nav>

      <p className="footer-rights">{t.footer.rights}</p>
    </footer>
  )
}