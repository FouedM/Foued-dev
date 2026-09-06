// src/i18n.ts
"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: { translation: require("./public/locales/en/common.json") },
    fr: { translation: require("./public/locales/fr/common.json") },
    ar: { translation: require("./public/locales/ar/common.json") },
    de: { translation: require("./public/locales/de/common.json") },
  },
  interpolation: { escapeValue: false },
});

export default i18n;
