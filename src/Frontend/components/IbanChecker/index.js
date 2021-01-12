import React, { useState, useEffect } from 'react';
import IBAN from 'iban';
import { Route } from 'react-router-dom';
import Breadcrumbs from 'shared/Breadcrumbs';
import paths from 'paths';
import { useTranslation } from 'react-i18next';

import './styles.css';

const IbanChecker = ({ match }) => {
  const { t } = useTranslation();

  const initialCount = () => Number(window.localStorage.getItem('count') || 0);
  const initialIban = () => String(window.localStorage.getItem('iban') || '');
  const initialName = () => String(window.localStorage.getItem('name') || '');
  const initialLastName = () =>
    String(window.localStorage.getItem('lastName') || '');
  const [count, setCount] = useState(initialCount);
  const [iban, setIban] = useState(initialIban);
  const [name, setName] = useState(initialName);
  const [lastName, setLastName] = useState(initialLastName);

  const increment = () => setCount(count + 1);

  useEffect(() => {
    if (IBAN.isValid(iban)) {
      localStorage.clear();
    } else {
      window.localStorage.setItem('count', count);
      window.localStorage.setItem('iban', iban);
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('lastName', lastName);
    }
  }, [count, iban, name, lastName]);

  // const [isIbanValid, setIsIbanValid] = useState(false);

  let checkIban = (ibanInput) => {
    if (ibanInput && ibanInput.match(/\S/g).length < 34) {
      setIban(ibanInput);
    } else {
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

      <form className="form" action="">
        <p>
          <input
            placeholder={t('form.placeholder.iban')}
            value={IBAN.printFormat(iban, ' ')}
            onChange={(input) => checkIban(input.target.value)}
            required
          ></input>
        </p>
        <p>
          <input
            placeholder={t('form.placeholder.name')}
            value={name}
            onChange={(input) => setName(input.target.value)}
            required
          ></input>
        </p>
        <p>
          <input
            placeholder="LastName"
            value={lastName}
            onChange={(input) => setLastName(input.target.value)}
            required
          ></input>
        </p>
        <p>
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            placeholder="Description"
            value={name}
            onChange={(input) => setName(input.target.value)}
            required
          ></textarea>
        </p>

        <h1>{IBAN.isValid(iban) ? 'oh yeah' : 'nope'}</h1>
        <p>
          <button onClick={increment}>{count}</button>
        </p>
      </form>
    </div>
  );
};

IbanChecker.defaultProps = {};

export default IbanChecker;
