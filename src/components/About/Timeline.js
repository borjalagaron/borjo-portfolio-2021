import React, { useState } from 'react';
import TimelineCard from './TimelineCard';
import './Timeline.css';

const Timeline = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [professional, setProfessional] = useState(true);
  const [personal, setPersonal] = useState(false);

  return (
    <div class="page">
      <button className="time" onClick={() => setProfessional(!professional)}>
        Professional
      </button>
      <button className="time" onClick={() => setPersonal(!personal)}>If you wanna make it personal</button>

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
