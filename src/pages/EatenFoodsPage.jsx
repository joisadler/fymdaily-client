import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../cmps/Navbar';

const EatenFoodsPage = () => {
  const user = useSelector(state => state.user.loggedInUser);
  return (
    <>
      <main className="page">
        <h1>EATEN FOODS PAGE</h1>
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>
      </main>
      <Navbar />
    </>
  );
};

export default EatenFoodsPage;
