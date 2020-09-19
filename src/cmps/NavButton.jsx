import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import history from '../history';
import MenuActions from '../actions/SettingsMenuActions';

const NavButton = ({ to, icon }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    if (to === '/menu') {
      return dispatch(MenuActions.toggleMenu());
    }
    history.push(to);
  };
  return (
    <button
      type="button"
      className="nav-button"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={icon} className="nav-button-icon" />
    </button>
  );
};

NavButton.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavButton;
