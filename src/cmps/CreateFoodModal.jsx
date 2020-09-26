import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAsyncCallback } from 'react-async-hook';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { addFood } from '../services/food.service';

const CreateFoodModal = ({
  isModalOpen,
  closeModal,
}) => {
  Modal.setAppElement('#root');
  const history = useHistory();

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [calories, setCalories] = useState('');
  const [proteins, setProteins] = useState('');
  const [fats, setFats] = useState('');
  const [carbs, setCarbs] = useState('');

  const createFood = useAsyncCallback(async () => {
    const food = {
      name,
      brand,
      calories,
      proteins,
      fats,
      carbs,
    };
    addFood(food);
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    createFood.execute();
    closeModal();
    setTimeout(() => {
      history.push('/custom-foods');
    }, 300);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Create food"
      className="create-food"
    >
      <button
        className="create-food-close-button"
        type="button"
        onClick={e => closeModal(e)}
      >
        &times;
      </button>
      <h2 className="create-food-header">
        Create new food
      </h2>
      <form
        className="create-food-form"
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          className="create-food-input create-food-name-input"
          value={name}
          placeholder="Name"
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="text"
          className="create-food-input create-food-brand-input"
          value={brand}
          placeholder="Brand"
          onChange={e => setBrand(e.target.value)}
          required
        />
        <input
          type="number"
          min="0"
          max="1000"
          step="any"
          className="create-food-input create-food-calories-input"
          value={calories}
          placeholder="Calories"
          onChange={e => setCalories(e.target.value)}
          required
        />
        <input
          type="number"
          min="0"
          max="100"
          step="any"
          className="create-food-input create-food-proteins-input"
          value={proteins}
          placeholder="Proteins"
          onChange={e => setProteins(e.target.value)}
          required
        />
        <input
          type="number"
          min="0"
          max="100"
          step="any"
          className="create-food-input create-food-fats-input"
          value={fats}
          placeholder="Fats"
          onChange={e => setFats(e.target.value)}
          required
        />
        <input
          type="number"
          min="0"
          max="100"
          step="any"
          className="create-food-input create-food-carbs-input"
          value={carbs}
          placeholder="Carbs"
          onChange={e => setCarbs(e.target.value)}
          required
        />
        <div className="create-food-submit-button-container">
          <button
            type="submit"
            className="create-food-submit-button"
          >
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
};

CreateFoodModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CreateFoodModal;
