import React from 'react';
import styles from './index.module.sass';

const Button = (props) => {
  const { type, className } = props;
  const attrs = {
    className: `
      ${styles.button}
      ${styles.default}
      ${styles[type]}
      ${className}
    `,
    ...props,
  };
  return <div {...attrs}>{props.children}</div>;
};

export default Button;
