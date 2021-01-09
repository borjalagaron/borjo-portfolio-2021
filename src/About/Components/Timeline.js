import React, { useState } from 'react';
import TimelineCard from './TimelineCard';

import { useTranslation } from 'react-i18next';
import './Timeline.css';

const Timeline = (props) => {
  const { t } = useTranslation();

  const [professional, setProfessional] = useState(true);
  const [personal, setPersonal] = useState(false);

  return (
    <div class="page">
      <button
        className="time"
        onClick={() => {
          setProfessional(true);
          setPersonal(false);
        }}
      >
        {t('button.professional')}
      </button>
      <button
        className="time"
        onClick={() => {
          setProfessional(false);
          setPersonal(true);
        }}
      >
        {t('button.personal')}
      </button>
      <button
        className="time"
        onClick={() => {
          setProfessional(true);
          setPersonal(true);
        }}
      >
        {t('button.knowMeCompletely')}
      </button>

      <div class="timeline">
        {props.timelineItems.map((timelineGroup, index) => {
          return (
            <div class="timeline__group">
              <span class="timeline__year time" aria-hidden="true">
                {timelineGroup.year}
              </span>
              <div class="timeline__cards">
                {timelineGroup.items.map((cardItem, index) => {
                  return (
                    <TimelineCard
                      professional={professional}
                      personal={personal}
                      item={cardItem}
                      year={timelineGroup.year}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
