import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SignupForm = (props) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setCurrentForm } = props;

  const doSignup = (e) => {
    e.preventDefault();
    alert(`Submitting Name ${usernameOrEmail},
    Password: ${password}`);
  };

  return (
    <div className="form-container">
      <form onSubmit={doSignup}>
        <h2 className="form-caption">Signup:</h2>
        <input
          type="text"
          name="UsernameOrEmail"
          value={usernameOrEmail}
          onChange={e => setUsernameOrEmail(e.target.value)}
          placeholder="Username or Email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account?
        <button
          type="button"
          onClick={() => { setCurrentForm('login'); }}
        >
          Log In
        </button>
      </p>
    </div>
  );
};

SignupForm.propTypes = {
  setCurrentForm: PropTypes.func.isRequired,
};

export default SignupForm;
