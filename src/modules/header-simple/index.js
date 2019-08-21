import React, { useState } from 'react';
import styles from './index.module.sass';

const Menu = () => {
  return <span>Menu</span>;
};

const Logo = () => {
  return <span>Logo</span>;
};

const Cart = () => {
  return <span>Cart</span>;
};

const MenuAccount = () => {
  return <span>MenuAccount</span>;
};

const SearchBar = () => {
  return <span>SearchBar</span>;
};

const HeaderSimple = (props) => {
  const { screenSize } = props.device;
  const [menuVisibility, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility((menuVisibility) => !menuVisibility);

  return (
    <header className="pv2 ph4 sticky-0 bg-success c-on-base--inverted avenir f4">
      <div id={styles.mainHeaderBar} className="flex items-center">
        {menuVisibility && (
          <div id={styles.overlay}>
            <Menu />
          </div>
        )}
        <Logo />
        {screenSize === 'desktop' && <Menu />}
        {screenSize === 'tablet' && (
          <div id={styles.buyByDepartment} onClick={toggleMenu}>
            <div>Comprar por</div>
            <div>
              <span>Departamento</span>
              <i className="material-icons">keyboard_arrow_down</i>
            </div>
          </div>
        )}
        <Cart />
        {screenSize !== 'phone' && (
          <div id={styles.userTrigger}>
            <i className="material-icons">person</i>
            <MenuAccount />
          </div>
        )}
        <SearchBar />
      </div>
    </header>
  );
};

export default HeaderSimple;
