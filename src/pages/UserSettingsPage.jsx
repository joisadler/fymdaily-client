import React from 'react';
// import { useSelector } from 'react-redux';
import Navbar from '../cmps/Navbar';

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
