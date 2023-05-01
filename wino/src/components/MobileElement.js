import React, { useState } from "react";
import './component_styles.css'
import './responsive_styles.css'

const MobileElement = ({imageIndex, title, imageSrc, imageAlt, onImageClick}) => {

    const [currentImageIndex] = useState(imageIndex);
    
    const handleOnImageClick = () => {
        onImageClick(currentImageIndex);
    };

    return (
        <div className='mobile-element' onClick={handleOnImageClick}>
            <div className='mobile-element-image-container'>
                <img className='mobile-desktop-image' src={imageSrc} alt={imageAlt} loading="lazy"/>
            </div>
            <div className='mobile-element-title-container'>
                <div className='desktop-element-title'>{title}</div>
            </div>
        </div>
    );
};

export default MobileElement;