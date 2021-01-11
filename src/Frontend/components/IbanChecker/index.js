import React, { useState } from 'react';
import IBAN from 'iban';
import { Route } from 'react-router-dom';
import Breadcrumbs from 'shared/Breadcrumbs';
import paths from 'paths';

import './styles.css';

const IbanChecker = ({ match }) => {
  const [iban, setIban] = useState('');
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
        <input
          placeholder="write your IBAN"
          value={IBAN.printFormat(iban, ' ')}
          onChange={(input) => checkIban(input.target.value)}
          required
        ></input>
        <h1>{IBAN.isValid(iban) ? 'oh yeah' : 'nope'}</h1>
      </form>
    </div>
  );
};

IbanChecker.defaultProps = {};

export default IbanChecker;
