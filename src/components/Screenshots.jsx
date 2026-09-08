import { useState } from 'react'
import { useLang } from '../LanguageContext'
import { SCREENS } from '../content'
import Icon from './Icon'

function ShotFrame({ src, caption, idx }) {
  const [missing, setMissing] = useState(false)

  return (
    <figure className="shot">
      <div className="shot-window">
        <div className="shot-bar">
          <span className="preview-dot r" />
          <span className="preview-dot y" />
          <span className="preview-dot g" />
          <span className="shot-url">sistema.estacionamiento.app</span>
        </div>
        <div className="shot-body">
          {!missing && <img src={src} alt={caption} onError={() => setMissing(true)} />}
          {missing && (
            <div className="shot-placeholder">
              <Icon name={['map', 'chart', 'car', 'box'][idx % 4]} size={30} />
              <strong>Agrega tu captura</strong>
              <span>sistema-{idx + 1}.png → public/images/</span>
            </div>
          )}
        </div>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export default function Screenshots() {
  const { t } = useLang()

  return (
    <section id="screenshots" className="section section-dark screenshots">
      <div className="section-head">
        <h2>{t.screenshots.title}</h2>
        <p>{t.screenshots.subtitle}</p>
      </div>

      <div className="shots-grid">
        {t.screenshots.frames.map((f, i) => (
          <ShotFrame key={f.caption} src={SCREENS[i].src} caption={f.caption} idx={i} />
        ))}
      </div>
    </section>
  )
}