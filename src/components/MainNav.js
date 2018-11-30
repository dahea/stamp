import React from 'react';

const MainNav = ({navType}) => (
  <nav className={`main-nav ${navType === 'header' ? 'header' : ''}`}>
    <a href="#" className='nav-item'>About</a>
    <a href="#" className='nav-item'>Integrations</a>
    <a href="#" className='nav-item'>Pricing</a>
    <a href="#" className='nav-item'>Contacts</a>
  </nav>
)

export default MainNav;
