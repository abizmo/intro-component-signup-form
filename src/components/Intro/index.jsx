/* eslint-disable max-len */
import React from 'react';

import Banner from '../Banner';
import SignUpForm from '../SignUpForm';
import styles from './Intro.module.css';

const Intro = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h1>
        Learn to code by watching others
      </h1>
      <p>
        See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
        but understanding how developers think is invaluable.
      </p>
    </div>
    <div className={styles.action}>
      <Banner />
      <SignUpForm />
    </div>
  </div>
);

export default Intro;
