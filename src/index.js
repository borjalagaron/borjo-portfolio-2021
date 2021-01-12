import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import './i18n';
import Loading from 'shared/Loading';

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<Loading></Loading>}>
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);
