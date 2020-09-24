import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

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

  Modal.setAppElement('#root');
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    const code = e.charCode || e.keyCode;
    if (code === 13) {
      openModal();
    }
  };

  return (
    <li
      className="add-food-card"
      onClick={openModal}
      onKeyDown={(e) => { handleKeyDown(e); }}
      role="option"
      aria-selected="false"
    >
      <h2 className="add-food-card-title">
        {`${name}${brand !== '' ? `, ${brand}` : ''}`}
      </h2>
      <p className="add-food-card-info">
        {`Calories: ${calories} | Proteins: ${proteins} | Fats: ${fats} | Carbs: ${carbs}`}
      </p>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add food"
        className="add-food-modal"
      >
        <button type="button" onClick={e => closeModal(e)}>&times;</button>
        <h2 className="add-food-modal-title">
          {`${name}${brand !== '' ? `, ${brand}` : ''}`}
        </h2>
        <div className="add-food-modal-info">
          <p>
            {`Calories: ${calories}`}
          </p>
          <p>
            {`Proteins: ${proteins}`}
          </p>
          <p>
            {`Fats: ${fats}`}
          </p>
          <p>
            {`Carbs: ${carbs}`}
          </p>
        </div>
        <form>
          <label>
            Weight:
            <input type="number" min="0" max="1000" step="10" />
          </label>
        </form>
      </Modal>
    </li>
  );
};

FoodCard.propTypes = {
  food: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FoodCard;
