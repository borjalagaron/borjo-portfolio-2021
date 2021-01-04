import TextBox from 'components/TextBox';
import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';

import './Timeline.css';
import TimelineCard from './TimelineCard';

const Timeline = (props) => {
  const { t } = useTranslation();
  return (
    <div class="page">
      <div class="timeline">
        {props.timelineItems.map((timelineGroup, index) => {
          return (
            <div class="timeline__group">
              <span class="timeline__year time" aria-hidden="true">
                {timelineGroup.year}
              </span>
              <div class="timeline__cards">
                {timelineGroup.items.map((cardItem, index) => {
                  return <TimelineCard item={cardItem} year={timelineGroup.year}/>;
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
