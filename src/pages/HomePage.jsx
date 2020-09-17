import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const user = useSelector(state => state.user.loggedInUser);
  return (
    <section className="homepage">
      <pre>
        {JSON.stringify(user)}
      </pre>
    </section>
  );
};

export default HomePage;
