import { useLang } from '../LanguageContext'
import Icon from './Icon'

export default function HowItWorks() {
  const { t } = useLang()

  return (
    <section id="how" className="section section-dark how">
      <div className="section-head">
        <h2>{t.how.title}</h2>
        <p>{t.how.subtitle}</p>
      </div>

      <div className="steps">
        {t.how.items.map((item) => (
          <article key={item.step} className="step">
            <span className="step-num">{item.step}</span>
            <span className="step-icon">
              <Icon name={item.icon} size={24} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}