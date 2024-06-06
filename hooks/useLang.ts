'use client'

import { useUnit } from 'effector-react'

import { $language } from '@/context/lang'
import translationsJson from '@/public/translations/translations.json'

export function useLang() {
  const language = useUnit($language)
  const translations = translationsJson

  return { language, translations }
}
