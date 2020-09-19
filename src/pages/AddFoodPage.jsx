import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../cmps/Navbar';

const AddFoodPage = () => {
  const user = useSelector(state => state.user.loggedInUser);
  return (
    <>
      <main className="page">
        <h1>ADD FOOD PAGE</h1>
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>
      </main>
      <Navbar />
    </>
  );
};

export default AddFoodPage;
