// Initialize react i18next localization
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from '../locales/en.json';
import huTranslation from '../locales/hu.json';

i18n
  .use(LanguageDetector)
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: 'en',
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
    resources: {
      en: { translation: enTranslation },
      hu: { translation: huTranslation },
    },
  });

export default i18n;