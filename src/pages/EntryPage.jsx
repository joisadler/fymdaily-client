import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../cmps/LoginForm';
import SignupForm from '../cmps/SignupForm';

export default () => {
  const user = useSelector(state => state.user.loggedInUser);
  const [currentForm, setCurrentForm] = useState('login');

  return (
    <div className="page" onLoad={console.log('user: ', user)}>
      <h1>Entry Page</h1>
      {currentForm === 'login' ? <LoginForm setCurrentForm={setCurrentForm} /> : <SignupForm setCurrentForm={setCurrentForm} />}
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
