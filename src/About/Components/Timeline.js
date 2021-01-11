import React, { useState } from 'react';
import TimelineCard from './TimelineCard';

import { useTranslation } from 'react-i18next';
import './Timeline.css';
import TimelineButtonSelector from './TimelineButtonSelector';

const Timeline = (props) => {
  const { t } = useTranslation();

  const [professional, setProfessional] = useState(true);
  const [personal, setPersonal] = useState(false);

  return (
    <div class="page">
      <div className="timeline-selector">
        <TimelineButtonSelector
          className={professional && !personal ? "btn-timeline__active" : "btn-timeline"}
          isProfessional={true}
          isPersonal={false}
          setProfessional={setProfessional}
          setPersonal={setPersonal}
          textButton={t('button.professional')}
        />
        <TimelineButtonSelector
          className={!professional && personal ? "btn-timeline__active" : "btn-timeline"}
          isProfessional={false}
          isPersonal={true}
          setProfessional={setProfessional}
          setPersonal={setPersonal}
          textButton={t('button.personal')}
        />
        <TimelineButtonSelector
          className={professional && personal ? "btn-timeline__active" : "btn-timeline"}
          isProfessional={true}
          isPersonal={true}
          setProfessional={setProfessional}
          setPersonal={setPersonal}
          textButton={t('button.knowMeCompletely')}
        />
      </div>
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
