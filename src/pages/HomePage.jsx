import React from 'react';
// import { useSelector } from 'react-redux';
import CaloriesChart from '../cmps/CaloriesChart';
import Navbar from '../cmps/Navbar';

const HomePage = () => {
  // const user = useSelector(state => state.user.loggedInUser);
  return (
    <>
      <main className="page">
        <CaloriesChart />
        <section className="macros-container">
          <div className="macros-line">
            <div className="macros-image-container proteins-image-container" />
            <div className="macros-progress-bar">
              <div className="percent-container proteins-percent-container" />
              <div className="macros-progress-bar-inner proteins-progress-bar-inner" />
            </div>
          </div>
          <div className="macros-line">
            <div className="macros-image-container fats-image-container" />
            <div className="macros-progress-bar">
              <div className="percent-container fats-percent-container" />
              <div className="macros-progress-bar-inner fats-progress-bar-inner" />
            </div>
          </div>
          <div className="macros-line">
            <div className="macros-image-container carbs-image-container" />
            <div className="macros-progress-bar">
              <div className="percent-container carbs-percent-container" />
              <div className="macros-progress-bar-inner carbs-progress-bar-inner" />
            </div>
          </div>
        </section>
      </main>
      <Navbar />
    </>
  );
};

export default HomePage;
