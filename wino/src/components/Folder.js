import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import FolderIcon from '../images/folder-regular.svg';
import FolderIconHover from '../images/folder-hover.svg';
import './component_styles.css'

const Folder = ({ title }) => {
    const [clicked, setClicked] = useState(false);
    const [imageSrc, setImageSrc] = useState(FolderIcon);
    const folderRef = useRef(null);
    //const [open, setOpen] = useState(false);
    // add onDoubleClick={() => setOpen(!open)} to folder-icon no-drag to toggle open/close

    const handleMouseEnter = () => {
        setImageSrc(FolderIconHover);
    };

    const handleMouseLeave = () => {
        if (clicked === false) {
            setImageSrc(FolderIcon);
        }
        if (imageSrc !== FolderIconHover) {
            setImageSrc(FolderIcon);
        }
    };

    const handleClick = () => {
        if (imageSrc === FolderIcon) {
            setImageSrc(FolderIconHover);
        }
        setClicked(!clicked);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (folderRef.current && !folderRef.current.contains(event.target)) {
            setImageSrc(FolderIcon);
            setClicked(false);
          }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [folderRef]);
    
    return (
        <Draggable>
            <div className="folder-layout" ref={folderRef}>
                <img className="folder-icon no-drag" src={imageSrc} alt="Folder Icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}/>
                <div className={`desktop-element-title${clicked ? ' clicked' : ''}`}>{title}</div>
                {/* {open && <div className="folder__content">{children}</div>} */}
            </div>
        </Draggable>
    );
};

export default Folder;