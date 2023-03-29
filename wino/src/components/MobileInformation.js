import React, { useState, useEffect } from "react";
import CloseIcon from "../icons/CloseIcon.js";
import "./component_styles.css";
import "./responsive_styles.css";

const MobileInformation = ({title, content, onInformationClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleOnInformationClose = () => {
        setIsVisible(false);
        onInformationClose();
    };

    return (
        <div className="content">
            <div className="text-file-upper-body">
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
            <div className="text-file-lower-body">
                <div className="lower-body-content">
                    <div className="lower-body-content-wrapper">
                        <div className="info-text-wrapper">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileInformation;