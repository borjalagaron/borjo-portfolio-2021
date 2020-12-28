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
        {t('hero.hello')}
        <br></br>
        {t('hero.iam')}{' '}
        <span className="underlined underlined--offset">Borja</span>!
      </h1>
      <div className="Iam hero-text">
        <b>
          <div className="innerIam">
            Product Owner
            <br />
            Scrum Master
            <br />
            Developer
            <br />
            UX Designer
            <br />
            Minimalist
          </div>
        </b>
      </div>
      <h2 className="hero-text hero-undertitle">{t('hero.pronuntiation')}</h2>
      {/* <h3 className="hero-text hero-description">
        {t('hero.desc1')}{' '}
        <span className="underlined underlined--offset">
          {t('hero.productowner')}
        </span>{' '}
        {t('hero.desc2')}
      </h3> */}
      
    </div>
  );
};

export default Hero;
