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
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="form-caption">Login:</h2>
        <p className="message" style={{ color: 'red' }}>{message}</p>
        <input
          type="text"
          name="UsernameOrEmail"
          value={usernameOrEmail}
          onChange={(e) => { setUsernameOrEmail(e.target.value); setMessage(''); }}
          placeholder="Username or Email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setMessage(''); }}
          placeholder="Password"
        />
        <br />
        <label htmlFor="remember-me">
          Remember me
        </label>
        <input
          type="checkbox"
          id="remember-me"
          defaultChecked={isRememberMeChecked}
          onChange={handleRememberMeChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don&rsquo;t have an account?
        <button
          type="button"
          onClick={() => { setCurrentForm('signup'); }}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

LoginForm.propTypes = {
  setCurrentForm: PropTypes.func.isRequired,
};

export default LoginForm;
