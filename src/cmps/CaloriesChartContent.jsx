import React, { useState } from 'react';

const CaloriesChartContent = () => {
  const [isAlternateContentShown, setIsAlternateContentShown] = useState(false);

  const handleClick = () => {
    setIsAlternateContentShown(!isAlternateContentShown);
  };

  const handleKeyDown = (e) => {
    const code = e.charCode || e.keyCode;
    if ((code === 32) || (code === 13)) {
      setIsAlternateContentShown(!isAlternateContentShown);
    }
  };

  if (!isAlternateContentShown) {
    return (
      <div
        className="calories-chart-content"
        onClick={handleClick}
        onKeyDown={(e) => { handleKeyDown(e); }}
        role="switch"
        aria-checked="false"
        tabIndex="0"
      >
        <h1 className="calories-headline">You still need to consume</h1>
        <p className="calories-number">3186</p>
        <h2 className="calories-subheadline">calories to fit your daily need</h2>
      </div>
    );
  }
  return (
    <div
      className="alternative-calories-chart-content"
      onClick={handleClick}
      onKeyDown={(e) => { handleKeyDown(e); }}
      role="switch"
      aria-checked="true"
      tabIndex="0"
    >
      <p className="alternative-calories-chart-content-headline">calories:</p>
      <p className="alternative-calories-chart-content-number">123/3309</p>
      <p className="alternative-calories-chart-content-percent">4%</p>
    </div>
  );
};

export default CaloriesChartContent;
