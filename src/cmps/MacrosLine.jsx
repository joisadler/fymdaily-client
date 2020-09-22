import React from 'react';
import PropTypes from 'prop-types';

const MacrosLine = ({ numbers, nutrient }) => {
  const Nutrient = `${nutrient[0].toUpperCase()}${nutrient.slice(1)}`;
  const percent = numbers[`percentageOf${Nutrient}InDailyCaloriesNeed`];

  return (
    <div className="macros-line">
      <div className={`macros-image-container ${nutrient}-image-container`} />
      <div className="macros-progress-bar">
        <div className={`percent-container ${nutrient}-percent-container`}>
          {percent}
          %
        </div>
        <div
          className={`macros-progress-bar-inner ${nutrient}-progress-bar-inner`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

MacrosLine.propTypes = {
  numbers: PropTypes.objectOf(PropTypes.number).isRequired,
  nutrient: PropTypes.string.isRequired,
};

export default MacrosLine;
