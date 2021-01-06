import React from 'react';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';

import './Home.css';

const Home = () => {
  const { t } = useTranslation();
  // or const [t, i18n] = useTranslation();

  return (
    <div className="Home">
      <div className="hero-img"></div>
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
      {i18n.language !== 'es' ? (
        <h2 className="hero-text hero-undertitle">{t('hero.pronuntiation')}</h2>
      ) : null}
    </div>
  );
};

export default Home;
