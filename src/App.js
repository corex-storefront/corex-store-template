import React, { Suspense } from 'react';
import manifest from './generated/manifest.json';
import StoreInterface from 'corex-store-interface';
import { Header, Template } from './interfaces';
import styles from './generated/styles.js';

const App = () => {
  return (
    <StoreInterface
      styles={styles}
      manifest={manifest}
      render={(props) => {
        return (
          <Suspense fallback={<div>Loading</div>}>
            <Header interfaces={manifest.interfaces} {...props} />
            <Template interfaces={manifest.interfaces} {...props} />
          </Suspense>
        );
      }}
    />
  );
};

export default App;
