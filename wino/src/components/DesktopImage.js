import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import './component_styles.css'

const DesktopImage = ({ imageIndex, imageSrc, title, onImageClick }) => {
    const [clicked, setClicked] = useState(false);
    const folderRef = useRef(null);

    const handleClick = () => {
        setClicked(!clicked);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (folderRef.current && !folderRef.current.contains(event.target)) {
            setClicked(false);
          }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [folderRef]);

    const handleImageClick = () => {
        onImageClick(imageIndex);
    };
    
    return (
        <Draggable>
            <div className="folder-layout" ref={folderRef}>
              <div className='desktop-image-icon-wrapper'>
                <img className={`desktop-image-icon${clicked ? ' clicked no-drag' : ' no-drag'}`} src={imageSrc} alt="Desktop Image" onClick={handleClick} onDoubleClick={handleImageClick} decoding='async' loading="lazy"/>
              </div>
              <div className={`desktop-element-title${clicked ? ' clicked' : ''}`} onClick={handleClick}>{title}</div>
            </div>
        </Draggable>
    );
};

export default DesktopImage;