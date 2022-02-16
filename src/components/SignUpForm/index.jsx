import React, { useState } from 'react';

import styles from './SignUpForm.module.css';

const SignUpForm = () => {
  const [email, setEmail] = useState({
    value: '',
    error: '',
  });

  const isEmpty = (value) => value.trim() === '';

  const validateEmail = (emailToValidate) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (isEmpty(emailToValidate)) return 'Email can not be empty';
    if (!emailToValidate.match(re)) return 'Looks like this is not an email';
    return '';
  };

  const handleChange = ({ value }) => {
    setEmail({
      value,
      error: validateEmail(value),
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form className={styles.signUpForm} onSubmit={handleSubmit}>
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
        <div className={`${styles.input} ${!!email.error && styles.error}`}>
          <input
            autoComplete="off"
            id="email"
            name="email"
            onChange={({ target }) => handleChange(target)}
            placeholder="Email Address"
            type="text"
            value={email.value}
          />
          {
            !!email.error
            && <i className="fa-solid fa-circle-exclamation" />
          }
        </div>
        {
          !!email.error
          && <em className={styles.message}>{email.error}</em>
        }
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
};

export default SignUpForm;
