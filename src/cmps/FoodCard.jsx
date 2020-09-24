import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const FoodCard = ({ food }) => {
  const {
    name,
    brand,
  } = food;
  const calories = Math.round(+food.calories);
  const proteins = Math.round(+food.proteins);
  const fats = Math.round(+food.fats);
  const carbs = Math.round(+food.carbs);

  return (
    <li className="food-card">
      <h2 className="food-card-title">
        {`${name}, ${brand}`}
      </h2>
      <p className="food-card-info">
        {`Calories: ${calories} | Proteins: ${proteins} | Fats: ${fats} | Carbs: ${carbs}`}
      </p>
    </li>
  );
};

FoodCard.propTypes = {
  food: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FoodCard;
