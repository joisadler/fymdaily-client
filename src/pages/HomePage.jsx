import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadEatenFoods } from '../actions/HistoryActions';
import getNumbers from '../services/calculation.service';
import CaloriesChart from '../components/CaloriesChart';
import Navbar from '../components/Navbar';
import MacrosContainer from '../components/MacrosContainer';

const HomePage = () => {
  const [isAlternateContentShown, setIsAlternateContentShown] = useState(false);
  const toggleAlternateContent = () => {
    setIsAlternateContentShown(!isAlternateContentShown);
  };

  const user = useSelector(state => state.user.loggedInUser);
  const eatenFoods = useSelector(state => state.history.eatenFoods);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadEatenFoods(user._id));
  }, [user._id, dispatch]);

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
