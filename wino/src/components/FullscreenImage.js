import React from "react";

const FullscreenImage = ({ imageSrc, onExitFullscreen }) => {

    const handleExitFullscreen = () => {
        onExitFullscreen();
    };

    return (
        <span className="fullscreen-image-container">
            <div className="exit-fullscreen-button" onClick={handleExitFullscreen}>Close</div>
            <img className="fullscreen-image" src={imageSrc} alt="Fullscreen Image" decoding="async" loading="lazy"/>
        </span>
    );
};

export default FullscreenImage;