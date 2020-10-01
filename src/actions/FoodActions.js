import AwesomeDebouncePromise from 'awesome-debounce-promise';
import {
  getFoods,
  getCustomFoods,
  addCustomFood as createFood,
  updateCustomFood,
  deleteCustomFood as deleteFood,
} from '../services/food.service';

function _setFoods(foods) {
  return {
    type: 'SET_FOODS',
    foods,
  };
}

function _addFood(newFood) {
  return {
    type: 'ADD_CUSTOM_FOOD',
    newFood,
  };
}

function _deleteFood(foodId) {
  return {
    type: 'DELETE_CUSTOM_FOOD',
    foodId,
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
      dispatch(_setFoods(foods));
    } catch (err) {
      console.log('FoodActions: err in loadCustomFoods', err);
    }
  };
}

export function addCustomFood(foodData) {
  return async (dispatch) => {
    try {
      const newFood = await createFood(foodData);
      dispatch(_addFood(newFood));
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

export function deleteCustomFood(foodId) {
  return async (dispatch) => {
    try {
      await deleteFood(foodId);
      dispatch(_deleteFood(foodId));
    } catch (err) {
      console.log('FoodActions: err in deleteCustomFood', err);
    }
  };
}
