import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAsyncCallback } from 'react-async-hook';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { updateEatenFood } from '../services/history.service';

const EatenFoodModal = ({
  isModalOpen,
  closeModal,
  _id,
  name,
  brand,
  calories,
  proteins,
  fats,
  carbs,
  previousWeight,
}) => {
  Modal.setAppElement('#root');
  const history = useHistory();
  const [weight, setWeight] = useState(previousWeight);

  const decreaseWeight = () => {
    if (weight <= 10) {
      setWeight(0);
      return;
    }
    setWeight(weight - 10);
  };

  const increaseWeight = () => {
    if (weight >= 990) {
      setWeight(1000);
      return;
    }
    setWeight(weight + 10);
  };

  const updateFood = useAsyncCallback(async () => {
    const food = {
      _id,
      name,
      brand,
      calories,
      proteins,
      fats,
      carbs,
      weight,
    };
    updateEatenFood(food);
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    updateFood.execute();
    closeModal();
    setTimeout(() => {
      history.push('/eaten-food');
    }, 300);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Add food"
      className="eaten-food-modal"
    >
      <button
        className="eaten-food-modal-close-button"
        type="button"
        onClick={e => closeModal(e)}
      >
        &times;
      </button>
      <header className="eaten-food-modal-header">
        <h2 className="eaten-food-modal-title">
          {name}
        </h2>
        <h3 className="eaten-food-modal-subtitle">
          {brand}
        </h3>
      </header>
      <div className="eaten-food-modal-info">
        <p>
          {`Calories: ${(calories * weight) / 100}`}
        </p>
        <p>
          {`Proteins: ${(proteins * weight) / 100}`}
        </p>
        <p>
          {`Fats: ${(fats * weight) / 100}`}
        </p>
        <p>
          {`Carbs: ${(carbs * weight) / 100}`}
        </p>
      </div>
      <form
        id="eaten-food-modal-form"
        className="eaten-food-modal-form"
        onSubmit={onFormSubmit}
      >
        <fieldset className="eaten-food-modal-weight-inputs">
          <legend
            className="eaten-food-modal-weight-legend"
          >
            Weight:
          </legend>
          <div>
            <button
              type="button"
              className="eaten-food-modal-weight-dec-button"
              onClick={decreaseWeight}
            >
              -
            </button>
            <input
              className="eaten-food-modal-weight-input"
              aria-label="weight"
              type="number"
              min="0"
              max="1000"
              step="any"
              value={weight}
              onChange={e => setWeight(e.target.value)}
            />
            <button
              type="button"
              className="eaten-food-modal-weight-inc-button"
              onClick={increaseWeight}
            >
              +
            </button>
          </div>
        </fieldset>
      </form>
      <button
        type="submit"
        form="eaten-food-modal-form"
        className="eaten-food-modal-submit-button"
      >
        Add
      </button>
    </Modal>
  );
};

EatenFoodModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fats: PropTypes.number.isRequired,
  carbs: PropTypes.number.isRequired,
  previousWeight: PropTypes.number.isRequired,
};

export default EatenFoodModal;
