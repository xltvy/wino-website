import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import './component_styles.css';

const DesktopVideo = ({ imageIndex, imageSrc, videoIframe, title, onImageClick }) => {
  const [clicked, setClicked] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const folderRef = useRef(null);

  const handleClick = () => {
    console.log('image clicked inside desktop video');
    setOpacity(0);
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (folderRef.current && !folderRef.current.contains(event.target)) {
        setOpacity(1);
        setClicked(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [folderRef]);

  const handleImageClick = () => {
    console.log("video double clicked");
    setOpacity(1);
    onImageClick(imageIndex);
  };

  return (
    <Draggable>
      <div className="folder-layout" ref={folderRef}>
        <div className='desktop-video-image-container-wrapper'>
            <div className='desktop-video-image-container' onClick={handleClick} onDoubleClick={handleImageClick}>
                <img className={`desktop-video-icon${clicked ? ' clicked no-drag' : ' no-drag'}`} style={{opacity}} src={imageSrc} alt="Desktop Video" onClick={handleClick} onDoubleClick={handleImageClick} decoding='async' loading="lazy"/>
                <span className={`desktop-video-container${clicked ? ' clicked' : ''}`}>
                    {videoIframe}
                </span>
            </div>
        </div>
        <div className={`desktop-element-title${clicked ? ' clicked' : ''}`} onClick={handleClick}>
          {title}
        </div>
      </div>
    </Draggable>
  );
};

export default DesktopVideo;
