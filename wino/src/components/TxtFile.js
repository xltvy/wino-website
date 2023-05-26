import React, { useState, useEffect } from "react";
import CloseIcon from "../icons/CloseIcon.js";
import "./component_styles.css";

const TxtFile = ({ title, content, onInformationClose }) => {
  const [boxSize, setBoxSize] = useState({ width: 340, height: 400 });
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState(null);
  const [isResizing, setIsResizing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleMouseDown = (event) => {
    if (
      event.target.parentNode.className === "text-file-upper-body" ||
      event.target.parentNode.className === "upper-body-content-wrapper" ||
      event.target.parentNode.className === "upper-body-content"
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
      const newWidth = Math.max(340, dragStart.width + dx);
      const newHeight = Math.max(400, dragStart.height + dy);
  
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
  const lowerBodyHeight = boxSize.height - 55;

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

  const handleOnInformationClose = () => {
    setIsVisible(false);
    onInformationClose();
  };

  return (
    <div className="resizable-box" style={boxStyle} onMouseDown={handleMouseDown}>
      <div className="content">
        <div className="text-file-upper-body" style={{ height: upperBodyHeight }}>
          <div className="close-button" onClick={handleOnInformationClose}>
            <CloseIcon height="12px"/>
          </div>
          <div className="upper-body-content">
            <div className="upper-body-content-wrapper">
                <div className="text-file-title">{title}</div>
                <div className="text-file-title-label">Info.txt</div>
            </div>
          </div>
        </div>
        <div className="text-file-lower-body" style={{ height: lowerBodyHeight }}>
            <div className="lower-body-content">
                <div className="lower-body-content-wrapper">
                    {content}
                </div>
            </div>
        </div>
      </div>
      <div className="resizer"></div>
    </div>
  );
};

export default TxtFile;