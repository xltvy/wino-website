import React from "react";

const MobileDesktopElement = ({ children, title, onClick }) => {

    const handleOnClick = () => {
        onClick();
    };

    return (
        <div className="mobile-element">
            <div className='mobile-element-container' onClick={handleOnClick}>
                <div className='mobile-element-image-container'>
                    {children}
                </div>
                <div className='mobile-element-title-container'>
                    <div className='desktop-element-title'>{title}</div>
                </div>
            </div>
        </div>
    );
};

export default MobileDesktopElement;