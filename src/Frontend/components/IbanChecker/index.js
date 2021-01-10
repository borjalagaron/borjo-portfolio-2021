import React, { useState } from 'react';
import IBAN from 'iban';
import { Route } from 'react-router-dom';
import Breadcrumbs from '../../Breadcrumbs';
import paths from '../../../paths';

const IbanChecker = ({ match }) => {
  const [iban, setIban] = useState('');
  // const [isIbanValid, setIsIbanValid] = useState(false);

  let checkIban = (ibanInput) => {
    if (ibanInput.match(/\S/g).length < 34) {
      setIban(ibanInput);
    }
  };

  return (
    <div>
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
              return (
                <div className="p-8">
                  <Breadcrumbs crumbs={crumbs} />
                </div>
              );
            }}
          />
        </>
      ))}
      <input
        placeholder="write your IBAN"
        value={IBAN.printFormat(iban, ' ')}
        onChange={(input) => checkIban(input.target.value)}
        required
      ></input>
      <h1>{IBAN.isValid(iban) ? 'oh yeah' : 'nope'}</h1>
    </div>
  );
};

IbanChecker.defaultProps = {};

export default IbanChecker;
