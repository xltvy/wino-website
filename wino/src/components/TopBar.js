import React, { useState, useEffect } from 'react';
import './component_styles.css'
import Switch from "react-switch";
import WinoLogo from "../icons/WinoLogo2.js";
import SearchIcon from '../images/search-icon.svg';
import UtilityDots from '../icons/UtilityDots.js';
import ContactOutline from '../icons/ContactOutline.js';
import InfoOutline from '../icons/InfoOutline.js';


const TopBar = ({onInformationClick, onMobileInformationClick, onSearchClick, onDesktopFilmToggle}) => {

    const [showContactDropdown, setShowContactDropdown] = useState(false);
    const [showSocialDropdown, setShowSocialDropdown] = useState(false);
    const [showMobileDropdown, setShowMobileDropdown] = useState(false);
    const [dateTime, setDateTime] = useState(new Date());
    const [isAnimationChecked, setIsAnimationChecked] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const formattedDate = dateTime.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
    const formattedTime = dateTime.toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const handleSocialDropdown = (value) => {
        setShowSocialDropdown(value);
    };

    const handleContactDropdown = (value) => {
        setShowContactDropdown(value);
    };

    const handleMobileDropdown = () => {
        console.log("mobile click");
        setShowMobileDropdown(!showMobileDropdown);
    };

    const handleOnInformationClick = () => {
        onInformationClick();
    };

    const handleOnMobileInformationClick = () => {
        onMobileInformationClick();
    };

    const handleOnSearchClick = () => {
        console.log('search click')
        onSearchClick();
    };

    const handleOnDesktopFilmToggle = () => {
        setIsAnimationChecked(!isAnimationChecked);
        onDesktopFilmToggle();
    };

    const handleReload = () => {
        window.location.reload();
    };

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 978); // adjust the breakpoint as needed
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
        <div className="top-bar-layout">
            <head>
                <link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.css"/>
            </head>
            <div className="top-bar-left">
                <div className='icon-container'>
                    <WinoLogo className="wino-logo" onClick={handleReload}/>
                </div>
                <label className='top-bar-label'>Studio Wino</label>
                <div className="top-bar-left-item" onMouseEnter={() => handleContactDropdown(true)} onMouseLeave={() => handleContactDropdown(false)}>
                    <div className="top-bar-left-element">
                        Contact
                        { showContactDropdown && <div className="top-bar-contact-dropdown" onMouseEnter={() => handleContactDropdown(true)}>
                            <div className="top-bar-dropdown-item" onClick={handleOnInformationClick}>Information</div>
                            <div className="top-bar-dropdown-separator"/>
                            <a className="top-bar-dropdown-item-a-1" href="mailto:wino@studiowino.com" target="_blank" rel="noreferrer">wino@studiowino.com</a>
                            <a className="top-bar-dropdown-item-a-2" href="tel:+902128070867" target="_blank" rel="noreferrer">+90 212 807 08 67</a>
                        </div>}
                    </div>
                </div>
                <div className="top-bar-left-item" onMouseEnter={() => handleSocialDropdown(true)} onMouseLeave={() => handleSocialDropdown(false)}>
                    <div className="top-bar-left-element">
                        Social
                        { showSocialDropdown && <div className="top-bar-social-dropdown" onMouseEnter={() => handleSocialDropdown(true)}>
                            <a className="top-bar-dropdown-social-item-1" href='https://www.instagram.com/studiowino/' target="_blank" rel="noreferrer">Instagram</a>
                            <a className="top-bar-dropdown-social-item-2" href='https://www.behance.net/studiowinodotcom' target="_blank" rel="noreferrer">Behance</a>
                            <a className="top-bar-dropdown-social-item-3" href='https://www.linkedin.com/company/studiowino/' target="_blank" rel="noreferrer">LinkedIn</a>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="top-bar-right">
                <div className="top-bar-right-item">Legal</div>
                <div className="top-bar-right-item">
                    <img className='top-bar-search-icon' src={SearchIcon} alt="Search Icon" onClick={handleOnSearchClick} decoding='async' loading="lazy"/>
                </div>
                <div className="top-bar-right-item-dt">
                    {formattedDate}
                </div>
                <div className="top-bar-right-item-dt">
                    {formattedTime}
                </div>
                {/* <div className='top-bar-animation-button-container'>
                    {!isMobile && (<Switch type={"button"} checked={isAnimationChecked} onChange={handleOnDesktopFilmToggle} handleColor="white" offColor="#C6CED0" checkedIcon={false} uncheckedIcon={false} height={18} width={30} onColor={"#4cd964"}/>)}
                    {isMobile && (<Switch type={"button"} checked={isAnimationChecked} onChange={handleOnDesktopFilmToggle} handleColor="white" offColor="#C6CED0" checkedIcon={false} uncheckedIcon={false} height={24} width={42} onColor={"#4cd964"}/>)}
                </div> */}
                <div className="top-bar-utility-button" onClick={handleMobileDropdown}>
                    <UtilityDots className='top-bar-utility-dots'/>
                </div>
                {showMobileDropdown && (<div className='top-bar-utility-dropdown'>
                    <div className='top-bar-utility-dropdown-container'>
                        <nav>
                            <ul className='mobile-dropdown-ul'>
                                <li className='mobile-dropdown-item' role="button" onClick={handleOnMobileInformationClick}>
                                    <InfoOutline fill="#29a3ff" height="20px" style={{paddingRight: "0.4rem"}}/>
                                    <a className="mobile-dropdown-item-a">Information</a>
                                </li>
                                <li className='mobile-dropdown-item' role="button">
                                    <ContactOutline fill="#29a3ff" height="14px" style={{paddingRight: "0.3rem"}}/>
                                    <a className="mobile-dropdown-item-a" href="mailto:wino@studiowino.com" target="_blank" rel="noreferrer"> Contact</a>
                                </li>
                            </ul>
                            <ul className='mobile-dropdown-ul' style={{border: "unset"}}>
                                <li className='mobile-dropdown-item'>
                                    <a href='https://www.instagram.com/studiowino/' target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "black"}}>Instagram</a>
                                </li>
                                <li className='mobile-dropdown-item'>
                                    <a href='https://www.behance.net/studiowinodotcom' target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "black"}}>Behance</a>
                                </li>
                                <li className='mobile-dropdown-item'>
                                    <a href='https://www.linkedin.com/company/studiowino/' target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "black"}}>LinkedIn</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default TopBar;