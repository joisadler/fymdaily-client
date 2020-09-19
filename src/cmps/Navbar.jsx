import React from 'react';
import { useLocation } from 'react-router-dom';
import NavButton from './NavButton';

const buttonsData = {
  '/home': [
    { to: '/eaten-foods', icon: ['fas', 'list'], key: 1 },
    { to: '/add-food', icon: ['fas', 'utensils'], key: 2 },
    { to: '/menu', icon: ['fas', 'cog'], key: 3 },
  ],
  '/add-food': [
    { to: '/eaten-foods', icon: ['fas', 'list'], key: 1 },
    { to: '/home', icon: ['fas', 'home'], key: 2 },
    { to: '/menu', icon: ['fas', 'cog'], key: 3 },
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
