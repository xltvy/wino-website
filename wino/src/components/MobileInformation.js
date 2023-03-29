import React, { useState, useEffect } from "react";
import CloseIcon from "../icons/CloseIcon.js";
import Logo from "../images/wino-logo2.png";
import "./component_styles.css";
import "./responsive_styles.css";

const MobileInformation = ({ onInformationClose }) => {
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
                    <div className="text-file-title">Information</div>
                    <div className="text-file-title-label">Info.txt</div>
                </div>
            </div>
            </div>
            <div className="text-file-lower-body">
                <div className="lower-body-content">
                    <div className="lower-body-content-wrapper">
                        <img src={Logo} alt="Wino Logo" style={{ width: "100%", height: "auto", paddingTop: "8px" }} />
                        <h3 style={{paddingTop: "0px"}}>CONTACT</h3>
                        <p>For any inquires, please contact:</p>
                        <p> <a style={{color: "black"}} href="mailto:wino@studiowino.com">wino@studiowino.com</a> </p>
                        <p>T: +90 212 807 08 67</p>
                        <p>IG: <a style={{color: "black"}} href='https://www.instagram.com/studiowino/' target="_blank" rel="noreferrer">@studiowino</a> </p>
                        <h3>ABOUT</h3>
                        <p>WINO is an award-winning creative studio inspired by human-centered outcomes.</p>
                        <p style={{paddingTop: "8px"}}>Here, visual communication strategies, graphic design and industrial products are created by us, for everybody.</p>
                        <p style={{paddingTop: "8px"}}>Also, under the name of GREEN, WINO will maintain its commitment to the environment, resources and ethical values as long as it provides services.</p>
                        <p style={{paddingTop: "8px"}}>The studio was launched in 2020 in Istanbul, in the heart of Europe and Asia. WINO was inevitable, because after all these years in the industry, the accumulation of all the experience and observations was calling for a new identity.</p>
                        <p style={{paddingTop: "8px"}}>In our very first year, we have worked with both big clients and tiny startups, on local and international market.</p>
                        <p style={{paddingTop: "8px"}}>We like the contamination between creative disciplines and diversity in general. We prefer to avoid doing the same thing twice, and prefer to go further what we’re already able to do. It is tiring but satisfying.</p>
                        <p style={{paddingTop: "8px"}}>Marketing & Visual Strategy, Graphic Design, Illustration, Identity, Packaging, Typography, Motion, Digitalization & Brand Socialization are what W love.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileInformation;