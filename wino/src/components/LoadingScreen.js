import React from 'react';
import './component_styles.css';
import "./responsive_styles.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="progress-container">
        <div className="progress-bar" />
      </div>
    </div>
  );
};

export default LoadingScreen;
