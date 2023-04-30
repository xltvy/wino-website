import React, { useState } from 'react';
import './component_styles.css';
import "./responsive_styles.css";
import Draggable from 'react-draggable';

import CloseIcon from "../icons/CloseIcon.js";
import ContactOutline from '../icons/ContactOutline.js';
import InfoOutline from '../icons/InfoOutline.js';
import FolderOutline from '../icons/FolderOutline.js';
import FolderAlt from '../icons/FolderAlt.js';
import RightArrow from "../icons/RightArrow.js";

const FinderWindow = ({onClose}) => {
  const [selectedFolder, setSelectedFolder] = useState('');
  const [selectedSubFolder, setSelectedSubFolder] = useState('');

  const folders = [
    {
      name: 'Folder 1',
      subFolders: ['SubFolder 1.1', 'SubFolder 1.2'],
      files: ['File 1.1', 'File 1.2']
    },
    {
      name: 'Folder 2',
      subFolders: ['SubFolder 2.1', 'SubFolder 2.2'],
      files: ['File 2.1', 'File 2.2']
    }
  ];

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder);
    setSelectedSubFolder('');
  };

  const handleSubFolderClick = (subFolder) => {
    setSelectedSubFolder(subFolder);
  };

  const handleOnClose = () => {
    onClose();
  };

  return (
    <Draggable>
        <div className="finder-window">
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
                <div className="finder-right-side-top">
                    Dummy Text
                </div>
                <div className="finder-right-side-bottom">
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
    </Draggable>
  );
};

export default FinderWindow;