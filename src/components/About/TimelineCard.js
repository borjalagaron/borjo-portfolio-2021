import TextBox from 'components/TextBox';
import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';
import { TimelineItems } from './TimelineItems';

import './Timeline.css';
const TimelineCard = (props) => {
  const { t } = useTranslation();
  return (
    <div
      className={
        'timeline__card ' +
        (props.item.type === 'professional' ? 'card' : 'card card-alt')
      }
    >
      <header class="card__header">
        <time
          class="time"
          // datetime="2008-02-02"
        >
          {props.item.timeDay ? (
            <span class="time__day">{props.item.timeDay}</span>
          ) : null}

          {props.item.timeMonth ? (
            <span class="time__month">
              {t('date.month.' + props.item.timeMonth)}{' '}
            </span>
          ) : null}
        </time>
        {props.item.title ? (
          <h3 class="card__title r-title">
            {t('timeline.' + props.year + '.' + props.item.title)}
          </h3>
        ) : null}
      </header>
      <div class="card__content ">
        <span className="underlined underlined--offset">
          {t('timeline.' + props.year + '.' + props.item.description)}
        </span>
      </div>
    </div>
  );
};

export default TimelineCard;
