import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAsync, useAsyncCallback } from 'react-async-hook';
import { getEatenFoods, addEatenFood } from '../services/history.service';
import Navbar from '../cmps/Navbar';

const EatenFoodsPage = () => {
  const user = useSelector(state => state.user.loggedInUser);
  const [eatenFoods, setEatenFoods] = useState([]);
  console.log(eatenFoods)

  const foodsData = useAsync(getEatenFoods, [user._id]).result;
  useEffect(() => {
    setEatenFoods(foodsData);
  }, [foodsData]);

  const onAddFood = async () => {
    const food = {
      "name": "Хлеб каль мехита мелеа",
      "brand": "דגנית עין בר",
      "weight": 1000,
      "calories": 166,
      "proteins": 12.9,
      "fats": 3.1,
      "carbs": 21.6
    };
    const updatedFoods = await addEatenFood(food);
    console.log('updatedFoods from line 28:', updatedFoods)
    setEatenFoods(updatedFoods);
  };
  const asyncAddFood = useAsyncCallback(onAddFood);

  return (
    <>
      <main className="page">
        <h1>EATEN FOODS PAGE</h1>
        <button
          type="button"
          onClick={asyncAddFood.execute}
        >
          Add some food
        </button>
      </main>
      <Navbar />
    </>
  );
};

export default EatenFoodsPage;
