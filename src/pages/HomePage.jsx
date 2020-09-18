import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const user = useSelector(state => state.user.loggedInUser);
  return (
    <section className="homepage">
      <h1>HOMEPAGE</h1>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </section>
  );
};

export default HomePage;
