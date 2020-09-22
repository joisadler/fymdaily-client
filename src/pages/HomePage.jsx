import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAsync } from 'react-async-hook';
import { getEatenFoods } from '../services/history.service';
import getNumbers from '../services/calculation.service';
import CaloriesChart from '../cmps/CaloriesChart';
import Navbar from '../cmps/Navbar';
import MacrosContainer from '../cmps/MacrosContainer';

const HomePage = () => {
  const [isAlternateContentShown, setIsAlternateContentShown] = useState(false);
  const toggleAlternateContent = () => {
    setIsAlternateContentShown(!isAlternateContentShown);
  };

  const user = useSelector(state => state.user.loggedInUser);
  const eatenFoods = useAsync(getEatenFoods, [user._id]).result;
  const numbers = eatenFoods ? getNumbers(user, eatenFoods) : {};

  return (
    <>
      <main className="page">
        <CaloriesChart
          numbers={numbers}
          isAlternateContentShown={isAlternateContentShown}
          toggleAlternateContent={toggleAlternateContent}
        />
        <MacrosContainer numbers={numbers} />
      </main>
      <Navbar />
    </>
  );
};

export default HomePage;
