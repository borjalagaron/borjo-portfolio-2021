import React, { useState, useEffect } from 'react';
import IBAN from 'iban';
import { Route } from 'react-router-dom';
import Breadcrumbs from 'shared/Breadcrumbs';
import paths from 'paths';
import { useTranslation } from 'react-i18next';

import './styles.css';

const IbanChecker = ({ match }) => {
  const { t } = useTranslation();

  const initialIsFormValid = () =>
    Boolean(window.localStorage.getItem(false) || false);

  // const initialCount = () => Number(window.localStorage.getItem('count') || 0);
  const initialIban = () => String(window.localStorage.getItem('iban') || '');
  const initialName = () => String(window.localStorage.getItem('name') || '');
  const initialDescription = () =>
    String(window.localStorage.getItem('description') || '');
  const initialLastName = () =>
    String(window.localStorage.getItem('lastName') || '');

  // const [count, setCount] = useState(initialCount);
  const [isFormValid, setFormValid] = useState(initialIsFormValid);
  const [iban, setIban] = useState(initialIban);
  const [name, setName] = useState(initialName);
  const [lastName, setLastName] = useState(initialLastName);
  const [description, setDescription] = useState(initialDescription);

  // const increment = () => setCount(count + 1);

  useEffect(() => {
    if (IBAN.isValid(iban)) {
      localStorage.clear();
    } else {
      // window.localStorage.setItem('count', count);
      window.localStorage.setItem('iban', iban);
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('lastName', lastName);
      window.localStorage.setItem('description', description);
    }
    setFormValid(name && lastName && IBAN.isValid(iban));
  }, [isFormValid, iban, name, lastName, description]);

  // const [isIbanValid, setIsIbanValid] = useState(false);

  let checkIban = (ibanInput) => {
    if (ibanInput && ibanInput.match(/\S/g).length < 35) {
      setIban(ibanInput);
    }
    if (ibanInput.length === 0) {
      setIban('');
    }
  };

  return (
    <div className="main-container">
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
      <div className="form-container">
        <div>This is a test Formular. NO DATA will be save</div>
        <div>Here some IBAN to test the form:</div>
        <div>ES 91 2100 0418 45 0200051332 ----- DE 89 37040044 0532013000</div>
        <form className="form" action="">
          <p>
            <input
              className="form-input"
              placeholder={t('form.placeholder.name')}
              value={name}
              onChange={(input) => setName(input.target.value)}
              required
            ></input>
            <input
              className="form-input"
              placeholder={t('form.placeholder.lastName')}
              value={lastName}
              onChange={(input) => setLastName(input.target.value)}
              required
            ></input>
          </p>
          <p>
            <textarea
              className="form-input"
              rows="4"
              placeholder={t('form.placeholder.description')}
              value={description}
              onChange={(input) => setDescription(input.target.value)}
            ></textarea>
          </p>
          <p>
            <input
              className="form-input"
              placeholder={t('form.placeholder.iban')}
              value={IBAN.printFormat(iban, ' ')}
              onChange={(input) => checkIban(input.target.value)}
              required
            ></input>
          </p>

          <h1 className={!IBAN.isValid(iban) ? 'wrong-iban' : ''}>
            {IBAN.isValid(iban) ? 'IBAN is right!!' : 'IBAN is not correct'}
          </h1>
          <p>
            <button className="form-btn" disabled={!isFormValid}>
              {t('form.submit').toUpperCase()}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

IbanChecker.defaultProps = {};

export default IbanChecker;
