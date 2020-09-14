import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/UserActions';

const LoginForm = ({ setCurrentForm }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usernameOrEmail || !password) {
      return setMessage('Please enter username/password');
    }
    const userCreds = { usernameOrEmail, password };
    dispatch(login(userCreds));
    setUsernameOrEmail('');
    setPassword('');
  };

  // doLogi = async (ev) => {
  //   ev.preventDefault();
  //   const { email, password } = this.state.loginCred;
  //   if (!email || !password) {
  //     return this.setState({ msg: 'Please enter user/password' });
  //   }
  //   const userCreds = { email, password };
  //   this.props.login(userCreds);
  //   this.setState({ loginCred: { email: '', password: '' } });
  // };

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
