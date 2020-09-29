import { useState } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import useConstant from 'use-constant';
import { useAsync } from 'react-async-hook';
import { useLocation } from 'react-router-dom';
import { getFoods, getCustomFoods } from '../services/food.service';

export default () => {
  const { pathname } = useLocation();
  const [inputText, setInputText] = useState('');

  const debouncedGetFoods = useConstant(
    () => AwesomeDebouncePromise(getFoods, 500),
  );

  const debouncedGetCustomFoods = useConstant(
    () => AwesomeDebouncePromise(getCustomFoods, 0),
  );

  const search = useAsync(
    async (text) => {
      if (text.length === 0) {
        return [];
      }
      return pathname === '/custom-foods'
        ? debouncedGetCustomFoods(text)
        : debouncedGetFoods(text);
    },
    [inputText],
  );

  return {
    inputText,
    setInputText,
    search,
  };
};
