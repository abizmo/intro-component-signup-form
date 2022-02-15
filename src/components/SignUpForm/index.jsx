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
    <div>
      <div className={`${styles.input} ${styles.error}`}>
        <input
          autoComplete="off"
          id="email"
          name="email"
          placeholder="Email Address"
          type="text"
          value="email@example/com"
        />
        <i className="fa-solid fa-circle-exclamation" />
      </div>
      <em className={styles.message}>Looks like this is not an email</em>
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
