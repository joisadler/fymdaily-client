import React, { useState } from 'react';
import LoginForm from '../cmps/LoginForm';
import SignupForm from '../cmps/SignupForm';
import Footer from '../cmps/Footer';

export default () => {
  const [currentForm, setCurrentForm] = useState('login');

  return (
    <div className="page">
      <main className="entry-page-main">
        <h1 className="app-description">
          <em>FYMdaily</em>
          &nbsp;– simple and minimalistic calorie/macronutrient tracker. Sign up today and start Fit Your Macros daily!
        </h1>
        <div className="form-container">
          {
            currentForm === 'login'
              ? <LoginForm setCurrentForm={setCurrentForm} />
              : <SignupForm setCurrentForm={setCurrentForm} />
          }
        </div>
      </main>
      <Footer />
    </div>
  );
};
