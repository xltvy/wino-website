import React, { useState, useRef } from "react";
import Slider from "react-slick";
import CloseIcon from "../icons/CloseIcon.js";
import FullscreenIcon from "../icons/FullscreenIcon.js";
import "./component_styles.css";
import "./responsive_styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MobileContentPreviewWindow = ({ images, currentIndex, onClose, onInformationClick, prevInfo, infoTitle, onViewedImageChange, prevTitle, onFullscreen }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);


    const videoRef = useRef(null);
    const currentImage = images[currentImageIndex];

    const handleOnClose = () => {
        console.log("close")
        onClose();
    };

    const handleAfterChange = (index) => {
        if (prevInfo) {
            setCurrentImageIndex(index);
        } else {
            setCurrentImageIndex(index);
            onViewedImageChange(index);
        }
    };

    const handleOnInformationClick = () => {
        if (prevInfo) {
            console.log(infoTitle)
            onInformationClick(infoTitle, currentImage.content);
        } else {
            onInformationClick();
        }
    };

    const handleOnFullscreen = () => {
        if (currentImage.isVideo) {
            videoRef.current.requestFullscreen();
        } else {
            if (prevInfo) {
                onFullscreen(currentImage.src);
            } else {
                onFullscreen(currentImageIndex);
            };
        }
    };

    return (
        <div className="content">
            <div className="prev-upper-body">
                <div className="prev-upper-body-content">
                    <div className="prev-window-title">{prevTitle}</div>
                    <div className="prev-window-title-label">{currentImage.title}</div>
                    <div className="prev-window-utility-buttons">
                        <div className="window-close-button" onClick={handleOnClose}>
                            <CloseIcon height="14px" style={{cursor: "pointer"}}/>
                        </div>
                        <div className="window-fs-button" onClick={handleOnFullscreen}>
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
                                {!image.isVideo && <img src={image.src} alt={image.alt} className="mobile-prev-image" decoding="async" loading="lazy"/>}
                                {image.isVideo && <iframe
                                                            ref={videoRef}
                                                            title={image.title}
                                                            className="prev-window-video"
                                                            src={image.src}
                                                            loading="lazy"
                                                            decoding="async"
                                                            width="100%"
                                                            height="85%"
                                                            frameBorder="0"
                                                            allow="autoplay; fullscreen; picture-in-picture">
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