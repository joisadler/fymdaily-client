import { getEatenFoods, addEatenFood as addFood, updateEatenFood } from '../services/history.service';

export function setEatenFoods(eatenFoods) {
  return {
    type: 'SET_EATEN_FOODS',
    eatenFoods,
  };
}

export function loadEatenFoods(userId) {
  return async (dispatch) => {
    try {
      const eatenFoods = await getEatenFoods(userId);
      dispatch(setEatenFoods(eatenFoods));
    } catch (err) {
      console.log('ReviewActions: err in loadEatenFoods', err);
    }
  };
}

export function addEatenFood(newFood) {
  return async (dispatch) => {
    try {
      const updatedFoods = await addFood(newFood);
      dispatch(setEatenFoods(updatedFoods));
    } catch (err) {
      console.log('ReviewActions: err in addEatenFood', err);
    }
  };
}

export function updateEatenFoods(updatedFood) {
  return async (dispatch) => {
    try {
      const updatedFoods = await updateEatenFood(updatedFood);
      dispatch(setEatenFoods(updatedFoods));
    } catch (err) {
      console.log('ReviewActions: err in updateEatenFoods', err);
    }
  };
}
