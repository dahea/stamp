import React from 'react';
import FooterNav from './FooterNav';

const Footer = () => (
  <footer>
  	<div className="copyright">
  		&copy; {(new Date().getFullYear())} Stamp. All Rights Reserved
  	</div>
  	<FooterNav />
  </footer>
)

export default Footer;
