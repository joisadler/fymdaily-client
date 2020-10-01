import AwesomeDebouncePromise from 'awesome-debounce-promise';
import {
  getFoods,
  getCustomFoods,
  addCustomFood as createFood,
  updateCustomFood,
} from '../services/food.service';

export function setFoods(foods) {
  return {
    type: 'SET_FOODS',
    foods,
  };
}

export function addFood(newFood) {
  return {
    type: 'ADD_CUSTOM_FOOD',
    newFood,
  };
}

export function updateFood(updatedFood) {
  return {
    type: 'UPDATE_CUSTOM_FOOD',
    updatedFood,
  };
}

export function loadFoods(text, pathname) {
  return async (dispatch) => {
    try {
      const getFoodsDebounced = AwesomeDebouncePromise(getFoods, 500);
      const getCustomFoodsDebounced = AwesomeDebouncePromise(getCustomFoods, 0);
      const foods = pathname === '/custom-foods'
        ? await getCustomFoodsDebounced(text)
        : await getFoodsDebounced(text);
      dispatch(setFoods(foods));
    } catch (err) {
      console.log('FoodActions: err in loadCustomFoods', err);
    }
  };
}

export function addCustomFood(foodData) {
  return async (dispatch) => {
    try {
      const newFood = await createFood(foodData);
      dispatch(addFood(newFood));
    } catch (err) {
      console.log('FoodActions: err in addCustomFood', err);
    }
  };
}

export function updateCustomFoods(foodData) {
  return async (dispatch) => {
    try {
      const updatedFood = await updateCustomFood(foodData);
      dispatch(updateFood(updatedFood));
    } catch (err) {
      console.log('FoodActions: err in updateCustomFoods', err);
    }
  };
}
