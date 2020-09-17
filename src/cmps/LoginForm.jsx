import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useAuth from '../hooks/use-auth';
import { login } from '../actions/UserActions';

const LoginForm = ({ setCurrentForm }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);

  const doLogin = useAuth(login);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usernameOrEmail || !password) {
      return setMessage('Please enter username/password');
    }
    const userCreds = { usernameOrEmail, password };
    doLogin(userCreds, isRememberMeChecked);
    setUsernameOrEmail('');
    setPassword('');
  };

  const handleRememberMeChange = () => {
    setIsRememberMeChecked(!isRememberMeChecked);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="login-button">Log In</button>
        </section>
        <section className="other-option-section">
          Don&rsquo;t have an account?
          <br />
          <button
            className="signup-option"
            type="button"
            onClick={() => { setCurrentForm('signup'); }}
          >
            Sign Up
          </button>
        </section>
      </section>
    </form>
  );
};

LoginForm.propTypes = {
  setCurrentForm: PropTypes.func.isRequired,
};

export default LoginForm;
