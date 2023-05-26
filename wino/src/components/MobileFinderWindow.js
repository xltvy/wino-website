import React, { useState, lazy } from "react";

import TopBar from "./TopBar.js";

import FolderAlt from '../icons/FolderAlt.js';
import LeftArrow from "../icons/LeftArrow.js";
import InfoIcon from '../images/information-icon.png';

import FolderStructure from '../FolderStructure.js';

const MobileFolderImage = lazy(() => import("./MobileFolderImage.js"));

const MobileFinderWindow = ({ clickedFolderTitle, onClose, onInfoClick, onImageClick, onWinoInfoClick }) => {

  const [contentFileName, setContentFileName] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const [currentFolder, setCurrentFolder] = useState(() => {
    const folder = FolderStructure.find(
      (folder) => folder.title === clickedFolderTitle
    );
    if (!folder) {
      console.error(`Folder with title "${clickedFolderTitle}" not found.`);
      return { title: "", hasSubfolder: false, images: [] };
    }
    return folder;
  });

  const [parentFolder, setParentFolder] = useState(null);

  const handleClick = (folder) => {
    if (currentFolder.hasSubfolder && !parentFolder) {
      setParentFolder(currentFolder);
    }
    setContentFileName(folder.title.toUpperCase() + " INFO");
    setPreviewTitle(folder.title.toUpperCase());
    setCurrentFolder(folder);
  };

  const handleHeaderClick = () => {
    if (!parentFolder) {
      onClose();
    } else {
      setCurrentFolder(parentFolder);
      setParentFolder(null);
    }
  };

  const handleOnInfoClick = () => {
    onInfoClick(contentFileName, currentFolder.images[0].content);
  };

  const handleOnImageClick = (index) => {
    console.log("index", index)
    onImageClick(currentFolder.images, index, contentFileName, currentFolder.images[0].content, previewTitle);
  };

  const handleOnWinoInfoClick = () => {
    onWinoInfoClick();
  };

  return (
    <div className="mobile-finder-window">
      <div className='desktop-top-layout'>
          <TopBar onInformationClick={""} onMobileInformationClick={handleOnWinoInfoClick} onSearchClick={""} utilityClass={"finder-utility-dots"}/>
      </div>
      <div className="mobile-finder-header-container" onClick={handleHeaderClick}>
        <LeftArrow className="mobile-finder-header-arrow"/>
        <div className="mobile-finder-header">
          {currentFolder.title}
        </div>
      </div>
      <div className={`mobile-folder-${currentFolder.hasSubfolder && !parentFolder ? 'content' : 'images-grid'}`}>
        <div className={`mobile-folder-information ${currentFolder.hasSubfolder && !parentFolder ? 'disabled' : ''}`} onClick={handleOnInfoClick}>
            <div className="mobile-folder-image">
              <div className="mobile-folder-image-wrapper">
                <img src={InfoIcon} alt="Information File Icon" decoding='async' loading='lazy'/>
              </div>
              <div className="mobile-image-title">{contentFileName}</div>
            </div>
        </div>
        {currentFolder.hasSubfolder && !parentFolder ? (
          currentFolder.subfolders.map((subfolder) => (
            <div className="mobile-subfolders">
              <FolderAlt fill="#29a3ff" height="30px" style={{paddingRight: "0.7rem"}}/>
              <div
                key={subfolder.title}
                onClick={() => handleClick(subfolder)}
              >
                {subfolder.title}
              </div>
            </div>
          ))
        ) : (
          currentFolder.images.map((image) => (
              <div className="mobile-folder-image" key={image.id} onClick={() => handleOnImageClick((image.id-1))}>
                {image.isVideo ? (
                  <div className="finder-video-container">
                    <div className="finder-video-wrapper"/>
                    <iframe
                      title={image.title}
                      src={image.src + "&background=1&title=0&byline=0&portrait=0&playsinline=1&muted=1&controls=0&loop=1"}
                      width="100%"
                      height="auto"
                      loading="lazy"
                      decoding="async"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <MobileFolderImage key={image.id} image={image} />
                )}
              </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MobileFinderWindow;
