import React, { useState, useEffect, useRef } from "react";
import LeftArrow from "../icons/LeftArrow.js";
import RightArrow from "../icons/RightArrow.js";
import CloseIcon from "../icons/CloseIcon.js";
import FullscreenIcon from "../icons/FullscreenIcon.js";
import "./component_styles.css";

const ContentPreviewWindow = ({ images, onFullscreen, currentIndex, onClose, onInformationClick, onViewedImageChange }) => {
  const [boxSize, setBoxSize] = useState({ width: Math.max(690, window.innerWidth*0.4), height: Math.max(560, window.innerHeight*0.6) });
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState(null);
  const [isResizing, setIsResizing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

  const videoRef = useRef(null);
  const currentImage = images[currentImageIndex];

  const handleMouseDown = (event) => {
    if (
      event.target.parentNode.className === "prev-upper-body" ||
      event.target.parentNode.className === "prev-upper-body-content-wrapper" ||
      event.target.parentNode.className === "prev-upper-body-content"
    ) {
      setDragStart({
        x: event.clientX,
        y: event.clientY,
        positionX: boxPosition.x,
        positionY: boxPosition.y,
      });
    } else if (event.target.className === "resizer") {
      setIsResizing(true);
      setDragStart({
        x: event.clientX,
        y: event.clientY,
        width: boxSize.width,
        height: boxSize.height,
      });
    }
  };

  const handleMouseMove = (event) => {
    if (!dragStart) return;
  
    const dx = event.clientX - dragStart.x;
    const dy = event.clientY - dragStart.y;
  
    if (isResizing) {
      const newWidth = Math.max(690, dragStart.width + dx);
      const newHeight = Math.max(560, dragStart.height + dy);
  
      setBoxSize({
        width: newWidth,
        height: newHeight,
      });
    } else {
      const newX = dragStart.positionX + dx;
      const newY = dragStart.positionY + dy;
  
      setBoxPosition({
        x: newX,
        y: newY,
      });
    }
  };
  

  const handleMouseUp = () => {
    setDragStart(null);
    setIsResizing(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragStart]);

  const upperBodyHeight = 45;
  const lowerBodyHeight = boxSize.height - 125;

  const boxStyle = {
    width: boxSize.width,
    height: boxSize.height,
    transform: `translate(${boxPosition.x}px, ${boxPosition.y}px)`,
    position: "absolute",
    display: isVisible ? "block" : "none",
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    if (currentImageIndex === 0) {
      onViewedImageChange(images.length - 1);
    } else {
      onViewedImageChange(currentImageIndex - 1);
    }
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    if (currentImageIndex === images.length - 1) {
      onViewedImageChange(0);
    } else {
      onViewedImageChange(currentImageIndex + 1);
    }
  };

  const handleOnFullscreen = () => {
    if (currentImage.isVideo) {
      const video = videoRef.current;
      video.requestFullscreen();
    } else {
      onFullscreen(images.indexOf(currentImage));
    }
  };

  const handleOnClose = () => {
    setIsVisible(false);
    onClose();
  };

  const handleOnInformationClick = () => {
    console.log("Info Clicked");
    onInformationClick();
  };

  

  return (
    <div className="resizable-box" style={boxStyle} onMouseDown={handleMouseDown}>
      <div className="content">
        <div className="prev-upper-body" style={{ height: upperBodyHeight }}>
            <div className="prev-explore-buttons">
                <div className="prev-back-button">
                    <LeftArrow onClick={handlePrev} fill="#717171" height="20px" style={{cursor: "pointer"}}/>
                </div>
                <div className="prev-forward-button">
                    <RightArrow onClick={handleNext} fill="#717171" height="20px" style={{cursor: "pointer"}}/>
                </div>
            </div>
            <div className="prev-upper-body-content">
                <div className="prev-upper-body-content-wrapper">
                    <div className="prev-window-title">Featured</div>
                    <div className="prev-window-title-label">{currentImage.title}</div>
                </div>
            </div>
            <div className="prev-window-utility-buttons">
                <div className="window-close-button" onClick={handleOnClose}>
                    <CloseIcon height="14px" style={{cursor: "pointer"}}/>
                </div>
                <div className="window-fs-button" onClick={handleOnFullscreen}>
                    <FullscreenIcon height="14px" style={{cursor: "pointer"}}/>
                </div>
                <div className="window-info-button" onClick={handleOnInformationClick}>
                    Info
                </div>
            </div>
        </div>
        <div className="prev-lower-body" style={{ height: lowerBodyHeight }}>
            <div className="prev-lower-body-content">
                <div className="prev-lower-body-image-container">
                    <div className="on-image-utility-container" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "center"}}>
                      <div className="move-previous" onClick={handlePrev}/>
                      <div/>
                      <div className="move-forward" onClick={handleNext}/>
                    </div>
                  {!currentImage.isVideo && <img src={currentImage.src} alt={currentImage.alt} loading="lazy"/>}
                  {currentImage.isVideo && <iframe
                                              ref={videoRef}
                                              title={currentImage.alt}
                                              className="prev-window-video"
                                              src={currentImage.src}
                                              loading="lazy"
                                              width="100%"
                                              height="100%"
                                              frameborder="0"
                                              allow="autoplay; fullscreen; picture-in-picture"
                                              allowfullscreen>
                                          </iframe>}
                </div>
            </div>
            <div className="prev-lower-body-footer">
              <div className="prev-lower-body-footer-content">
                <div className="image-index">
                  {images.indexOf(currentImage) + 1} out of {images.length}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resizer"></div>
    </div>
  );
};

export default ContentPreviewWindow;