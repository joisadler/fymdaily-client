import React from 'react';
import { useSelector } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';

const Loader = () => {
  const isLoading = useSelector(state => state.system.isLoading);
  return (
    <div className="loader-container">
      <BeatLoader
        size={15}
        margin={2}
        color="green"
        loading={isLoading}
      />
    </div>
  );
};

export default Loader;
