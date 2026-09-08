import { useState } from 'react'
import { useLang } from '../LanguageContext'
import { VIDEO_SRC } from '../content'
import Icon from './Icon'

export default function VideoDemo() {
  const { t } = useLang()
  const [missing, setMissing] = useState(false)

  return (
    <section id="video" className="section video">
      <div className="section-head">
        <h2>{t.video.title}</h2>
        <p>{t.video.subtitle}</p>
      </div>

      <div className="video-stage">
        <span className="hero-glow hero-glow-v" />
        {!missing && (
          <video
            className="video-player"
            controls
            preload="metadata"
            onError={() => setMissing(true)}
          >
            <source src={VIDEO_SRC} type="video/mp4" onError={() => setMissing(true)} />
          </video>
        )}
        {missing && (
          <div className="video-placeholder">
            <span className="video-play-icon">
              <Icon name="bolt" size={26} />
            </span>
            <strong>{t.video.placeholder}</strong>
            <span className="video-hint">{t.video.placeholderHint}</span>
          </div>
        )}
      </div>
    </section>
  )
}