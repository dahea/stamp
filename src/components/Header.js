import React from 'react';
import MainNav from './MainNav';
import SecondaryNav from './SecondaryNav';

const Header = ({handleNavToggleClick, isMobileNavVisible}) => (
  <header>
    <div className="logo">Stamp</div>
    <MainNav navType="header" />
    <SecondaryNav handleNavToggleClick={handleNavToggleClick} isMobileNavVisible={isMobileNavVisible} />
  </header>
)

export default Header;
