import React, { useRef } from 'react';

const HeaderInterface = (props) => {
  const element = useRef(React.lazy(() => import(`../modules/${props.interfaces.header}`)));
  return <element.current {...props} />;
};

export default HeaderInterface;
