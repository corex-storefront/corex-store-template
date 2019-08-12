import React from 'react';
import useDevice from 'usedevice';
import Store from './views/Store';
import { Route, Switch } from 'react-router-dom';

/**
 * App Component
 *
 * @name App
 * @description Componente principal de la tienda
 *
 * @param {Object} params Props del componente React
 * @param {String} params.history El objeto para interactuar con las rutas/urls (history) del navegador
 *
 * @example
 *
 *      <App history={history} />
 *
 * @returns {React.Component}
 */

const App = ({ history = null }) => {
  const device = useDevice();

  return (
    <Switch>
      <Route
        path='/:category?/:family?/:line?/:productName?/:productID?'
        render={(props) => {
          return <Store {...props} history={history} device={device} />;
        }}
      />
    </Switch>
  );
};

export default App;
