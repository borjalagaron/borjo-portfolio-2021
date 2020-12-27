// src/components/LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css'

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="LanguageSelector">
      <button className="lang-btn" onClick={() => changeLanguage('de')}>
        de
      </button>
      <button className="lang-btn" onClick={() => changeLanguage('en')}>
        en
      </button>
      <button className="lang-btn" onClick={() => changeLanguage('es-es')}>
        es
      </button>
    </div>
  );
}
