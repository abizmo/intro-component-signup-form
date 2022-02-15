import PropTypes from 'prop-types';
import React from 'react';

import './Footer.css';

const Footer = ({ accentColor }) => (
  <footer>
    <p className="attribution">
      Challenge by
      {' '}
      <a style={{ color: accentColor }} href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>
      .
      Coded by
      {' '}
      <a style={{ color: accentColor }} href="https://www.abizmo.dev">Abián Izquierdo</a>
      .
    </p>
  </footer>
);

Footer.propTypes = {
  accentColor: PropTypes.string,
};

Footer.defaultProps = {
  accentColor: null,
};

export default Footer;
