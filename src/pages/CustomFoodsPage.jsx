import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loadFoods } from '../actions/FoodActions';
import { getRandomStr } from '../services/util.servise';
import Navbar from '../cmps/Navbar';
import CustomFoodCard from '../cmps/CustomFoodCard';

const CustomFoodsPage = () => {
  const foods = useSelector(state => state.food.foods);

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [inputText, setInputText] = useState('');
  useEffect(() => {
    dispatch(loadFoods(inputText, pathname));
  }, [inputText, dispatch, pathname]);

  const searchInput = useRef(null);
  useEffect(() => {
    searchInput.current.focus();
  }, []);

  const handleSearchInput = ({ value }) => {
    setInputText(value);
  };

  return (
    <>
      <main className="page">
        <header className="options-container">
          <h1 className="page-title">Custom Foods</h1>
          <input
            type="search"
            className="custom-foods-search"
            placeholder="Search food"
            value={inputText}
            ref={searchInput}
            onChange={(e) => { handleSearchInput(e.target); }}
          />
        </header>
        <ul className="custom-foods-cards">
          {foods
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(food => (
              <CustomFoodCard key={getRandomStr() + food.name} food={food} />
            ))}
        </ul>
      </main>
      <Navbar />
    </>
  );
};

export default CustomFoodsPage;
