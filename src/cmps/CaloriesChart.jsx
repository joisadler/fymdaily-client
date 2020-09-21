import React, { useState, useRef, useLayoutEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import CaloriesChartContent from './CaloriesChartContent';

const CaloriesChart = ({ numbers }) => {
  const {
    dailyCaloriesNeed,
    dailyProteinsNeed,
    dailyFatsNeed,
    dailyCarbsNeed,
    currentCalories,
    currentProteins,
    currentFats,
    currentCarbs,
    currentCaloriesRemainder,
    currentPercentOfDailyCaloriesNeed,
    currentPercentOfDailyProteinsNeed,
    currentPercentOfDailyFatsNeed,
    currentPercentOfDailyCarbsNeed,
    percentageOfProteinsInDailyCaloriesNeed,
    percentageOfFatsInDailyCaloriesNeed,
    percentageOfCarbsInDailyCaloriesNeed,
    percentageOfCaloriesRemainderInDailyCaloriesNeed,
    percentageOfEmptyCaloriesInDailyCaloriesNeed,
    percentOfProteinsInCurrentAmountOfCalories,
    percentOfFatsInCurrentAmountOfCalories,
    percentOfCarbsInCurrentAmountOfCalories,
    percentOfEmptyCaloriesInCurrentAmountOfCalories,
  } = numbers;
  const data = {
    labels: ['Proteins', 'Fats', 'Carbs', 'Empty Calories', 'Still need to consume'],
    datasets: [{
      data: [
        percentageOfProteinsInDailyCaloriesNeed,
        percentageOfFatsInDailyCaloriesNeed,
        percentageOfCarbsInDailyCaloriesNeed,
        percentageOfEmptyCaloriesInDailyCaloriesNeed,
        percentageOfCaloriesRemainderInDailyCaloriesNeed,
      ],

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
    <article className="calories-container" ref={chartRef}>
      <Doughnut
        className="calories-chart"
        data={data}
        options={options}
      />
      <div
        className="calories-chart-inner"
        style={{
          width: innerSize,
          height: innerSize,
        }}
      >
        <CaloriesChartContent numbers={numbers} />
      </div>
    </article>
  );
};

export default CaloriesChart;
