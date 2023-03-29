import React, { useState, useRef, useEffect } from 'react';
import Folder from './components/Folder';
import TopBar from './components/TopBar';
import TxtFile from './components/TxtFile';
import StickyNote from './components/StickyNote';
import DesktopBackground from './images/desktop-bg.png';
import DesktopEmptyBackground from './images/desktop-empty-bg.png';
import ContentPreviewWindow from './components/ContentPreviewWindow';
import FullscreenImage from './components/FullscreenImage';
import DesktopImage from './components/DesktopImage';
import DesktopVideo from './components/DesktopVideo';
import SearchBar from './components/SearchBar';
import MobileInformation from './components/MobileInformation';
import MobileContentPreviewWindow from './components/MobileContentPreviewWindow';
import Video1 from './images/desktop-film.mp4';
import Video2 from './images/desktop-film-reversed.mp4';
import ContactIcon from './icons/ContactIconFinal.js';
import InformationIcon from './icons/InformationIcon.js';
import Image1 from './images/nike.jpg';
import Image2 from './images/petra.jpg';
import Image3 from './images/mercy_born.jpg';
import Image4 from './images/luna_merdin.jpg';
import Image5 from './images/ankh.jpg';
import Image6 from './images/fred.jpg';
import Image7 from './images/pinoli.jpg';
import DesktopElement from './components/DesktopElement';
import MobileElement from './components/MobileElement';
import './components/component_styles.css';
import './components/responsive_styles.css';

import InformationContent from './components/info_texts/InformationContent';
import NikeContent from './components/info_texts/NikeContent';
import PetraContent from './components/info_texts/PetraContent';
import MercyBornContent from './components/info_texts/MercyBornContent';
import LunaMerdinContent from './components/info_texts/LunaMerdinContent';
import AnkhContent from './components/info_texts/AnkhContent';
import FredContent from './components/info_texts/FredContent';
import PinoliContent from './components/info_texts/PinoliContent';

