import TextBox from 'shared/TextBox';
import React from 'react';
import { useTranslation } from 'react-i18next';
import TimelineItems from './Components/TimelineItems';

import './About.css';
import Timeline from './Components/Timeline';

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
    { name: t('about.value.creativity'), underlined: true },
  ];
  return (
    <div className="About">
      <div className="about-img"></div>
      <div className="about-desc">
        <div className="about-desc-title">
          {t('about.text1')}
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
