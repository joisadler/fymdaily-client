import React from 'react';
import PropTypes from 'prop-types';
import MacrosLine from './MacrosLine';

// eslint-disable-next-line arrow-body-style
const MacrosContainer = ({ numbers }) => {
  return (
    <section className="macros-container">
      {/* <div className="macros-line">
        <div className="macros-image-container proteins-image-container" />
        <div className="macros-progress-bar">
          <div className="percent-container proteins-percent-container" />
          <div className="macros-progress-bar-inner proteins-progress-bar-inner" />
        </div>
      </div> */}
      <MacrosLine numbers={numbers} nutrient="proteins" />
      <MacrosLine numbers={numbers} nutrient="fats" />
      <MacrosLine numbers={numbers} nutrient="carbs" />
      {/* <div className="macros-line">
        <div className="macros-image-container fats-image-container" />
        <div className="macros-progress-bar">
          <div className="percent-container fats-percent-container" />
          <div className="macros-progress-bar-inner fats-progress-bar-inner" />
        </div>
      </div>
      <div className="macros-line">
        <div className="macros-image-container carbs-image-container" />
        <div className="macros-progress-bar">
          <div className="percent-container carbs-percent-container" />
          <div className="macros-progress-bar-inner carbs-progress-bar-inner" />
        </div>
      </div> */}
    </section>
  );
};

MacrosContainer.propTypes = {
  numbers: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default MacrosContainer;
