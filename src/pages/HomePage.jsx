import React, { useState, useRef, useLayoutEffect } from 'react';
// import { useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import Navbar from '../cmps/Navbar';

const HomePage = () => {
  // const user = useSelector(state => state.user.loggedInUser);
  const data = {
    labels: ['Proteins', 'Fats', 'Carbs', 'Empty calories', 'Still need to consume'],
    datasets: [{
      data: [10, 20, 30, 5, 35],
      backgroundColor: [
        '#109618',
        '#ff9900',
        '#990099',
        '#fff',
        '#f2f2f2',
      ],
      borderColor: '#000',
      borderWidth: 1,
    }],
  };
  const options = {
    maintainAspectRatio: false,
    cutoutPercentage: 80,
    legend: {
      display: false,
    },
  };

  const chartRef = useRef(null);
  const [innerSize, setInnerSize] = useState(-1);

  const setSize = () => {
    if (chartRef.current) {
      const newSize = (
        window
          .getComputedStyle(chartRef.current)
          .height
          .slice(0, -2)
          * 0.8
      );
      setInnerSize(newSize);
    }
  };

  useLayoutEffect(() => {
    setSize();
    window.addEventListener('resize', setSize);
    return () => {
      window.removeEventListener('resize', setSize);
    };
  }, [innerSize]);

  return (
    <>
      <main className="page">
        <article className="calories-container" ref={chartRef}>
          <Doughnut
            className="calories-chart"
            data={data}
            options={options}
          />
          <div className="inner" style={{ width: innerSize, height: innerSize }}>Width is: {innerSize}</div>
          {/* <div className="calories-chart">
            <div className="calories-chart-content">
              <p className="calories-headline">You still need to consume</p>
              <p className="calories-number">&nbsp;</p>
              <p className="calories-subheadline">calories to fit your daily need</p>
            </div>
            <div className="alternative-calories-chart-content">
              <p className="alternative-calories-chart-content-headline">calories:</p>
              <p className="alternative-calories-chart-content-number" />
              <p className="alternative-calories-chart-content-percent" />
            </div>
          </div> */}
        </article>
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
