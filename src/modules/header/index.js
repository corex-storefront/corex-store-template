import React from 'react';
import HeaderLink from './headerLink';

const Header = () => {
  const links = [
    { name: 'Shop', type: 'link', to: '/shop' },
    { name: 'Find Your Fit', type: 'link', to: '/outfits' },
    { name: 'atoms', type: 'central', to: '/' },
    { name: 'Account', type: 'link', to: '/checkout' },
    { name: 'Cart', type: 'link', to: '/checkout' },
  ];
  return (
    <header className="h4 mw-100 helvetica">
      <div className="w-100 pv4 center flex items-center">
        {links.map((link, index) => (
          <HeaderLink key={index} {...link} />
        ))}
      </div>
    </header>
  );
};

export default Header;
