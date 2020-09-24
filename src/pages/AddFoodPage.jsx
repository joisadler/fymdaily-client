import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAsync } from 'react-async-hook';
import { getFoods } from '../services/food.service';
import useSearchFood from '../hooks/useSearchFood';
import Navbar from '../cmps/Navbar';

const _getRandomStr = () => Math.random()
  .toString(36)
  .substring(2, 15)
  + Math.random()
    .toString(36)
    .substring(2, 15);

const AddFoodPage = () => {
  // const [inputText, setInputText] = useState('');
  const { inputText, setInputText, search } = useSearchFood();

  // const foods = useAsync(getFoods, [inputText]).result;
  console.log(search.result)

  const handleSearchInput = ({ value }) => {
    setInputText(value);
  };

  return (
    <>
      <main className="page">
        <h1>Add eaten food</h1>
        {search.loading && <div>...</div>}
        {search.error && <div>Error: {search.error.message}</div>}
        {search.result && (
          <div>
            <div>Results: {search.result.length}</div>
            <ul>
              {search.result.map(food => (
                <li key={_getRandomStr() + food.name}>{food.name}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="options-container">
          <input
            type="search"
            className="add-food-search"
            placeholder="Search food"
            value={inputText}
            onChange={(e) => { handleSearchInput(e.target); }}
          />
        </div>
      </main>
      <Navbar />
    </>
  );
};

export default AddFoodPage;
