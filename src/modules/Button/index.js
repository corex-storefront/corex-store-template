import React from 'react';
import styles from './index.module.sass';

const Button = (props) => {
  const { type, className } = props;
  const attrs = {
    ...props,
    className: `${styles.button} ${styles.default} ${styles[type]} ${className}`,
  };
  return <div {...attrs}>{props.children}</div>;
};

export default Button;
