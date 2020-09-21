import httpService from './http.service';

// get todays history of the user
export async function getHistoryEntry(userId) {
  const date = new Date().toLocaleDateString('ru-RU');
  const entry = await httpService.get(`history/${userId}?date=${date}`);
  return entry;
}

export async function getEatenFoods(userId) {
  const history = await getHistoryEntry(userId);
  return history.eaten_foods;
}

export async function addEatenFood(food) {
  const date = new Date().toLocaleDateString('ru-RU');
  const data = { date, food };
  const updatedEntry = await httpService.post('history/food', data);
  return updatedEntry.eaten_foods;
}

// export default {
//   getHistoryEntry,
//   getEatenFoods,
// };
