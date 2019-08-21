import React, { useRef } from 'react';

const HeaderInterface = (props) => {
  const { current: Component } = useRef(
    React.lazy(() => import(`../modules/${props.interfaces.header}`)),
  );
  return <Component {...props} />;
};

export default HeaderInterface;
