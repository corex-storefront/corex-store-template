import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLink = ({ name, type, to }) => {
  if (type === 'central') {
    return (
      <Link
        to={to}
        className="flex items-center justify-center h2 tc dim pointer no-underline text-primary f4 w-60">
        <b>{name}</b>
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className="flex items-center justify-center h2 tc dim pointer no-underline text-primary f7 w-10">
      {name}
    </Link>
  );
};

export default HeaderLink;
