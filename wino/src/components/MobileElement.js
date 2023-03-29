import React from "react";
import './component_styles.css'
import './responsive_styles.css'

const MobileElement = ({imageIndex, title, imageSrc, imageAlt}) => {

    return (
        <div className='mobile-element'>
            <div className='mobile-element-image-container'>
                <img className='mobile-desktop-image' src={imageSrc} alt={imageAlt}/>
            </div>
            <div className='mobile-element-title-container'>
                <div className='desktop-element-title'>{title}</div>
            </div>
        </div>
    );
};

export default MobileElement;