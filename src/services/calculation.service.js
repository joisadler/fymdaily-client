/* eslint-disable max-len */
const physicalActivityRatios = {
  veryLight: 1.2, // Sitting, watching TV, talking, very little to almost no activity.
  light: 1.4, // Typing, teaching, retail work, combined with some walking throughout the day.
  moderate: 1.6, // Jobs that involve some movement, combined with activities such as cycling, tennis, dancing, or weight training for 1-2 hours per day.
  heavy: 1.8, // Heavy manual labor such working on construction site, combined with activities such as football or body building for 2 for 4 hours per day.
  veryHeavy: 2, // A combination of moderate and heavy activity for 8 or more hours per day, plus 2-4 hours of intence training per day.
};

const calorieSurplusRatios = {
  fastWeightLoss: 0.75,
  normalWeightLoss: 0.85,
  weightMaintenance: 1,
  massGain: 1.15,
};

const proteinNeedPerKg = { // per kg of lean body mass!
  fastWeightLoss: 1.6,
  normalWeightLoss: 1.5,
  weightMaintenance: 1.3,
  massGain: 1.5,
};

const caloriesPerGramOfProtein = 4;
const caloriesPerGramOfFat = 9;
const caloriesPerGramOfCarb = 4;

const getNumbers = (user, eatenFoods) => {
  const {
    // _id,
    bodyWeight,
    height,
    gender,
    waistCircumference,
    neckCircumference,
    hipCircumference,
    physicalActivityLevel,
    goal,
  } = user;

  const physicalActivityRatio = physicalActivityRatios[physicalActivityLevel];
  const calorieSurplusRatio = calorieSurplusRatios[goal];
  const bodyFatPercentage = gender === 'male' // US Navy method to calculate body fat percentage
    ? 495 / (1.0324 - 0.19077 * Math.log10(waistCircumference - neckCircumference) + 0.15456 * Math.log10(height)) - 450
    : 495 / (1.29579 - 0.35004 * Math.log10(waistCircumference + hipCircumference - neckCircumference) + 0.22100 * Math.log10(height)) - 450;
  const leanBodyMass = (bodyWeight * (100 - bodyFatPercentage)) / 100;
  const basalMetabolicRate = 370 + (21.6 * leanBodyMass); // Katch-McArdle equation
  const totalEnergyExpenditure = basalMetabolicRate * physicalActivityRatio;
  const dailyCaloriesNeed = totalEnergyExpenditure * calorieSurplusRatio;
  const dailyProteinsNeed = leanBodyMass * proteinNeedPerKg[goal];
  const dailyFatsNeed = (dailyCaloriesNeed * 0.3) / caloriesPerGramOfFat;
  const dailyCarbsNeed = (dailyCaloriesNeed - (dailyProteinsNeed * caloriesPerGramOfProtein) - (dailyFatsNeed * caloriesPerGramOfFat)) / caloriesPerGramOfCarb;

  const currentCalories = eatenFoods
    .reduce((acc, current) => acc
    + (current.calories * current.weight) / 100, 0);
  const currentProteins = eatenFoods
    .reduce((acc, current) => acc + (current.proteins * current.weight) / 100, 0);
  const currentFats = eatenFoods
    .reduce((acc, current) => acc + (current.fats * current.weight) / 100, 0);
  const currentCarbs = eatenFoods
    .reduce((acc, current) => acc + (current.carbs * current.weight) / 100, 0);

  const currentCaloriesRemainder = dailyCaloriesNeed - currentCalories;

  const currentPercentOfDailyCaloriesNeed = (currentCalories
    / dailyCaloriesNeed) * 100;
  const currentPercentOfDailyProteinsNeed = (currentProteins
    / dailyProteinsNeed) * 100;
  const currentPercentOfDailyFatsNeed = (currentFats
    / dailyFatsNeed) * 100;
  const currentPercentOfDailyCarbsNeed = (currentCarbs
    / dailyCarbsNeed) * 100;

  const currentProteinsToCalories = currentProteins * caloriesPerGramOfProtein;
  const currentFatsToCalories = currentFats * caloriesPerGramOfFat;
  const currentCarbsToCalories = currentCarbs * caloriesPerGramOfCarb;
  const percentageOfProteinsInDailyCaloriesNeed = (currentProteinsToCalories
      / dailyCaloriesNeed) * 100;
  const percentageOfFatsInDailyCaloriesNeed = (currentFatsToCalories
      / dailyCaloriesNeed) * 100;
  const percentageOfCarbsInDailyCaloriesNeed = (currentCarbsToCalories
      / dailyCaloriesNeed) * 100;
  const percentageOfEmptyCaloriesInDailyCaloriesNeed = (((currentCalories
      - (currentProteinsToCalories
        + currentFatsToCalories
        + currentCarbsToCalories))
        / dailyCaloriesNeed) * 100) > 0
    ? (((currentCalories
        - (currentProteinsToCalories
          + currentFatsToCalories
          + currentCarbsToCalories))
          / dailyCaloriesNeed) * 100)
    : 0;
  const percentageOfCaloriesRemainderInDailyCaloriesNeed = 100
    - percentageOfProteinsInDailyCaloriesNeed
    - percentageOfFatsInDailyCaloriesNeed
    - percentageOfCarbsInDailyCaloriesNeed
    - percentageOfEmptyCaloriesInDailyCaloriesNeed;

  const percentOfProteinsInCurrentAmountOfCalories = (currentProteinsToCalories
      / currentCalories) * 100;
  const percentOfFatsInCurrentAmountOfCalories = (currentFatsToCalories
      / currentCalories) * 100;
  const percentOfCarbsInCurrentAmountOfCalories = (currentCarbsToCalories
      / currentCalories) * 100;
  const percentOfEmptyCaloriesInCurrentAmountOfCalories = 100
    - percentOfProteinsInCurrentAmountOfCalories
    - percentOfFatsInCurrentAmountOfCalories
    - percentOfCarbsInCurrentAmountOfCalories;

  return {
    dailyCaloriesNeed: Math.round(dailyCaloriesNeed),
    dailyProteinsNeed: Math.round(dailyProteinsNeed),
    dailyFatsNeed: Math.round(dailyFatsNeed),
    dailyCarbsNeed: Math.round(dailyCarbsNeed),
    currentCalories: Math.round(currentCalories),
    currentProteins: Math.round(currentProteins),
    currentFats: Math.round(currentFats),
    currentCarbs: Math.round(currentCarbs),
    currentCaloriesRemainder: Math.round(currentCaloriesRemainder),
    currentPercentOfDailyCaloriesNeed: Math.round(currentPercentOfDailyCaloriesNeed),
    currentPercentOfDailyProteinsNeed: Math.round(currentPercentOfDailyProteinsNeed),
    currentPercentOfDailyFatsNeed: Math.round(currentPercentOfDailyFatsNeed),
    currentPercentOfDailyCarbsNeed: Math.round(currentPercentOfDailyCarbsNeed),
    percentageOfProteinsInDailyCaloriesNeed: Math.round(percentageOfProteinsInDailyCaloriesNeed),
    percentageOfFatsInDailyCaloriesNeed: Math.round(percentageOfFatsInDailyCaloriesNeed),
    percentageOfCarbsInDailyCaloriesNeed: Math.round(percentageOfCarbsInDailyCaloriesNeed),
    percentageOfCaloriesRemainderInDailyCaloriesNeed: Math.round(percentageOfCaloriesRemainderInDailyCaloriesNeed),
    percentageOfEmptyCaloriesInDailyCaloriesNeed: Math.round(percentageOfEmptyCaloriesInDailyCaloriesNeed),
    percentOfProteinsInCurrentAmountOfCalories: Math.round(percentOfProteinsInCurrentAmountOfCalories),
    percentOfFatsInCurrentAmountOfCalories: Math.round(percentOfFatsInCurrentAmountOfCalories),
    percentOfCarbsInCurrentAmountOfCalories: Math.round(percentOfCarbsInCurrentAmountOfCalories),
    percentOfEmptyCaloriesInCurrentAmountOfCalories: Math.round(percentOfEmptyCaloriesInCurrentAmountOfCalories),
  };
};

export default getNumbers;
