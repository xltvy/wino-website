import React, { useState, useEffect, useRef } from "react";
import "./component_styles.css";
import SearchIcon from "../icons/SearchIcon.js";

const SearchBar = ({onSearchClose}) => {

    return (
        <div className="search-bar">
            <div className="search-bar-input-area">
                <div className="input-area-content-wrapper">
                    <div className="input-area-content">
                        <div className="icon-container">
                            <SearchIcon className="search-bar-icon" fill="#000" />
                        </div>
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
            <div className="search-bar-result-area">
                
            </div>
        </div>
    );
};

export default SearchBar;