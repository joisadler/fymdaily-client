import React from 'react';
import { useLocation } from 'react-router-dom';
import NavButton from './NavButton';

const buttonsData = {
  '/home': [
    { to: '/eaten-foods', icon: ['fas', 'list'] },
    { to: '/add-food', icon: ['fas', 'utensils'] },
    { to: '/menu', icon: ['fas', 'cog'] },
  ],
  '/add-food': [
    { to: '/eaten-foods', icon: ['fas', 'list'] },
    { to: '/home', icon: ['fas', 'home'] },
    { to: '/menu', icon: ['fas', 'cog'] },
  ],
  '/eaten-foods': [
    { to: '/add-food', icon: ['fas', 'utencils'] },
    { to: '/home', icon: ['fas', 'home'] },
    { to: '/menu', icon: ['fas', 'cog'] },
  ],
};

const Navbar = () => {
  const Buttons = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return buttonsData[currentPath]
      .map(b => <NavButton to={b.to} icon={b.icon} />);
  };

  return (
    <nav className="main-navbar">
      <Buttons />
    </nav>
  );
};

export default Navbar;
