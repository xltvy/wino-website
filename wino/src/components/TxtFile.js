import React, { useState, useEffect } from "react";
import "./component_styles.css";

const TxtFile = ({ title }) => {
  const [boxSize, setBoxSize] = useState({ width: 320, height: 400 });
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
      const newWidth = Math.max(320, dragStart.width + dx);
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

  return (
    <div className="resizable-box" style={boxStyle} onMouseDown={handleMouseDown}>
      <div className="content">
        <div className="text-file-upper-body" style={{ height: upperBodyHeight }}>
          <div className="close-button" onClick={handleCloseClick}></div>
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
                    <h3 style={{paddingTop: "0px"}}>CONTACT</h3>
                    <p>For any inquires, please contact:</p>
                    <p> <a style={{color: "black"}} href="mailto:wino@studiowino.com">wino@studiowino.com</a> </p>
                    <p>T: +90 212 807 08 67</p>
                    <p>IG: <a style={{color: "black"}} href='https://www.instagram.com/studiowino/' target="_blank" rel="noreferrer">@studiowino</a> </p>
                    <h3>ABOUT</h3>
                    <p>Studio Wino is a dynamic creative studio located in Istanbul, Turkey. They specialize in a wide range of creative services including branding, art direction, graphic design, web design, and visual communication. Their team consists of talented designers and creatives who are dedicated to crafting innovative and effective solutions for their clients. </p>
                    <p style={{paddingTop: "8px"}}>Studio Wino takes a collaborative approach to their work, taking the time to understand their clients' needs and objectives in order to deliver tailor-made solutions that are both creative and practical. They have worked with a diverse range of clients across various industries, including fashion, food, hospitality, and technology. Studio Wino's unique blend of creativity and strategic thinking has earned them a reputation as one of the top creative studios in Istanbul.</p>
                    <h3>PROJECTS</h3>
                </div>
            </div>
        </div>
      </div>
      <div className="resizer"></div>
    </div>
  );
};

export default TxtFile;