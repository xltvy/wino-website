import React, { useState, useEffect, useRef } from "react";
import "./component_styles.css";
import SearchIcon from "../images/search-icon-grey.svg";

const SearchBar = ({onSearchClose}) => {

    const [clicked, setClicked] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
            setClicked(false);
            onSearchClose();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [searchRef]);

    return (
        <div className="search-bar" ref={searchRef}>
            <div className="search-bar-input-area">
                <div className="input-area-content-wrapper">
                    <div className="input-area-content">
                        <img className='search-bar-icon' src={SearchIcon} alt="Search Icon"/>
                        <input type="text" className="search-bar-input" placeholder="Search" />
                        <div className="search-bar-status-area">
                            <div className="search-result-count">
                                0 results
                            </div>
                            <div className="search-loading"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="search-bar-result-area">
                <div className="lower-body-content-wrapper">
                <div className="lower-body-content">
                    <input type="text" className="search-bar-input" />
                </div>
                </div>
            </div> */}
        </div>
    );
};

export default SearchBar;