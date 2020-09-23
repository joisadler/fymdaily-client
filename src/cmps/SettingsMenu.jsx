import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import menuActions from '../actions/SettingsMenuActions';
import { logout } from '../actions/UserActions';
import Footer from './Footer';

const SettingsMenu = () => {
  const isShown = useSelector(state => state.settingsMenu.isShown);
  const user = useSelector(state => state.user.loggedInUser);
  const { username } = user;
  const dispatch = useDispatch();
  const history = useHistory();

  const hideMenu = () => {
    dispatch(menuActions.hideMenu());
  };

  const onLogOut = () => {
    dispatch(logout());
    hideMenu();
    history.push('/');
  };

  return (
    <aside
      className={`settings-menu ${isShown ? 'settings-menu-shown' : ''}`}
    >
      <header className="settings-menu-header">
        <h2 className="settings-menu-username">{username}</h2>
        <button
          type="button"
          onClick={onLogOut}
        >
          Log Out
        </button>
      </header>
      <nav className="settins-menu-nav">
      </nav>
      <Footer />
    </aside>
  );
};

export default SettingsMenu;
