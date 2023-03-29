import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import './component_styles.css'

const DesktopElement = ({ title, iconSrc }) => {
    const [clicked, setClicked] = useState(false);
    const desktopElementRef = useRef(null);

    const handleClick = () => {
        setClicked(!clicked);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (desktopElementRef.current && !desktopElementRef.current.contains(event.target)) {
            setClicked(false);
          }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [desktopElementRef]);
    
    return (
        <Draggable>
            <div>
                <div className="desktop-element-container" ref={desktopElementRef} onClick={handleClick} >
                    <div className={`desktop-element-image-container${clicked ? ' clicked' : ''}`}>
                        {iconSrc}
                    </div>
                    <div className="desktop-element-title-container">
                        <div className={`desktop-element-title${clicked ? ' clicked' : ''}`}>{title}</div>
                    </div>
                    {/* {open && <div className="folder__content">{children}</div>} */}
                </div>
            </div>
        </Draggable>
    );
};

export default DesktopElement;