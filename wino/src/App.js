import React, { useState, lazy, Suspense } from 'react';

import './components/component_styles.css';
import './components/responsive_styles.css';

import BaseBackground from './images/background.jpg';

import Image1 from './images/client_desktop_images/nike.jpg';
import Image2 from './images/client_desktop_images/petra.jpg';
import Image3 from './images/client_desktop_images/mercy_born.gif';
import Image4 from './images/client_desktop_images/luna_merdin.jpg';
import Image5 from './images/client_desktop_images/ankh.jpg';
import Image6 from './images/client_desktop_images/fred.jpg';
import Image7 from './images/client_desktop_images/pinoli.jpg';

import NikeVideo from './components/video_iframes/NikeVideo';

const TopBar = lazy(() => import('./components/TopBar'));
const ContentPreviewWindow = lazy(() => import('./components/ContentPreviewWindow'));
const TxtFile = lazy(() => import('./components/TxtFile'));
const StickyNote = lazy(() => import('./components/StickyNote'));
const FullscreenImage = lazy(() => import('./components/FullscreenImage'));
const DesktopImage = lazy(() => import('./components/DesktopImage'));
const DesktopVideo = lazy(() => import('./components/DesktopVideo'));
const SearchBar = lazy(() => import('./components/SearchBar'));
const MobileInformation = lazy(() => import('./components/MobileInformation'));
const MobileContentPreviewWindow = lazy(() => import('./components/MobileContentPreviewWindow'));
const MobileStickyNote = lazy(() => import('./components/MobileStickyNote'));
const FinderWindow = lazy(() => import('./components/FinderWindow'));
const DesktopElement = lazy(() => import('./components/DesktopElement'));
const MobileElement = lazy(() => import('./components/MobileElement'));
const LoadingScreen = lazy(() => import('./components/LoadingScreen'));

const InformationContent = lazy(() => import('./components/info_texts/InformationContent'));
const NikeContent = lazy(() => import('./components/info_texts/NikeContent'));
const PetraContent = lazy(() => import('./components/info_texts/PetraContent'));
const MercyBornContent = lazy(() => import('./components/info_texts/MercyBornContent'));
const LunaMerdinContent = lazy(() => import('./components/info_texts/LunaMerdinContent'));
const AnkhContent = lazy(() => import('./components/info_texts/AnkhContent'));
const FredContent = lazy(() => import('./components/info_texts/FredContent'));
const PinoliContent = lazy(() => import('./components/info_texts/PinoliContent'));

const ContactIcon = lazy(() => import('./icons/ContactIconFinal.js'));
const InformationIcon = lazy(() => import('./icons/InformationIcon.js'));
const FolderAlt = lazy(() => import('./icons/FolderAlt.js'));


