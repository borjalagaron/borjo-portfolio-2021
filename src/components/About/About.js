import TextBox from 'components/TextBox';
import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';
import TimelineItems from './TimelineItems';

import './About.css';
import Timeline from './Timeline';

const About = () => {
  const { t } = useTranslation();
  const values = [
    { name: t('about.value.honesty'), underlined: true },
    { name: t('about.value.empathy'), underlined: true },
    { name: t('about.value.collaboration'), underlined: true },
    { name: t('about.value.motivation'), underlined: true },
    { name: t('about.value.passion'), underlined: true },
    { name: t('about.value.curiosity'), underlined: true },
    { name: t('about.value.goodHumor'), underlined: true },
  ];

  console.log(TimelineItems);
  return (
    <div className="About">
      <div className="about-img"></div>
      <div className="about-desc">
        <div className="about-desc-title">
          {t('hero.desc1')}{' '}
          <span className="underlined underlined--offset">
            {t('hero.productowner')}
          </span>{' '}
          {t('hero.desc2')}
        </div>
        <Timeline timelineItems={TimelineItems} />
      </div>

      <div className="about-other">
        <TextBox title={t('about.values')} list={values} />

        <TextBox quote={t('quote.bullshit')} quoteAuthor="Jordan Belfort" />
        <TextBox quote={t('quote.progress')} quoteAuthor="Ray Dalio" />
        <div className="text-box">
          <ul className="about-list">
            <li>The subtle art of not giving a fuck</li>
            <li>The Design of Everyday things</li>
            <li>How to make friends & influence people</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
