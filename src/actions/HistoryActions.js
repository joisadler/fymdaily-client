export function addEatenFood(newFood) {
  return {
    type: 'ADD_EATEN_FOOD',
    newFood,
  };
}

export function setEatenFoods(eatenFoods) {
  return {
    type: 'SET_EATEN_FOODS',
    eatenFoods,
  };
}
