/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../Navigation/Navbar';

const UserSettingsPage = () => {
  const user = useSelector(state => state.user.loggedInUser);
  console.log(user)
  const {
    username,
    weight,
    bodyWeight,
    gender,
    hipCircumference,
    waistCircumference,
    neckCircumference,
    physicalActivityLevel,
    goal,
  } = user;
  const isUserInfoSet = !!user.height;

  return (
    <>
      <main className="page">
        <header>
          <h1 className="page-title">
            { isUserInfoSet ? `Hey, ${username}!` : `Welcome, ${username}!`}
          </h1>
          <h2 className="user-settings-page-subtitle">
            { isUserInfoSet
              ? 'We advise you to update this data at least once a month (this is important for the correct work with your weight):'
              : 'Please enter the following data (this is necessary for the application to work correctly):'}
          </h2>
        </header>
      </main>
      {isUserInfoSet && <Navbar />}
    </>
  );
};

export default UserSettingsPage;
