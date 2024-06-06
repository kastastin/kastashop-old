'use client'

import { createDomain } from 'effector'
import { AllowedLanguages } from '@/constants/lang'

const language = createDomain()

export const setLanguage = language.createEvent<AllowedLanguages>()

export const $language = language
  .createStore<AllowedLanguages>(AllowedLanguages.UA)
  .on(setLanguage, (_, language) => language)
