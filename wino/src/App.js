import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Folder from './components/Folder';
import TopBar from './components/TopBar';
import TxtFile from './components/TxtFile';
import StickyNote from './components/StickyNote';
import DesktopBackground from './images/background.jpg';
import ContentPreviewWindow from './components/ContentPreviewWindow';
import FullscreenImage from './components/FullscreenImage';
import DesktopImage from './components/DesktopImage';
import SearchBar from './components/SearchBar';
import Image1 from './images/image1.jpg';
import Image2 from './images/image2.jpg';
import Image3 from './images/image3.jpg';
import Desktop from './components/Desktop';
import './components/component_styles.css';
import './components/responsive_styles.css';

function App() {

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isInformationClicked, setIsInformationClicked] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [clickedImageIndex, setClickedImageIndex] = useState(null);
  const [isImageInformationClicked, setIsImageInformationClicked] = useState(false);

  const images = [
    {
      id: 1,
      src: Image1,
      alt: 'Image 1',
      title: 'Cinema.jpg',
    description: ''
    },
    {
      id: 2,
      src: Image2,
      alt: 'Image 2',
      title: 'Dryer.jpg'
    },
    {
      id: 3,
      src: Image3,
      alt: 'Image 3',
      title: 'Green.jpg'
    }
  ]

  const handleFullscreenClick = (index) => {
    setSelectedImageIndex(index);
    setIsFullscreen(true);
  };

  const handleExitFullscreen = () => {
    setIsFullscreen(false);
  };

  const handleInformationClick = () => {
    console.log("Information clicked")
    setIsInformationClicked(true);
  };

  const handleInformationClose = () => {
    setIsInformationClicked(false);
  };

  const handleSearchClick = () => {
    console.log("Search clicked")
    setIsSearchClicked(true);
  };

  const handleSearchClose = () => {
    setIsSearchClicked(false);
  };

  const handleImageClick = (index) => {
    console.log("Image clicked")
    setIsImageClicked(true);
    setClickedImageIndex(index);
    console.log("Clicked image index: " + clickedImageIndex);
  };

  const handleImageClose = () => {
    setIsImageClicked(false);
  };

  const handleImageInformationClick = () => {
    console.log("Image information clicked")
    setIsImageInformationClicked(true);
  };

  const handleImageInformationClose = () => {
    setIsImageInformationClicked(false);
  };

  return (
    <div className="App">
      <div className="desktop-layout" style={{backgroundImage: `url(${DesktopBackground})`}}>
          <div className='desktop-top-layout'>
            <TopBar onInformationClick={handleInformationClick} onSearchClick={handleSearchClick}/>
          </div>
          <div className='mobile-search-container'>
            <SearchBar onSearchClose={handleSearchClose}/>
          </div>
          <div className='desktop-bottom-layout'>
            <div className='desktop-elements'>
              <div className='desktop-folders'>
                <div><Folder title={"Projects of Wino"} children={"This is folder 1"}></Folder></div>
                <div><Folder title={"Folder 2"} children={"This is folder 2"}></Folder></div>
                <div><Folder title={"Folder 3"} children={"This is folder 3"}></Folder></div>
              </div>
              <div className='desktop-images'>
                <div style={{padding: "5px"}}><DesktopImage imageIndex={0} imageSrc={images[0].src} title={images[0].title} onImageClick={handleImageClick}/></div>
                <div style={{padding: "5px"}}><DesktopImage imageIndex={1} imageSrc={images[1].src} title={images[1].title} onImageClick={handleImageClick}/></div>
                <div style={{padding: "5px"}}><DesktopImage imageIndex={2} imageSrc={images[2].src} title={images[2].title} onImageClick={handleImageClick}/></div>
              </div>
            </div>
            <StickyNote/>
          </div>
          {isInformationClicked && (
            <div style={{ zIndex: "1000", top: "100px", left: "40vh", position: "absolute" }}>
              <TxtFile title={"Information"} onInformationClose={handleInformationClose} />
            </div>
          )}
          {isImageClicked && (
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "2000"}}>
              <ContentPreviewWindow images={images} onFullscreen={handleFullscreenClick} onClose={handleImageClose} currentIndex={clickedImageIndex} onInformationClick={handleImageInformationClick} />
            </div>
          )}
          {isImageInformationClicked && (
            <div style={{ zIndex: "3000", top: "100px", left: "100vh", position: "absolute" }}>
              <TxtFile title={"Information"} onInformationClose={handleImageInformationClose} />
            </div>
          )}
          {isFullscreen && (
            <FullscreenImage imageSrc={images[selectedImageIndex].src} onExitFullscreen={handleExitFullscreen} />
          )}
          {isSearchClicked && (
            <SearchBar onSearchClose={handleSearchClose}/>
          )}
        </div>
    </div>
  );
}

export default App;