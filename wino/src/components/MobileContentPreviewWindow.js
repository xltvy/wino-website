import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import CloseIcon from "../icons/CloseIcon.js";
import FullscreenIcon from "../icons/FullscreenIcon.js";
import "./component_styles.css";
import "./responsive_styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MobileContentPreviewWindow = ({ images, currentIndex, onClose, onInformationClick, onViewedImageChange }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);


    const videoRef = useRef(null);
    const currentImage = images[currentImageIndex];

    const handleOnClose = () => {
        console.log("close clicked");
        setIsVisible(false);
        onClose();
    };

    const handleAfterChange = (index) => {
        setCurrentImageIndex(index);
        onViewedImageChange(index);
    };

    const handleOnInformationClick = () => {
        onInformationClick();
    };

    return (
        <div className="content">
            <div className="prev-upper-body">
                <div className="prev-upper-body-content">
                    <div className="prev-window-title">Featured</div>
                    <div className="prev-window-title-label">{currentImage.title}</div>
                    <div className="prev-window-utility-buttons">
                        <div className="window-close-button" onClick={handleOnClose}>
                            <CloseIcon height="14px" style={{cursor: "pointer"}}/>
                        </div>
                        <div className="window-fs-button">
                            <FullscreenIcon height="14px" style={{cursor: "pointer"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prev-lower-body">
                <div className="prev-lower-body-content">
                    <Slider
                        className="prev-lower-body-slider"
                        arrows={false}
                        swipeToSlide={true}
                        variableWidth={false}
                        afterChange={handleAfterChange}
                        initialSlide={currentIndex}
                    >
                        {images.map((image) => (
                            <div key={image.id} className="slider-image-wrapper">
                                <div className="dummy-container"/>
                                <div className="dummy-container-2"/>
                                {!image.isVideo && <img src={image.src} alt={image.alt} className="mobile-prev-image" />}
                                {image.isVideo && <iframe
                                                            ref={videoRef}
                                                            className="prev-window-video"
                                                            src="https://player.vimeo.com/video/794071012?h=0fcbbb3720&portrait=1&playsinline=1&loop=1"
                                                            width="100%"
                                                            height="100%"
                                                            frameborder="0"
                                                            allow="autoplay; fullscreen; picture-in-picture"
                                                            allowfullscreen>
                                                        </iframe>}
                            </div>
                        ))}
                    </Slider>
                </div>
              </div>
              <div className="prev-lower-body-footer">
                    <div className="prev-lower-body-footer-content">
                        <div className="image-index">
                            {currentImageIndex + 1} out of {images.length}
                        </div>
                    </div>
                    <div className="prev-lower-body-footer-content-2">
                        <div className="window-info-button" onClick={handleOnInformationClick}>
                            Info
                        </div>
                    </div>
                </div>
            </div>
      );

}

export default MobileContentPreviewWindow;