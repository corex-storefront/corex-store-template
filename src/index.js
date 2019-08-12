import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import environment from './environment';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import { RelayEnvironmentProvider } from 'relay-hooks';

const history = createBrowserHistory();

ReactDOM.render(
  <RelayEnvironmentProvider environment={environment}>
    <Router history={history}>
      <App history={history} />
    </Router>
  </RelayEnvironmentProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
