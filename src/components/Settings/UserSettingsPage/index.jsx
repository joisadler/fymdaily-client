/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../Navigation/Navbar';

const UserSettingsPage = () => {
  const user = useSelector(state => state.user.loggedInUser);
  console.log(user);
  const {
    username,
  } = user;
  const currentHeight = user.height;
  const currentBodyWeight = user.bodyWeight;
  const currentGender = user.gender;
  const currentHipCircumference = user.hipCircumference;
  const currrentWaistCircumference = user.waistCircumference;
  const currentNeckCircumference = user.neckCircumference;
  const currentPhysicalActivityLevel = user.physicalActivityLevel;
  const currentGoal = user.goal;
  const isUserInfoSet = !!user.height;
  const [height, setHeight] = useState(currentHeight);
  const [bodyWeight, setBodyWeight] = useState(currentBodyWeight);
  const [gender, setGender] = useState(currentGender);
  const [hipCircumference, setHipCircumference] = useState(currentHipCircumference);
  const [waistCircumference, setWaistCircumference] = useState(currrentWaistCircumference);
  const [neckCircumference, setNeckCircumference] = useState(currentNeckCircumference);
  const [physicalActivityLevel, setPhysicalActivityLevel] = useState(currentPhysicalActivityLevel);
  const [goal, setGoal] = useState(currentGoal);

  const set = (name) => {
    switch (name) {
      case 'height':
        return setHeight;
      case 'bodyWeight':
        return setBodyWeight;
      case 'gender':
        return setGender;
      case 'hipCircumference':
        return setHipCircumference;
      case 'waistCircumference':
        return setWaistCircumference;
      case 'neckCircumference':
        return setNeckCircumference;
      case 'physicalActivityLevel':
        return setPhysicalActivityLevel;
      case 'goal':
        return setGoal;
      default:
        break;
    }
  };

  const handleChange = ({ value, dataset }) => {
    const { name } = dataset;
    set(name)(value);
  };

  return (
    <>
      <main className="page">
        <header>
          <h1 className="page-title">
            { isUserInfoSet ? `Hey, ${username}!` : `Welcome, ${username}!`}
          </h1>
          <h2 className="user-settings-page-subtitle">
            { isUserInfoSet
              ? 'We advise you to update this data at least once a month (this is important for the correct work with your weight):'
              : 'Please enter the following data (this is necessary for the application to work correctly):'}
          </h2>
        </header>
        <form className="user-settings-form">
          <div className="user-settings-input-container">
            <label
              htmlFor="user-settings-height-input"
              className="user-settings-input-label"
            >
              Height:
            </label>
            <input
              type="number"
              id="user-settings-height-input"
              className="user-settings-input"
              placeholder="Height in cm"
              value={height}
              data-name="height"
              onChange={e => handleChange(e.target)}
              min="0"
              max="300"
              step="any"
              required
            />
          </div>
          <div className="user-settings-input-container">
            <label
              htmlFor="user-settings-weight-input"
              className="user-settings-input-label"
            >
              Weight:
            </label>
            <input
              type="number"
              id="user-settings-weight-input"
              className="user-settings-input"
              placeholder="Weight in kg"
              value={bodyWeight}
              data-name="bodyWeight"
              onChange={e => handleChange(e.target)}
              min="0"
              max="1000"
              step="any"
              required
            />
          </div>
          <div className="user-settings-input-container">
            <label
              htmlFor="user-settings-gender-input"
              className="user-settings-input-label"
            >
              Gender:
            </label>
            <select
              id="user-settings-gender-input"
              className="user-settings-input"
              value={gender}
              data-name="gender"
              onChange={e => handleChange(e.target)}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="user-settings-input-container">
            { gender === 'female' && (
              <>
                <label
                  htmlFor="user-settings-hip-circumference-input"
                  className="user-settings-input-label"
                >
                  Hip Circumference:
                </label>
                <input
                  type="number"
                  id="user-settings-hip-circumference-input"
                  className="user-settings-input"
                  placeholder="Hip circumference in cm"
                  value={hipCircumference}
                  data-name="hipCircumference"
                  onChange={e => handleChange(e.target)}
                  min="0"
                  max="500"
                  step="any"
                  required
                />
              </>
            )}
          </div>
          <div className="user-settings-input-container">
            <input type="text" />
          </div>
          <div className="user-settings-input-container">
            <input type="text" />
          </div>
          <div className="user-settings-input-container">
            <input type="text" />
          </div>
          <div className="user-settings-input-container">
            <input type="text" />
          </div>
          <button />
        </form>
      </main>
      {isUserInfoSet && <Navbar />}
    </>
  );
};

export default UserSettingsPage;
