import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const user = useSelector(state => state.user.loggedInUser);
  return (
    <div className="page">
      <main className="home-page">
        <h1>HOMEPAGE</h1>
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>
      </main>
    </div>
  );
};

export default HomePage;
