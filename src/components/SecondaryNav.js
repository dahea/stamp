import React, { Fragment } from 'react';
import MainNav from './MainNav';

const SecondaryNav = ({isMobileNavVisible, handleNavToggleClick}) => (
  <Fragment>
    <div className={`nav-toggle ${isMobileNavVisible ? 'active' : ''}`} onClick={handleNavToggleClick} >
      <div className="nav-line left"></div>
      <div className="nav-line right"></div>
    </div>
    <div className="secondary-nav-wrapper">
      <MainNav />
      <nav className="secondary-nav">
        <a href="#" className="nav-item">Nav item 1</a>
        <a href="#" className="nav-item">Nav item 2</a>
        <a href="#" className="nav-item">Nav item 3</a>
        <a href="#" className="nav-item">Nav item 4</a>
        <a href="#" className="nav-item">Nav item 5</a>
      </nav>
    </div>
  </Fragment>
)

export default SecondaryNav;
