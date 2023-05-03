import React, { useState, useEffect, useMemo } from 'react';
import './component_styles.css';
import "./responsive_styles.css";

import CloseIcon from "../icons/CloseIcon.js";
import ContactOutline from '../icons/ContactOutline.js';
import InfoOutline from '../icons/InfoOutline.js';
import FolderOutline from '../icons/FolderOutline.js';
import FolderAlt from '../icons/FolderAlt.js';
import RightArrow from "../icons/RightArrow.js";
import InfoIcon from '../images/information-icon.png';

import FolderStructure from '../FolderStructure.js';

const FinderWindow = ({clickedFolderTitle, onClose, onImageClick, onFolderInfoClick, onInfoClick}) => {

    const [boxSize, setBoxSize] = useState({ width: Math.max(885, window.innerWidth*0.7), height: Math.max(460, window.innerHeight*0.8) });
    const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
    const [dragStart, setDragStart] = useState(null);
    const [isResizing, setIsResizing] = useState(false);

    const [folderStructure] = useState(FolderStructure);

    const [selectedFolder, setSelectedFolder] = useState(clickedFolderTitle);
    const [selectedSubFolder, setSelectedSubFolder] = useState(folderStructure.find((folder) => folder.title === clickedFolderTitle).hasSubfolder ? folderStructure.find((folder) => folder.title === clickedFolderTitle).subfolders[0].title : null);
    const [isInSubFolder, setIsInSubFolder] = useState(folderStructure.find((folder) => folder.title === clickedFolderTitle).hasSubfolder);
    const [isVisible, setIsVisible] = useState(true);
    const [showSubSidebar, setShowSubSidebar] = useState(folderStructure.find((folder) => folder.title === clickedFolderTitle).hasSubfolder);
    const [contextFileName, setContextFileName] = useState(folderStructure.find((folder) => folder.title === clickedFolderTitle).hasSubfolder ? folderStructure.find((folder) => folder.title === clickedFolderTitle).subfolders[0].title.toUpperCase() + " INFO" : "");
    const [previewTitle, setPreviewTitle] = useState(folderStructure.find((folder) => folder.title === clickedFolderTitle).hasSubfolder ? folderStructure.find((folder) => folder.title === clickedFolderTitle).subfolders[0].title.toUpperCase() : "");

    const handleMouseDown = (event) => {
        if (
          event.target.parentNode.className === "finder-right-side-top" ||
          event.target.parentNode.className === "finder-folder-title" ||
          event.target.parentNode.className === "finder-right-side"
        ) {
          setDragStart({
            x: event.clientX,
            y: event.clientY,
            positionX: boxPosition.x,
            positionY: boxPosition.y,
          });
        } else if (event.target.className === "resizer") {
          setIsResizing(true);
          setDragStart({
            x: event.clientX,
            y: event.clientY,
            width: boxSize.width,
            height: boxSize.height,
          });
        }
      };
    
    const handleMouseMove = (event) => {
      if (!dragStart) return;
    
      const dx = event.clientX - dragStart.x;
      const dy = event.clientY - dragStart.y;
    
      if (isResizing) {
        const newWidth = Math.max(885, dragStart.width + dx);
        const newHeight = Math.max(460, dragStart.height + dy);
    
        setBoxSize({
          width: newWidth,
          height: newHeight,
        });
      } else {
        const newX = dragStart.positionX + dx;
        const newY = dragStart.positionY + dy;
    
        setBoxPosition({
          x: newX,
          y: newY,
        });
      }
    };
    
    const handleMouseUp = () => {
      setDragStart(null);
      setIsResizing(false);
    };
    
    useEffect(() => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }, [dragStart]);
    
    const upperBodyHeight = 45;
    const lowerBodyHeight = boxSize.height - 45;
  
    const boxStyle = {
      width: boxSize.width,
      height: boxSize.height,
      transform: `translate(${boxPosition.x}px, ${boxPosition.y}px)`,
      position: "absolute",
      left: "30vh",
      top: "5vh",
      display: isVisible ? "block" : "none",
    };

    const handleFolderClick = (folderTitle, hasSubfolder) => {
      setSelectedFolder(folderTitle);
      setShowSubSidebar(hasSubfolder);
      if (hasSubfolder) {
          setSelectedSubFolder(folderStructure.find((folder) => folder.title === folderTitle).subfolders[0].title);
          setContextFileName(folderStructure.find((folder) => folder.title === folderTitle).subfolders[0].title.toUpperCase() + " INFO");
          setPreviewTitle(folderStructure.find((folder) => folder.title === folderTitle).subfolders[0].title.toUpperCase());
      } else {
          setSelectedSubFolder(null);
          setContextFileName(folderTitle.toUpperCase() + " INFO");
          setPreviewTitle(folderTitle.toUpperCase());
      }
    };

    const selectedImages = useMemo(() => {
      const selectedFolderObj = folderStructure.find(
          (folder) => folder.title === selectedFolder
      );
  
      if (!selectedFolderObj) return [];
  
      if (selectedFolderObj.hasSubfolder) {
          const selectedSubfolderObj = selectedFolderObj.subfolders.find(
              (subfolder) => subfolder.title === selectedSubFolder
          );
          return selectedSubfolderObj ? selectedSubfolderObj.images : [];
      }
      return selectedFolderObj.images;
    }, [selectedFolder, selectedSubFolder]);

    const handleSubFolderClick = (subFolder) => {
        setSelectedSubFolder(subFolder);
        setContextFileName(subFolder.toUpperCase() + " INFO");
        setPreviewTitle(subFolder.toUpperCase());
        setIsInSubFolder(true);
    };

    const handleOnClose = () => {
        onClose();
        setIsVisible(false);
    };

    const handleOnImageClick = (imageIndex) => {
      onImageClick(selectedImages, imageIndex, contextFileName, selectedImages[0].content, previewTitle);
    };

    const handleOnFolderInfoClick = () => {
      onFolderInfoClick(contextFileName, selectedImages[0].content);
    };

    const handleOnInfoClick = () => {
      onInfoClick();
    };
    
    const handleContactClick = () => {
      window.open("mailto:wino@studiowino.com");
    };

  return (
    <div className="resizable-box" style={boxStyle} onMouseDown={handleMouseDown}>
        <div className="finder-window" >
            <div className="sidebar">
                <div className="window-close-button" onClick={handleOnClose} style={{marginTop: "unset", padding: "0px 0px 0px 5px"}}>
                    <CloseIcon height="14px" style={{cursor: "pointer"}}/>
                </div>
                <div className="sidebar-title">Favorites</div>
                <div className="parent-sidebar-folders">
                      {folderStructure.map((folder, index) => (
                            <div
                                key={index}
                                className={`sidebar-folder-item-wrapper ${selectedFolder === folder.title ? 'selected' : ''}`}
                                onClick={() => handleFolderClick(folder.title, folder.hasSubfolder)}
                            >
                                <FolderOutline fill="#29a3ff" height="14px" style={{paddingRight: "0.7rem"}}/>
                                <div className="folder-item">
                                    {folder.title}
                                </div>
                            </div>
                        ))}
                </div>
                <div className="parent-sidebar-contact">
                    <div className="parent-sidebar-contact-item" onClick={handleOnInfoClick}>
                        <InfoOutline fill="#29a3ff" height="16px" style={{paddingRight: "0.7rem"}}/>
                        <div className="parent-sidebar-contact-item-text">Information</div>
                    </div>
                    <div className="parent-sidebar-contact-item" onClick={handleContactClick}>
                        <ContactOutline fill="#29a3ff" height="11px" style={{paddingRight: "0.6rem"}}/>
                        <div className="parent-sidebar-contact-item-text">Contact</div>
                    </div>
                </div>
            </div>
            <div className="finder-right-side">
                <div className="finder-right-side-top" style={{ height: upperBodyHeight }}>
                    <div className={`finder-folder-title ${isInSubFolder ? 'disabled' : ''}`} style={{paddingLeft: "20px"}}>{selectedFolder}</div>
                    {isInSubFolder && (
                        <div className="default-row">
                            <RightArrow fill="#717171" height="12px"/>
                            <div className='finder-folder-title'>{selectedSubFolder}</div>
                        </div>
                    )}
                </div>
                <div className="finder-right-side-bottom" style={{ height: lowerBodyHeight }}>
                          <div className={`sub-sidebar ${!showSubSidebar ? 'hidden' : ''}`}>
                            {showSubSidebar &&
                                folderStructure
                                    .find((folder) => folder.title === selectedFolder)
                                    ?.subfolders.map((subfolder, index) => (
                                        <div
                                            key={index}
                                            className={`sub-sidebar-folder-item-wrapper ${selectedSubFolder === subfolder.title ? 'selected' : ''}`}
                                            onClick={() => handleSubFolderClick(subfolder.title)}
                                        >
                                            <div className="folder-content">
                                                <FolderAlt fill="#29a3ff" height="15px" style={{paddingRight: "0.7rem"}}/>
                                                <div className="folder-item">
                                                    {subfolder.title}
                                                </div>
                                            </div>
                                            <RightArrow fill="#717171" height="6px"/>
                                        </div>
                                    ))}
                          </div>
                          <div className="main-finder-area">
                            <div className="main-finder-image-wrapper" onDoubleClick={handleOnFolderInfoClick}>
                                <div className="main-finder-image-overlay" style={{filter: "none"}}>
                                  <img src={InfoIcon} alt="Information File Icon" decoding='async' loading='lazy'/>
                                </div>
                                <div className="main-finder-image-title">{contextFileName}</div>
                            </div>
                              {selectedImages.map((image) => (
                                  <div key={image.id} className="main-finder-image-wrapper" onDoubleClick={() => handleOnImageClick((image.id-1))}>
                                      <div className="main-finder-image-overlay">
                                        {!image.isVideo && <img src={image.src} alt={image.alt} decoding='async' loading='lazy'/>}
                                        {image.isVideo && <div className='finder-video-container'> <div className='finder-video-wrapper' onDoubleClick={() => handleOnImageClick((image.id-1))}/><iframe src={image.src + "&background=1&title=0&byline=0&portrait=0&playsinline=1&muted=1&controls=0&loop=1"} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} frameborder="0" allow="autoplay; picture-in-picture"/></div>}
                                      </div>
                                      <div className="main-finder-image-title">{image.title}</div>
                                  </div>
                              ))}
                          </div>
                </div>
            </div>
        </div>
    <div className="resizer"></div>
    </div>
  );
};

export default FinderWindow;