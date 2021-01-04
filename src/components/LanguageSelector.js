// src/components/LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="LanguageSelector">
      <button
        className={"lang-btn de " + (i18n.language === 'de' ? 'lang-active ' : '')}
        onClick={() => changeLanguage('de')}
        aria-label="Change to German"
      ></button>
      <button
        className={"lang-btn en " + (i18n.language === 'en' ? 'lang-active ' : '')}
        onClick={() => changeLanguage('en')}
        aria-label="Change to English"
      ></button>
      <button
        className={"lang-btn es " + (i18n.language === 'es' ? 'lang-active ' : '')}
        onClick={() => changeLanguage('es')}
        aria-label="Change to Spanish"
      ></button>
    </div>
  );
}
