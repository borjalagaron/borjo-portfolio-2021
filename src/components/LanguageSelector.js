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
        className="lang-btn de"
        onClick={() => changeLanguage('de')}
        aria-label="Change to German"
      ></button>
      <button
        className="lang-btn en"
        onClick={() => changeLanguage('en')}
        aria-label="Change to English"
      ></button>
      <button
        className="lang-btn es"
        onClick={() => changeLanguage('es')}
        aria-label="Change to Spanish"
      ></button>
      {/* <div className="lang-menu">
        <div className="selected-lang">XDXDD</div>
        <ul>
          <li>
            <a className="de">1</a>
          </li>
          <li>
            <a className="es"></a>
          </li>
          <li>
            <a className="en"></a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