function App() {

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isInformationClicked, setIsInformationClicked] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [clickedImageIndex, setClickedImageIndex] = useState(null);
  const [isImageInformationClicked, setIsImageInformationClicked] = useState(false);
  const [isMobileImageInformationClicked, setIsMobileImageInformationClicked] = useState(false);
  const [isMobileInformationClicked, setIsMobileInformationClicked] = useState(false);
  const [isMobileImageClicked, setIsMobileImageClicked] = useState(false);
  const [isFolderClicked, setIsFolderClicked] = useState(false);
  const [clickedFolderTitle, setClickedFolderTitle] = useState("");

  const informationContent = <InformationContent/>;
  const nikeContent = <NikeContent/>;
  const petraContent = <PetraContent/>;
  const mercyBornContent = <MercyBornContent/>;
  const lunaMerdinContent = <LunaMerdinContent/>;
  const ankhContent = <AnkhContent/>;
  const fredContent = <FredContent/>;
  const pinoliContent = <PinoliContent/>;

  const nikeVideo = <NikeVideo/>;

  const images = [
    {
      id: 1,
      src: "https://player.vimeo.com/video/794071012?h=0fcbbb3720&portrait=1&playsinline=1&loop=1",
      alt: "Nike x Sneaks Up Air Force 1",
      title: "AF1xSUP_MOVIE",
      content: nikeContent,
      isVideo: true,
    },
    {
      id: 2,
      src: Image2,
      alt: 'Petra Roasting Co. Coffee',
      title: 'PETRA_BOX',
      content: petraContent,
      isVideo: false,
    },
    {
      id: 3,
      src: Image3,
      alt: 'Mercy Born',
      title: 'MERCYBORN',
      content: mercyBornContent,
      isVideo: false,
    },
    {
      id: 4,
      src: Image4,
      alt: 'Luna Merdin',
      title: 'LUNA MERDIN',
      content: lunaMerdinContent,
      isVideo: false,
    },
    {
      id: 5,
      src: Image5,
      alt: 'Ankh',
      title: 'ANKH',
      content: ankhContent,
      isVideo: false,
    },
    {
      id: 6,
      src: Image6,
      alt: 'Fred',
      title: 'FRED_BOX',
      content: fredContent,
      isVideo: false,
    },
    {
      id: 7,
      src: Image7,
      alt: 'Pinoli',
      title: 'PINOLI',
      content: pinoliContent,
      isVideo: false,
    },
  ];

  const handleContactDoubleClick = () => {
    window.location.href = 'mailto:wino@studiowino.com';
  }

  const handleFullscreenClick = (index) => {
    setSelectedImageIndex(index);
    setIsFullscreen(true);
  };

  const handleExitFullscreen = () => {
    setIsFullscreen(false);
  };

  const handleInformationClick = () => {
    setIsInformationClicked(true);
  };

  const handleInformationClose = () => {
    setIsInformationClicked(false);
  };

  const handleMobileInformationClick = () => {
    setIsMobileInformationClicked(true);
  };

  const handleMobileInformationClose = () => {
    setIsMobileInformationClicked(false);
  };

  const handleSearchClick = () => {
    setIsSearchClicked(true);
  };

  const handleSearchClose = () => {
    setIsSearchClicked(false);
  };

  const handleImageClick = (index) => {
    setIsImageClicked(true);
    setClickedImageIndex(index);
  };

  const handleMobileImageClick = (index) => {
    setClickedImageIndex(index);
    setIsMobileImageClicked(true);
  };

  const handleImageClose = () => {
    setIsImageClicked(false);
  };

  const handleMobileImageClose = () => {
    setIsMobileImageClicked(false);
  };

  const handleImageInformationClick = () => {
    setIsImageInformationClicked(true);
  };

  const handleMobileImageInformationClick = () => {
    setIsMobileImageInformationClicked(true);
  };

  const handleMobileImageInformationClose = () => {
    setIsMobileImageInformationClicked(false);
  };

  const handleViewedImageChange = (idx) => {
    setClickedImageIndex(idx);
  }

  const handleImageInformationClose = () => {
    setIsImageInformationClicked(false);
  };

  const handleFolderClick = (title) => {
    setClickedFolderTitle(title);
    setIsFolderClicked(true);
  };

  const handleFolderClose = () => {
    setIsFolderClicked(false);
  };

  return (
    <div className="App">
      <Suspense fallback={<LoadingScreen/>}>
      <div className="desktop-layout" style={{backgroundImage: `url(${BaseBackground})`}} >
          <div className='desktop-top-layout'>
            <TopBar onInformationClick={handleInformationClick} onMobileInformationClick={handleMobileInformationClick} onSearchClick={handleSearchClick}/>
          </div>
          <div className='mobile-search-container'>
            <SearchBar onSearchClose={handleSearchClose}/>
          </div>
          <div className='mobile-elements-container'>
            <div className="mobile-elements-container-wrapper">
              <div className="mobile-element">
                <div className='mobile-element-container' onClick={handleMobileInformationClick}>
                  <div className='mobile-element-image-container'>
                    <InformationIcon className='information-icon'/>
                  </div>
                  <div className='mobile-element-title-container'>
                    <div className='desktop-element-title'>Information</div>
                  </div>
                </div>
              </div>
              <div className="mobile-element">
                <a href="mailto: wino@studiowino.com" target="_blank" rel="noreferrer" className='mobile-element-container'>
                  <div className='mobile-element-image-container'>
                    <ContactIcon className='contact-icon'/>
                  </div>
                  <div className='mobile-element-title-container'>
                    <div className='desktop-element-title'>Contact</div>
                  </div>
                </a>
              </div>
              <MobileElement imageIndex={0} title={images[0].title} imageSrc={Image1} imageAlt={images[0].alt} onImageClick={handleMobileImageClick} loading="lazy"/>
              <MobileElement imageIndex={1} title={images[1].title} imageSrc={images[1].src} imageAlt={images[1].alt} onImageClick={handleMobileImageClick} loading="lazy"/>
              <MobileElement imageIndex={2} title={images[2].title} imageSrc={images[2].src} imageAlt={images[2].alt} onImageClick={handleMobileImageClick} loading="lazy"/>
              <MobileElement imageIndex={3} title={images[3].title} imageSrc={images[3].src} imageAlt={images[3].alt} onImageClick={handleMobileImageClick} loading="lazy"/>
              <MobileElement imageIndex={4} title={images[4].title} imageSrc={images[4].src} imageAlt={images[4].alt} onImageClick={handleMobileImageClick} loading="lazy"/>
              <MobileElement imageIndex={5} title={images[5].title} imageSrc={images[5].src} imageAlt={images[5].alt} onImageClick={handleMobileImageClick} loading="lazy"/>
              <MobileElement imageIndex={6} title={images[6].title} imageSrc={images[6].src} imageAlt={images[6].alt} onImageClick={handleMobileImageClick} loading="lazy"/>
            </div>
          </div>
          <div className='desktop-bottom-layout'>
            <div className='desktop-elements'>
              <div className='desktop-folders'>
                <div className="desktop-element" onDoubleClick={() => handleFolderClick("Upgrading")}>
                  <DesktopElement title="Upgrading" iconSrc={<FolderAlt className='folder-icon' height="45px" loading="lazy"/>}/>
                </div>
                <div className="desktop-element" onDoubleClick={() => handleFolderClick("Design")}>
                  <DesktopElement title="Design" iconSrc={<FolderAlt className='folder-icon' height="45px" loading="lazy"/>}/>
                </div>
                <div className="desktop-element" onDoubleClick={() => handleFolderClick("Sustainability")}>
                  <DesktopElement title="Sustainability" iconSrc={<FolderAlt className='folder-icon' height="45px" loading="lazy"/>}/>
                </div>
                <div className="desktop-element" onDoubleClick={() => handleFolderClick("Featured")}>
                  <DesktopElement title="Featured" iconSrc={<FolderAlt className='folder-icon' height="45px" loading="lazy"/>}/>
                </div>
                <div className="desktop-element" onDoubleClick={() => handleFolderClick("Branding")}>
                  <DesktopElement title="Branding" iconSrc={<FolderAlt className='folder-icon' height="45px" loading="lazy"/>}/>
                </div>
              </div>
              <div className='desktop-images'>
                <div className="desktop-element" onDoubleClick={handleInformationClick}>
                  <DesktopElement title="Information" iconSrc={<InformationIcon className='information-icon' height="58px"/>} onClick={handleInformationClick} loading="lazy"/>
                </div>
                <div className="desktop-element" onDoubleClick={handleContactDoubleClick}>
                  <DesktopElement title="Contact" iconSrc={<ContactIcon className='contact-icon' height="38px" style={{borderRadius: "3px"}} loading="lazy"/>}/>
                </div>
                <div style={{padding: "15px 0px"}}><DesktopImage imageIndex={1} imageSrc={images[1].src} title={images[1].title} onImageClick={handleImageClick} loading="lazy"/></div>
                <div style={{padding: "15px 0px"}}><DesktopImage imageIndex={4} imageSrc={images[4].src} title={images[4].title} onImageClick={handleImageClick} loading="lazy"/></div>
                <div style={{padding: "15px 0px"}}><DesktopImage imageIndex={5} imageSrc={images[5].src} title={images[5].title} onImageClick={handleImageClick} loading="lazy"/></div>
              </div>
              <div className='desktop-images'>
                <div style={{padding: "5px 0px", position: "relative", top: "112px", left: "85px"}}><DesktopVideo imageIndex={0} imageSrc={Image1} videoIframe={nikeVideo} onImageClick={handleImageClick} title={images[0].title}/></div>
                <div style={{padding: "5px 0px", position: "relative", bottom: "100px", left: "215px"}}><DesktopImage imageIndex={2} imageSrc={images[2].src} title={images[2].title} onImageClick={handleImageClick} loading="lazy"/></div>
                <div style={{padding: "5px 0px", position: "relative", top: "112px", left: "85px"}}><DesktopImage imageIndex={3} imageSrc={images[3].src} title={images[3].title} onImageClick={handleImageClick} loading="lazy"/></div>
                <div style={{padding: "5px 0px", position: "relative", top: "260px", left: "255px"}}><DesktopImage imageIndex={6} imageSrc={images[6].src} title={images[6].title} onImageClick={handleImageClick} loading="lazy"/></div>
              </div>
            </div>
            <StickyNote/>
            <MobileStickyNote/>
          </div>
          {isInformationClicked && (
            <div style={{ zIndex: "4000", top: "100px", left: "40vh", position: "absolute" }}>
              <TxtFile title={"Information"} content={informationContent} onInformationClose={handleInformationClose} />
            </div>
          )}
          {isMobileInformationClicked && (
            <div style={{ zIndex: "9999", top: "0", left: "0", right: "0", bottom: "0", position: "absolute" }}>
              <MobileInformation title={"Information"} content={informationContent} onInformationClose={handleMobileInformationClose} />
            </div>
          )}
          {isImageClicked && (
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "2000"}}>
              <ContentPreviewWindow images={images} onFullscreen={handleFullscreenClick} onClose={handleImageClose} currentIndex={clickedImageIndex} onInformationClick={handleImageInformationClick} onViewedImageChange={handleViewedImageChange} />
            </div>
          )}
          {isMobileImageClicked && (
            <div style={{ zIndex: "9000", top: "0", left: "0", right: "0", bottom: "0", position: "absolute" }}>
              <MobileContentPreviewWindow images={images} currentIndex={clickedImageIndex} onClose={handleMobileImageClose} onInformationClick={handleMobileImageInformationClick} onViewedImageChange={handleViewedImageChange} onFullscreen={handleFullscreenClick}/>
            </div>
          )}
          {isImageInformationClicked && (
            <div style={{ zIndex: "3000", top: "100px", left: "100vh", position: "absolute" }}>
              <TxtFile title={images[clickedImageIndex].title} content={images[clickedImageIndex].content} onInformationClose={handleImageInformationClose} />
            </div>
          )}
          {isMobileImageInformationClicked && (
            <div style={{ zIndex: "9999", top: "0", left: "0", right: "0", bottom: "0", position: "absolute" }}>
              <MobileInformation title={images[clickedImageIndex].title} content={images[clickedImageIndex].content} onInformationClose={handleMobileImageInformationClose} />
            </div>
          )}
          {isFullscreen && (
            <FullscreenImage imageSrc={images[selectedImageIndex].src} onExitFullscreen={handleExitFullscreen} />
          )}
          {isSearchClicked && (
            <SearchBar onSearchClose={handleSearchClose}/>
          )}
          {isFolderClicked && (<div style={{ zIndex: "1000", top: "0", left: "80px", right: "0", bottom: "0", position: "absolute" }}>
            <FinderWindow clickedFolderTitle={clickedFolderTitle} onClose={handleFolderClose}/>
          </div>)}
        </div>
        </Suspense>
    </div>
  );
}

export default App;