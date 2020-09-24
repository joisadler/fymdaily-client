import { useState } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import useConstant from 'use-constant';
import { useAsync } from 'react-async-hook';
import { getFoods } from '../services/food.service';

export default () => {
  const [inputText, setInputText] = useState('');

  const debouncedSearchStarwarsHero = useConstant(
    () => AwesomeDebouncePromise(getFoods, 500),
  );

  const search = useAsync(
    async (text) => {
      if (text.length === 0) {
        return [];
      }
      return debouncedSearchStarwarsHero(text);
    },
    [inputText],
  );

  return {
    inputText,
    setInputText,
    search,
  };
};
