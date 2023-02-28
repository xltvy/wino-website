import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackArrow from "../images/back-arrow.svg";
import ForwardArrow from "../images/forward-arrow.svg";
import CloseButton from "../images/close-button.svg";
import FullscreenButton from "../images/fs-button.svg";
import MinimizeButton from "../images/hide-button.svg";
import DownloadButton from "../images/download.svg";
import Image1 from "../images/image1.jpg";
import Image2 from "../images/image2.jpg";
import Image3 from "../images/image3.jpg";
import "./component_styles.css";

const ContentPreviewWindow = ({ title }) => {
  const [boxSize, setBoxSize] = useState({ width: 910, height: 720 });
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState(null);
  const [isResizing, setIsResizing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

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
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 0,
    initialSlide: 0,
  };

  return (
    <div className="resizable-box" style={boxStyle} onMouseDown={handleMouseDown}>
      <div className="content">
        <div className="prev-upper-body" style={{ height: upperBodyHeight }}>
            <div classNaame="prev-explore-buttons" style={{display: "flex", justifyContent: "flex-start", alignItems: "center", width: "100%"}}>
                <div className="prev-back-button">
                    <img style={{height: "20px", cursor: "pointer"}} src={BackArrow} alt="Back Arrow"/>
                </div>
                <div className="prev-forward-button">
                    <img style={{height: "20px", cursor: "pointer"}} src={ForwardArrow} alt="Forward Arrow"/>
                </div>
            </div>
            <div className="prev-upper-body-content" style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
                <div className="prev-upper-body-content-wrapper">
                    <div className="prev-window-title">Featured</div>
                    <div className="prev-window-title-label">{title}</div>
                </div>
            </div>
            <div className="prev-window-utility-buttons" style={{display: "flex", alignItems: "center", width: "100%", justifyContent: "flex-end", marginRight: "20px" }}>
                <div className="window-close-button" style={{marginTop: "16px", cursor: "pointer", padding: "8px"}} onClick={handleCloseClick}>
                    <img src={CloseButton} alt="Close Button" style={{height: "14px"}}/>
                </div>
                <div className="window-fs-button" style={{marginTop: "16px", cursor: "pointer", padding: "8px"}}>
                    <img src={FullscreenButton} alt="Fullscreen Button" style={{height: "14px"}}/>
                </div>
                <div className="window-min-button" style={{marginTop: "16px", cursor: "pointer", padding: "8px", paddingRight: "28px"}}>
                    <img src={MinimizeButton} alt="Minimize Button" style={{height: "14px"}}/>
                </div>
                <div className="window-download-button" style={{marginTop: "12px", cursor: "pointer", marginRight: "24px"}}>
                    <img src={DownloadButton} alt="Download Button" style={{height: "20px"}}/>
                </div>
            </div>
        </div>
        <div className="prev-lower-body" style={{ height: lowerBodyHeight }}>
            <div className="prev-lower-body-content">
            <div className="prev-lower-body-content-wrapper">
                <Slider {...settings}>
                    <div>
                        <img src={Image1} alt="First" style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div>
                        <img src={Image2} alt="Second" style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div>
                        <img src={Image3} alt="Third" style={{width: "100%", height: "100%"}}/>
                    </div>
                </Slider>
            </div>
            </div>
        </div>
      </div>
      <div className="resizer"></div>
    </div>
  );
};

export default ContentPreviewWindow;