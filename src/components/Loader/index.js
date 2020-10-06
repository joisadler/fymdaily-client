import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import PropTypes from 'prop-types';

const Loader = ({ isLoading }) => (
  <div className="loader-container">
    <BeatLoader
      size={15}
      margin={2}
      color="green"
      loading={isLoading}
    />
  </div>
);

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
