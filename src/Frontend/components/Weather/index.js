import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route } from 'react-router-dom';
import Breadcrumbs from '../../../shared/Breadcrumbs';
import paths from '../../../paths';

import './Weather.css';

const api = {
  key: 'e2792fb7a71ab46ef46a203c786b9921',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const Weather = () => {
  const [query, setQuery] = useState('Stuttgart');
  const [weather, setWeather] = useState({});
  const [initialSearch, setInitialSearch] = useState(false);

  const { t, i18n } = useTranslation();

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(
        `${api.base}weather?q=${query}&units=metric&lang=${i18n.language}&APPID=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
          console.log(
            `${api.base}weather?q=${query}&units=metric&lang=${i18n.language}&APPID=${api.key}`
          );
        });
    }
  };

  const firstSearch = () => {
    if (initialSearch === false) {
      fetch(
        `${api.base}weather?q=${query}&units=metric&lang=${i18n.language}&APPID=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
      setInitialSearch(true);
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
  firstSearch();

  // const feelsLike = 15;

  // console.log(feelsLike);
  // const containerClass =
  //   feelsLike > 16
  //     ? 'weather-container weather-container__red'
  //     : feelsLike < 16
  //     ? 'weather-container weather-container__blue'
  //     : 'weather-container';
  return (
    <>

      <div
        className={
          typeof weather.main != 'undefined'
            ? weather.main.temp > 23
              ? weather.main.temp > 28
                ? 'main-container weather-container__red'
                : 'main-container weather-container__yellow'
              : 'main-container weather-container__blue'
            : 'main-container'
        }
      >
        {paths.map(({ Component, title, url, cName }, key) => (
          <>
            <Route
              exact
              path={url}
              key={key}
              render={(props) => {
                const crumbs = paths
                  // Get all routes that contain the current one.
                  .filter(({ url }) => props.match.path.includes(url));

                console.log(`Generated crumbs for ${props.match.path}`);
                console.log(crumbs);
                crumbs.map(({ title, url }) => console.log({ title, url }));
                return <Breadcrumbs crumbs={crumbs} />;
              }}
            />
          </>
        ))}
        <main className="weather-container">
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
            <div className="weather-data">
              <div className="location-box">
                <div className="location">
                  {weather.name}, {weather.sys.country}
                </div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="feels-like">
                  {Math.round(weather.main.feels_like)}°C
                </div>
                {/* <div className="weather">{weather.weather[0].main}</div> */}

                <div className="weather-desc">
                  {t('weather.' + weather.weather[0].id)}
                </div>
                <div className="weather-icon">
                  <img
                    src={
                      'http://openweathermap.org/img/wn/' +
                      weather.weather[0].icon +
                      '@4x.png'
                    }
                    alt="weather-img"
                  />
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </main>
      </div>
    </>
  );
};

export default Weather;
