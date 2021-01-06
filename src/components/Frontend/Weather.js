import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const api = {
  key: 'd1fe408c8c692a5e3997c8a079aeeb62',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const Weather = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const { t } = useTranslation();

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  };
  const dateBuilder = (d) => {
    let months = [
      t('date.month.01'),
      t('date.month.02'),
      t('date.month.03'),
      t('date.month.04'),
      t('date.month.05'),
      t('date.month.06'),
      t('date.month.07'),
      t('date.month.08'),
      t('date.month.09'),
      t('date.month.10'),
      t('date.month.11'),
      t('date.month.12'),
    ];
    let days = [
      t('date.day.sunday'),
      t('date.day.monday'),
      t('date.day.tuesday'),
      t('date.day.wednesday'),
      t('date.day.thrusday'),
      t('date.day.friday'),
      t('date.day.saturday'),
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div
      className={
        typeof weather.main != 'undefined'
          ? weather.main.temp > 16
            ? 'app warm'
            : 'app'
          : 'app'
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != 'undefined' ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.feels_like)}°C
              </div>
              <div className="weather">{weather.weather[0].main}</div>
              <div className="weather-desc">
                {weather.weather[0].description}
              </div>
              <div className="weather-desc">
              {Math.round(weather.main.feels_like)>35 ? 'veery hot' : t('weather.' + weather.weather[0].id)}
                
              </div>
              <div className="weather-icon">
                <img
                  src={
                    'http://openweathermap.org/img/wn/' +
                    weather.weather[0].icon +
                    '@4x.png'
                  }
                />
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </main>
    </div>
  );
};

export default Weather;
