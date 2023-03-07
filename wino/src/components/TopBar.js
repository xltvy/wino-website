import React, { useState, useEffect } from 'react';
import './component_styles.css'
import WinoLogo from '../images/wino-logo.svg';
import SearchIcon from '../images/search-icon.svg';


const TopBar = ({onInformationClick}) => {

    const [showContactDropdown, setShowContactDropdown] = useState(false);
    const [showSocialDropdown, setShowSocialDropdown] = useState(false);
    const [dateTime, setDateTime] = useState(new Date());

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

    const handleOnInformationClick = () => {
        window.history.pushState(null, null, '/information');
        onInformationClick();
    };

    return (
        <div className="top-bar-layout">
            <head>
                <link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.css"/>
            </head>
            <div className="top-bar-left">
                <img className='top-bar-logo' src={WinoLogo} alt="Wino Logo"/>
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
                    <img className='top-bar-search-icon' src={SearchIcon} alt="Search Icon"/>
                </div>
                <div className="top-bar-right-item-dt">
                    {formattedDate}
                </div>
                <div className="top-bar-right-item-dt">
                    {formattedTime}
                </div>
            </div>
        </div>
    );
};

export default TopBar;