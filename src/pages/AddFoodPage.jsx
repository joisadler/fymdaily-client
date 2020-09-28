import React, { useRef, useEffect } from 'react';
import useSearchFood from '../hooks/useSearchFood';
import { getRandomStr } from '../services/util.servise';
import Navbar from '../cmps/Navbar';
import AddFoodCard from '../cmps/AddFoodCard';

const AddFoodPage = () => {
  const { inputText, setInputText, search } = useSearchFood();

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
            className="add-food-search"
            placeholder="Search food"
            value={inputText}
            ref={searchInput}
            onChange={(e) => { handleSearchInput(e.target); }}
          />
        </header>
        <ul className="add-food-cards">
          {search.loading && <p>Loading...</p>}
          {search.result && (
            search.result.map(food => (
              <AddFoodCard key={getRandomStr() + food.name} food={food} />
            ))
          )}
        </ul>
      </main>
      <Navbar />
    </>
  );
};

export default AddFoodPage;