import NikeVideo from './components/video_iframes/NikeVideo';

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
  const [desktopSource] = useState(DesktopBackground);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(1);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

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
    console.log("Information clicked")
    setIsInformationClicked(true);
  };

  const handleInformationClose = () => {
    setIsInformationClicked(false);
  };

  const handleMobileInformationClick = () => {
    console.log("Mobile information clicked")
    setIsMobileInformationClicked(true);
  };

  const handleMobileInformationClose = () => {
    setIsMobileInformationClicked(false);
  };

  const handleSearchClick = () => {
    console.log("Search clicked")
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
    console.log("Mobile image information clicked and cliced image index is: " + clickedImageIndex);
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

  const handleDesktopFilmToggle = () => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;

    if (currentVideo === 1) {
      setCurrentVideo(1);
      video2.style.display = 'none';
      video1.style.display = 'block';
      video1.play();
      video1.addEventListener('ended', () => {
        console.log("Video 2 loaded");
        video2.load();
        video1.style.display = 'none';
        video2.style.display = 'block';
        setCurrentVideo(2);
      });
    } else {
      setCurrentVideo(2);
      video1.style.display = 'none';
      video2.style.display = 'block';
      video2.play();
      video2.addEventListener('ended', () => {
        console.log("Video 1 loaded");
        video1.load();
        video2.style.display = 'none';
        video1.style.display = 'block';
        setCurrentVideo(1);
      });
    }

    setIsPlaying(!isPlaying);
};

  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    const handleEnded = () => {};

    video1.addEventListener('ended', handleEnded);
    video2.addEventListener('ended', handleEnded);

    return () => {
      video1.removeEventListener('ended', handleEnded);
      video2.removeEventListener('ended', handleEnded);
    };
  }, []);
  

  return (
    <div className="App">
      <div className="desktop-layout" style={{backgroundImage: `url(${desktopSource})`}} >
          <div className="desktop-film-container">
            <video ref={video1Ref} className='desktop-film' poster={DesktopBackground} autoPlay={false} loop={false} muted style={{ display: currentVideo === 1 ? 'block' : 'none' }}>
              <source src={Video1} type="video/mp4" />
            </video>
            <video ref={video2Ref} className='desktop-film' poster={DesktopEmptyBackground} autoPlay={false} loop={false} muted style={{ display: currentVideo === 2 ? 'block' : 'none' }}>
              <source src={Video2} type="video/mp4" />
            </video>
          </div>
          <div className='desktop-top-layout'>
            <TopBar onInformationClick={handleInformationClick} onMobileInformationClick={handleMobileInformationClick} onSearchClick={handleSearchClick} onDesktopFilmToggle={handleDesktopFilmToggle}/>
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
              <MobileElement imageIndex={0} title={images[0].title} imageSrc={Image1} imageAlt={images[0].alt} onImageClick={handleMobileImageClick}/>
              <MobileElement imageIndex={1} title={images[1].title} imageSrc={images[1].src} imageAlt={images[1].alt} onImageClick={handleMobileImageClick}/>
              <MobileElement imageIndex={2} title={images[2].title} imageSrc={images[2].src} imageAlt={images[2].alt} onImageClick={handleMobileImageClick}/>
              <MobileElement imageIndex={3} title={images[3].title} imageSrc={images[3].src} imageAlt={images[3].alt} onImageClick={handleMobileImageClick}/>
              <MobileElement imageIndex={4} title={images[4].title} imageSrc={images[4].src} imageAlt={images[4].alt} onImageClick={handleMobileImageClick}/>
              <MobileElement imageIndex={5} title={images[5].title} imageSrc={images[5].src} imageAlt={images[5].alt} onImageClick={handleMobileImageClick}/>
              <MobileElement imageIndex={6} title={images[6].title} imageSrc={images[6].src} imageAlt={images[6].alt} onImageClick={handleMobileImageClick}/>
            </div>
          </div>
          <div className='desktop-bottom-layout'>
            <div className='desktop-elements'>
              <div className='desktop-folders'>
                <div className="desktop-element" onDoubleClick={handleInformationClick}>
                  <DesktopElement title="Information" iconSrc={<InformationIcon className='information-icon' height="58px"/>} onClick={handleInformationClick}/>
                </div>
                <div className="desktop-element" onDoubleClick={handleContactDoubleClick}>
                  <DesktopElement title="Contact" iconSrc={<ContactIcon className='contact-icon' height="38px" style={{borderRadius: "3px"}}/>}/>
                </div>
                <div style={{display: "none"}}><Folder title={"Projects of Wino"} children={"This is folder 1"}></Folder></div>
                <div style={{display: "none"}}><Folder title={"Folder 2"} children={"This is folder 2"}></Folder></div>
                <div style={{display: "none"}}><Folder title={"Folder 3"} children={"This is folder 3"}></Folder></div>
              </div>
              <div className='desktop-images'>
                <div style={{padding: "5px 0px"}}><DesktopVideo imageIndex={0} imageSrc={Image1} videoIframe={nikeVideo} onImageClick={handleImageClick} title={images[0].title}/></div>
                <div style={{padding: "5px 0px"}}><DesktopImage imageIndex={1} imageSrc={images[1].src} title={images[1].title} onImageClick={handleImageClick}/></div>
                <div style={{padding: "5px 0px"}}><DesktopImage imageIndex={2} imageSrc={images[2].src} title={images[2].title} onImageClick={handleImageClick}/></div>
                <div style={{padding: "5px 0px"}}><DesktopImage imageIndex={3} imageSrc={images[3].src} title={images[3].title} onImageClick={handleImageClick}/></div>
                <div style={{padding: "5px 0px"}}><DesktopImage imageIndex={4} imageSrc={images[4].src} title={images[4].title} onImageClick={handleImageClick}/></div>
                <div style={{padding: "5px 0px"}}><DesktopImage imageIndex={5} imageSrc={images[5].src} title={images[5].title} onImageClick={handleImageClick}/></div>
                <div style={{padding: "5px 0px"}}><DesktopImage imageIndex={6} imageSrc={images[6].src} title={images[6].title} onImageClick={handleImageClick}/></div>
              </div>
            </div>
            <StickyNote/>
          </div>
          {isInformationClicked && (
            <div style={{ zIndex: "1000", top: "100px", left: "40vh", position: "absolute" }}>
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
              {/* <MobileContentPreviewWindow images={images} onFullscreen={handleFullscreenClick} onClose={} currentIndex={1} onInformationClick={handleImageInformationClick} onViewedImageChange={handleViewedImageChange} /> */}
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
        </div>
    </div>
  );
}

export default App;