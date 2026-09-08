import { useMemo, useState } from 'react'
import { LanguageContext } from './LanguageContext'
import { LOCALES } from './locale'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import VideoDemo from './components/VideoDemo'
import HowItWorks from './components/HowItWorks'
import Roles from './components/Roles'
import Cta from './components/Cta'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('ES')
  const t = useMemo(() => LOCALES[lang], [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <VideoDemo />
        <HowItWorks />
        <Roles />
        <Cta />
      </main>
      <Footer />
    </LanguageContext.Provider>
  )
}