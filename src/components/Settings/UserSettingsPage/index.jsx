import React from 'react';
// import { useSelector } from 'react-redux';
import Navbar from '../../Navigation/Navbar';

// eslint-disable-next-line arrow-body-style
const UserSettingsPage = () => {
  // const user = useSelector(state => state.user.loggedInUser);

  return (
    <>
      <main className="page">
        User Settings Page
      </main>
      <Navbar />
    </>
  );
};

export default UserSettingsPage;
