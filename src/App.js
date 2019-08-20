import React, { Suspense } from 'react';
import interfaces from './interfaces';
import styles from './generated/styles.js';
import manifest from './generated/manifest.json';
import StoreInterface from 'corex-store-interface';

const App = () => {
  return (
    <StoreInterface
      styles={styles}
      manifest={manifest}
      render={(props) => {
        return (
          <Suspense fallback={<div>Loading</div>}>
            <interfaces.header interfaces={manifest.interfaces} {...props} />
            <interfaces.template interfaces={manifest.interfaces} {...props} />
          </Suspense>
        );
      }}
    />
  );
};

export default App;
