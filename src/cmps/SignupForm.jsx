import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useAuth from '../hooks/use-auth';
import { signup } from '../actions/UserActions';

const SignupForm = ({ setCurrentForm }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);

  const doSignup = useAuth(signup);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usernameOrEmail || !password) {
      return setMessage('Please enter username/password');
    }
    const userCreds = { usernameOrEmail, password };
    doSignup(userCreds, isRememberMeChecked);
    setUsernameOrEmail('');
    setPassword('');
  };

  const handleRememberMeChange = () => {
    setIsRememberMeChecked(!isRememberMeChecked);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <p className="message" style={{ color: 'red' }}>{message}</p>
      <fieldset className="credentials">
        <input
          type="text"
          name="UsernameOrEmail"
          value={usernameOrEmail}
          onChange={(e) => {
            setUsernameOrEmail(e.target.value); setMessage('');
          }}
          placeholder="Username or Email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value); setMessage('');
          }}
          placeholder="Password"
        />
      </fieldset>
      <section className="form-options-section">
        <section className="form-submit-section">
          <section className="remember-me-section">
            <input
              type="checkbox"
              id="remember-me"
              defaultChecked={isRememberMeChecked}
              onChange={handleRememberMeChange}
            />
            <label htmlFor="remember-me">
              Remember Me
            </label>
          </section>
          <br />
          <button type="submit" className="signup-button">Sign Up</button>
        </section>
        <section className="other-option-section">
          Already have an account?
          <br />
          <button
            className="login-option"
            type="button"
            onClick={() => { setCurrentForm('login'); }}
          >
            Log In
          </button>
        </section>
      </section>
    </form>
  );
};

SignupForm.propTypes = {
  setCurrentForm: PropTypes.func.isRequired,
};

export default SignupForm;
