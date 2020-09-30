import React, { useRef, useEffect } from 'react';
import useFoodSearch from '../hooks/useFoodSearch';
import { getRandomStr } from '../services/util.servise';
import Navbar from '../cmps/Navbar';
import AddEatenFoodCard from '../cmps/AddEatenFoodCard';

const AddEatenFoodPage = () => {
  const {
    inputText,
    setInputText,
    foods,
  } = useFoodSearch();

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
          <h1 className="page-title">Add eaten food</h1>
          <input
            type="search"
            className="add-eaten-food-search"
            placeholder="Search food"
            value={inputText}
            ref={searchInput}
            onChange={(e) => { handleSearchInput(e.target); }}
          />
        </header>
        <ul className="add-eaten-food-cards">
          {foods
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(food => (
              <AddEatenFoodCard key={getRandomStr() + food.name} food={food} />
            ))}
        </ul>
      </main>
      <Navbar />
    </>
  );
};

export default AddEatenFoodPage;
