import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import CloseIcon from "../icons/CloseIcon.js";
import FullscreenIcon from "../icons/FullscreenIcon.js";
import "./component_styles.css";
import "./responsive_styles.css";

const MobileContentPreviewWindow = ({ images }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(1);

    const videoRef = useRef(null);
    const currentImage = images[currentImageIndex];

    // const handleOnClose = () => {
    //     setIsVisible(false);
    //     onClose();
    // };

    // const handleOnFullscreen = () => {
    //     if (currentImage.isVideo) {
    //         const video = videoRef.current;
    //         video.requestFullscreen();
    //     } else {
    //         onFullscreen(images.indexOf(currentImage));
    //     }
    // };

    // const handleOnInformationClick = () => {
    //     onInformationClick();
    // };

    // const handleSwipeLeft = () => {
    //     setCurrentImageIndex((prevIndex) =>
    //         prevIndex === 0 ? images.length - 1 : prevIndex - 1
    //     );
    // };

    // const handleSwipeRight = () => {
    //     setCurrentImageIndex((prevIndex) =>
    //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //     );
    // };

    const handleSwipe = (delta) => {
        if (delta < 0) {
            // Swipe right - move to the next image
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        } else if (delta > 0) {
            // Swipe left - move to the previous image
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe(-1),
        onSwipedRight: () => handleSwipe(1),
    });
    

    return (
        <div className="content">
            <div className="prev-upper-body">
                <div className="prev-upper-body-content">
                    <div className="prev-window-title">Featured</div>
                    <div className="prev-window-title-label">{currentImage.title}</div>
                    <div className="prev-window-utility-buttons">
                        <div className="window-close-button">
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
                    <div className="prev-lower-body-image-container" {...handlers}>
                      {!currentImage.isVideo && <img src={currentImage.src} alt={currentImage.alt} />}
                      {currentImage.isVideo && <iframe
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
      );

}

export default MobileContentPreviewWindow;