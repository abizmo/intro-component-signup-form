import React, { useState } from 'react';

import styles from './SignUpForm.module.css';

const errorMessages = {
  firstName: 'Fist Name can not be empty',
  lastName: 'Last Name can not be empty',
  emailEmpty: 'Email can not be empty',
  notEmail: 'Looks like this is not an email',
  password: 'Password can not be empty',
};

const initialInputs = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const SignUpForm = () => {
  const [inputs, setInputs] = useState(initialInputs);
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const {
    firstName, lastName, email, password,
  } = inputs;
  const {
    firstName: firstNameError,
    lastName: lastNameError,
    email: emailError,
    password: passwordError,
  } = errors;

  const isEmpty = (value) => value.trim() === '';

  const validateInput = (name, value) => (isEmpty(value) ? errorMessages[name] : '');

  const validateEmail = (emailToValidate) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (isEmpty(emailToValidate)) return errorMessages.emailEmpty;
    if (!emailToValidate.match(re)) return errorMessages.notEmail;
    return '';
  };

  const handleChange = ({ name, value }) => {
    setInputs((prvInputs) => {
      setErrors({
        ...errors,
        [name]: (name === 'email' ? validateEmail(value) : validateInput(name, value)),
      });

      return {
        ...prvInputs,
        [name]: value,
      };
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (Object.values(errors).every((input) => input === '')) {
      alert('Form submitted!');
      setInputs(initialInputs);
    }
  };

  return (
    <form className={styles.signUpForm} onSubmit={handleSubmit}>
      <div>
        <div className={`${styles.input} ${!!firstNameError && styles.error}`}>
          <input
            autoComplete="off"
            id="firstName"
            name="firstName"
            onChange={({ target }) => handleChange(target)}
            placeholder="First Name"
            type="text"
            value={firstName}
          />
          {
            !!firstNameError
            && <i className="fa-solid fa-circle-exclamation" />
          }
        </div>
        {
          !!firstNameError
          && <em className={styles.message}>{firstNameError}</em>
        }
      </div>
      <div>
        <div className={`${styles.input} ${!!lastNameError && styles.error}`}>
          <input
            autoComplete="off"
            id="lastName"
            name="lastName"
            onChange={({ target }) => handleChange(target)}
            placeholder="Last Name"
            type="text"
            value={lastName}
          />
          {
            !!lastNameError
            && <i className="fa-solid fa-circle-exclamation" />
          }
        </div>
        {
          !!lastNameError
          && <em className={styles.message}>{lastNameError}</em>
        }
      </div>
      <div>
        <div className={`${styles.input} ${!!emailError && styles.error}`}>
          <input
            autoComplete="off"
            id="email"
            name="email"
            onChange={({ target }) => handleChange(target)}
            placeholder="Email Address"
            type="text"
            value={email}
          />
          {
            !!emailError
            && <i className="fa-solid fa-circle-exclamation" />
          }
        </div>
        {
          !!emailError
          && <em className={styles.message}>{emailError}</em>
        }
      </div>
      <div>
        <div className={`${styles.input} ${!!passwordError && styles.error}`}>
          <input
            autoComplete="off"
            id="password"
            name="password"
            onChange={({ target }) => handleChange(target)}
            placeholder="Password"
            type="password"
            value={password}
          />
          {
            !!passwordError
            && <i className="fa-solid fa-circle-exclamation" />
          }
        </div>
        {
          !!passwordError
          && <em className={styles.message}>{passwordError}</em>
        }
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
