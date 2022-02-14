import PropTypes from 'prop-types';
import React from 'react';

import './Footer.css';

const Footer = ({ style }) => (
  <footer>
    <p className="attribution">
      Challenge by
      {' '}
      <a style={style} href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>
      .
      Coded by
      {' '}
      <a style={style} href="https://www.abizmo.dev">Abián Izquierdo</a>
      .
    </p>
  </footer>
);

Footer.propTypes = {
  style: PropTypes.shape(),
};

Footer.defaultProps = {
  style: null,
};

export default Footer;
