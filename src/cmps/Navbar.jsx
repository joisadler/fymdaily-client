import React from 'react';
import { useLocation } from 'react-router-dom';
import NavButton from './NavButton';

const defaultButtonsData = [
  { to: '/eaten-foods', icon: ['fas', 'list'], key: 1 },
  { to: '/add-food', icon: ['fas', 'utensils'], key: 2 },
  { to: '/home', icon: ['fas', 'home'], key: 3 },
];

const buttonsData = {
  '/account-settings': defaultButtonsData,
  '/preferences': defaultButtonsData,
  '/statistics': defaultButtonsData,
  '/user-settings': defaultButtonsData,
  '/home': [
    { to: '/eaten-foods', icon: ['fas', 'list'], key: 1 },
    { to: '/add-food', icon: ['fas', 'utensils'], key: 2 },
    { to: '/menu', icon: ['fas', 'cog'], key: 3 },
  ],
  '/add-food': [
    { to: '/eaten-foods', icon: ['fas', 'list'], key: 1 },
    { to: '/home', icon: ['fas', 'home'], key: 2 },
    // { to: '/menu', icon: ['fas', 'cog'], key: 3 },
    { to: '/create-food', icon: ['fas', 'folder-plus'], key: 3 },

  ],
  '/eaten-foods': [
    { to: '/add-food', icon: ['fas', 'utensils'], key: 1 },
    { to: '/home', icon: ['fas', 'home'], key: 2 },
    { to: '/menu', icon: ['fas', 'cog'], key: 3 },
  ],
};

const Navbar = () => {
  const Buttons = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return buttonsData[currentPath]
      .map(b => <NavButton to={b.to} icon={b.icon} key={b.key} />);
  };

  return (
    <nav className="main-navbar">
      <Buttons />
    </nav>
  );
};

export default Navbar;
