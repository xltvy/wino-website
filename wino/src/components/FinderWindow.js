import React, { useState, useEffect } from 'react';
import './component_styles.css';
import "./responsive_styles.css";

import CloseIcon from "../icons/CloseIcon.js";
import ContactOutline from '../icons/ContactOutline.js';
import InfoOutline from '../icons/InfoOutline.js';
import FolderOutline from '../icons/FolderOutline.js';
import FolderAlt from '../icons/FolderAlt.js';
import RightArrow from "../icons/RightArrow.js";

const FinderWindow = ({clickedFolderTitle, onClose}) => {
    const [boxSize, setBoxSize] = useState({ width: Math.max(885, window.innerWidth*0.7), height: Math.max(460, window.innerHeight*0.8) });
    const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
    const [dragStart, setDragStart] = useState(null);
    const [isResizing, setIsResizing] = useState(false);
    const [selectedFolder, setSelectedFolder] = useState(clickedFolderTitle);
    const [selectedSubFolder, setSelectedSubFolder] = useState('');
    const [isInSubFolder, setIsInSubFolder] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const folders = [
        {
        name: 'Upgrading',
        subFolders: ['SubFolder 1.1', 'SubFolder 1.2'],
        files: ['File 1.1', 'File 1.2']
        },
        {
        name: 'Design',
        subFolders: ['SubFolder 2.1', 'SubFolder 2.2'],
        files: ['File 2.1', 'File 2.2']
        },
        {
        name: 'Sustainability',
        subFolders: ['SubFolder 3.1', 'SubFolder 3.2'],
        files: ['File 3.1', 'File 3.2']
        },
        {
        name: 'Featured',
        subFolders: ['SubFolder 4.1', 'SubFolder 4.2'],
        files: ['File 4.1', 'File 4.2']
        },
        {
        name: 'Branding',
        subFolders: ['SubFolder 5.1', 'SubFolder 5.2'],
        files: ['File 5.1', 'File 5.2']
        }
    ];

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
        display: isVisible ? "block" : "none",
      };

    const handleFolderClick = (folder) => {
        setSelectedFolder(folder);
        setSelectedSubFolder('');
        setIsInSubFolder(false);
    };

    const handleSubFolderClick = (subFolder) => {
        setSelectedSubFolder(subFolder);
        setIsInSubFolder(true);
    };

    const handleOnClose = () => {
        onClose();
        setIsVisible(false);
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
                    {folders.map((folder) => (
                        <div
                            key={folder.name}
                            className={`sidebar-folder-item-wrapper ${selectedFolder === folder.name ? 'selected' : ''}`}
                            onClick={() => handleFolderClick(folder.name)}
                        >
                            <FolderOutline fill="#29a3ff" height="14px" style={{paddingRight: "0.7rem"}}/>
                            <div className="folder-item">
                                {folder.name}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="parent-sidebar-contact">
                    <div className="parent-sidebar-contact-item">
                        <InfoOutline fill="#29a3ff" height="16px" style={{paddingRight: "0.7rem"}}/>
                        <div className="parent-sidebar-contact-item-text">Information</div>
                    </div>
                    <div className="parent-sidebar-contact-item">
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
                    <div className="sub-sidebar">
                        {selectedFolder &&
                        folders
                            .find((folder) => folder.name === selectedFolder)
                            .subFolders.map((subFolder) => (
                                <div
                                    key={subFolder}
                                    className={`sub-sidebar-folder-item-wrapper ${selectedSubFolder === subFolder ? 'selected' : ''}`}
                                    onClick={() => handleSubFolderClick(subFolder)}
                                >
                                <div className="folder-content">
                                    <FolderAlt fill="#29a3ff" height="15px" style={{paddingRight: "0.7rem"}}/>
                                    <div className="folder-item">
                                        {subFolder}
                                    </div>
                                </div>
                                <RightArrow fill="#717171" height="6px"/>
                                </div>
                            ))}
                    </div>
                    <div className="main-finder-area">
                        {selectedSubFolder &&
                        folders
                            .find((folder) => folder.name === selectedFolder)
                            .files.map((file) => (
                            <div key={file} className="file-item">
                                {file}
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