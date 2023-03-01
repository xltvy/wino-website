import React, { useState, useEffect } from "react";
import BackArrow from "../images/back-arrow.svg";
import ForwardArrow from "../images/forward-arrow.svg";
import CloseButton from "../images/close-button.svg";
import FullscreenButton from "../images/fs-button.svg";
import MinimizeButton from "../images/hide-button.svg";
import "./component_styles.css";

const ContentPreviewWindow = ({ images }) => {
  const [boxSize, setBoxSize] = useState({ width: 880, height: 720 });
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState(null);
  const [isResizing, setIsResizing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const currentImage = images[currentImageIndex];

  return (
    <div className="resizable-box" style={boxStyle} onMouseDown={handleMouseDown}>
      <div className="content">
        <div className="prev-upper-body" style={{ height: upperBodyHeight }}>
            <div className="prev-explore-buttons">
                <div className="prev-back-button">
                    <img style={{height: "20px", cursor: "pointer"}} onClick={handlePrev} src={BackArrow} alt="Back Arrow"/>
                </div>
                <div className="prev-forward-button">
                    <img style={{height: "20px", cursor: "pointer"}} onClick={handleNext} src={ForwardArrow} alt="Forward Arrow"/>
                </div>
            </div>
            <div className="prev-upper-body-content">
                <div className="prev-upper-body-content-wrapper">
                    <div className="prev-window-title">Featured</div>
                    <div className="prev-window-title-label">{currentImage.title}</div>
                </div>
            </div>
            <div className="prev-window-utility-buttons">
                <div className="window-close-button" onClick={handleCloseClick}>
                    <img src={CloseButton} alt="Close Button" style={{height: "14px"}}/>
                </div>
                <div className="window-fs-button" onClick={toggleFullscreen}>
                    <img src={FullscreenButton} alt="Fullscreen Button" style={{height: "14px"}}/>
                </div>
                <div className="window-min-button">
                    <img src={MinimizeButton} alt="Minimize Button" style={{height: "14px"}}/>
                </div>
            </div>
        </div>
        <div className="prev-lower-body" style={{ height: lowerBodyHeight }}>
            <div className="prev-lower-body-content">
                <div className="prev-lower-body-image-container">
                  <img src={currentImage.src} alt={currentImage.alt} />
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