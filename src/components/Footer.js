import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <small>
      &copy;
      {' '}
      2021
      {' '}
      <Link to="https://github.com/yocosaka">Yoko Saka</Link>
    </small>
  </footer>
);

export default Footer;
