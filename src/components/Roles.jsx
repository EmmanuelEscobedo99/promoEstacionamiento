import { useLang } from '../LanguageContext'
import Icon from './Icon'

export default function Roles() {
  const { t } = useLang()

  return (
    <section id="roles" className="section roles">
      <div className="section-head">
        <h2>{t.roles.title}</h2>
        <p>{t.roles.subtitle}</p>
      </div>

      <div className="roles-grid">
        {t.roles.items.map((role) => (
          <article key={role.title} className="role-card">
            <span className="role-icon">
              <Icon name={role.icon} size={24} />
            </span>
            <h3>{role.title}</h3>
            <p>{role.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}