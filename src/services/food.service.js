import httpService from './http.service';

// eslint-disable-next-line import/prefer-default-export
export async function getFoods(name) {
  const foods = await httpService.get(`food?name=${name}`);
  return foods;
}

export async function addFood(foodData) {
  const food = await httpService.post('food', foodData);
  return food;
}