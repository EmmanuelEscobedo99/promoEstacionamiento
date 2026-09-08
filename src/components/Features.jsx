import { useLang } from '../LanguageContext'
import Icon from './Icon'

export default function Features() {
  const { t } = useLang()

  return (
    <section id="features" className="section features">
      <div className="section-head">
        <h2>{t.features.title}</h2>
        <p>{t.features.subtitle}</p>
      </div>

      <div className="features-grid">
        {t.features.items.map((feature) => (
          <article key={feature.title} className="feature-card">
            <span className="feature-icon">
              <Icon name={feature.icon} size={22} />
            </span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}