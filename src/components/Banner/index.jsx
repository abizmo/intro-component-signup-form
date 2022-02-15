import React from 'react';

import styles from './Banner.module.css';

const Banner = () => (
  <div className={styles.banner}>
    <p>
      <b>Try it free 7 days</b>
      {' '}
      then $20/mo. thereafter
    </p>
  </div>
);

export default Banner;
