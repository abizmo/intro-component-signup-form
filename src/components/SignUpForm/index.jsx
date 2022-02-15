import React from 'react';

import styles from './SignUpForm.module.css';

const SignUpForm = () => (
  <form className={styles.signUpForm}>
    <div className={styles.input}>
      <input
        autoComplete="off"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        type="text"
      />
    </div>
    <div className={styles.input}>
      <input
        autoComplete="off"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        type="text"
      />
    </div>
    <div className={styles.input}>
      <input
        autoComplete="off"
        id="email"
        name="email"
        placeholder="Email Address"
        type="text"
      />
    </div>
    <div className={styles.input}>
      <input
        autoComplete="off"
        id="password"
        name="password"
        placeholder="Password"
        type="password"
      />
    </div>
    <div className={styles.action}>
      <button type="submit">
        Claim your free trial
      </button>
      <p>
        By clicking the button, you are agreeing to our
        {' '}
        <b>Terms and Services</b>
      </p>
    </div>
  </form>
);

export default SignUpForm;
