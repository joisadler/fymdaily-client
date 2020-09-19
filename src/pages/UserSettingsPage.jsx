import React from 'react';
import { useSelector } from 'react-redux';

const UserSettingsPage = () => {
  const user = useSelector(state => state.user.loggedInUser);
  return (
    <div className="page">
      <main className="user-settings-page">
        <h1>USER SETTINGS PAGE</h1>
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>
      </main>
    </div>
  );
};

export default UserSettingsPage;
