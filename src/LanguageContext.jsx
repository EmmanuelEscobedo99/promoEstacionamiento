import { createContext, useContext } from 'react'

export const LanguageContext = createContext({ lang: 'ES', setLang: () => {}, t: {} })

export function useLang() {
  return useContext(LanguageContext)
}