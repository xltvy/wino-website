import React, { useState, useRef } from "react";

import TopBar from "./TopBar.js";

import FolderAlt from '../icons/FolderAlt.js';
import RightArrow from "../icons/RightArrow.js";
import LeftArrow from "../icons/LeftArrow.js";

import FolderStructure from '../FolderStructure.js';

const FinderWindow = (clickedFolderTitle) => {

    const [folderStructure] = useState(FolderStructure);

    // const [selectedFolder, setSelectedFolder] = useState(clickedFolderTitle);
    // const [selectedSubFolder, setSelectedSubFolder] = useState(folderStructure.find((folder) => folder.title === clickedFolderTitle).hasSubfolder ? folderStructure.find((folder) => folder.title === clickedFolderTitle).subfolders[0].title : null);
    // const [isInSubFolder, setIsInSubFolder] = useState(folderStructure.find((folder) => folder.title === clickedFolderTitle).hasSubfolder);
    // const [isVisible, setIsVisible] = useState(true);
    // const [showSubSidebar, setShowSubSidebar] = useState(folderStructure.find((folder) => folder.title === clickedFolderTitle).hasSubfolder);
    // const [contextFileName, setContextFileName] = useState(folderStructure.find((folder) => folder.title === clickedFolderTitle).hasSubfolder ? folderStructure.find((folder) => folder.title === clickedFolderTitle).subfolders[0].title.toUpperCase() + " INFO" : "");
    // const [previewTitle, setPreviewTitle] = useState(folderStructure.find((folder) => folder.title === clickedFolderTitle).hasSubfolder ? folderStructure.find((folder) => folder.title === clickedFolderTitle).subfolders[0].title.toUpperCase() : "");

    return (
        <div className="finder-window">
            <div className='desktop-top-layout'>
                <TopBar onInformationClick={""} onMobileInformationClick={""} onSearchClick={""}/>
            </div>
        </div>
    );
};

export default FinderWindow;