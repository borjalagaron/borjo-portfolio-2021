import React from 'react';
import './Hero.css';
import { useTranslation } from 'react-i18next';

const Hero = (props) => {
  //   const width = window.innerWidth;
  //   const height = window.innerHeight;

  const { t } = useTranslation();

  return (
    <div className="hero">
      <h1 className="hero-text hero-title">
        {t('hero.hello')}{' '}
        <span className="underlined underlined--offset">Borja</span>!
      </h1>
      <h2 className="hero-text hero-undertitle">{t('hero.pronuntiation')}</h2>
      <h3 className="hero-text hero-description">
        {t('hero.desc1')}{' '}
        <span className="underlined underlined--offset">
          {t('hero.productowner')}
        </span>{' '}
        {t('hero.desc2')}
      </h3>
    </div>
  );
};

export default Hero;
