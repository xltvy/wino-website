import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';

import './components/component_styles.css';
import './components/responsive_styles.css';
import './App.css';

// import Image1 from './images/client_desktop_images/nike.webp';
// import Image2 from './finder/design/petra/07.webp';
import Image3 from './finder/branding/mercy_born/02.gif';
// import Image4 from './finder/featured/05.webp';
// import Image5 from './finder/featured/ankh.webp';
// import Image6 from './finder/branding/fred/07.webp';
// import Image7 from './finder/featured/pinoli.webp';

import NikeVideo from './components/video_iframes/NikeVideo';

const TopBar = lazy(() => import('./components/TopBar'));
const ContentPreviewWindow = lazy(() => import('./components/ContentPreviewWindow'));
const TxtFile = lazy(() => import('./components/TxtFile'));
const StickyNote = lazy(() => import('./components/StickyNote'));
const FullscreenImage = lazy(() => import('./components/FullscreenImage'));
const DesktopImage = lazy(() => import('./components/DesktopImage'));
const DesktopVideo = lazy(() => import('./components/DesktopVideo'));
const MobileInformation = lazy(() => import('./components/MobileInformation'));
const MobileContentPreviewWindow = lazy(() => import('./components/MobileContentPreviewWindow'));
const MobileStickyNote = lazy(() => import('./components/MobileStickyNote'));
const FinderWindow = lazy(() => import('./components/FinderWindow'));
const DesktopElement = lazy(() => import('./components/DesktopElement'));
const MobileElement = lazy(() => import('./components/MobileElement'));
// const LoadingScreen = lazy(() => import('./components/LoadingScreen'));
const MobileDesktopElement = lazy(() => import('./components/MobileDesktopElement'));
const MobileFinderWindow = lazy(() => import('./components/MobileFinderWindow'));
const MusicPlayer = lazy(() => import('./components/MusicPlayer'));
const MusicPlayerMobile = lazy(() => import('./components/MusicPlayerMobile'));

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

// Desktop video related imports
// import Video1 from './images/desktop-film.mp4';
// import Video2 from './images/desktop-film-reversed.mp4';
// import DesktopBackground from './images/desktop-bg.png';
// import DesktopEmptyBackground from './images/desktop-empty-bg.png';

function App() {

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isInformationClicked, setIsInformationClicked] = useState(false);
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [clickedImageIndex, setClickedImageIndex] = useState(null);
  const [isImageInformationClicked, setIsImageInformationClicked] = useState(false);
  const [isMobileImageInformationClicked, setIsMobileImageInformationClicked] = useState(false);
  const [isMobileInformationClicked, setIsMobileInformationClicked] = useState(false);
  const [isMobileImageClicked, setIsMobileImageClicked] = useState(false);

  const [previewTitle, setPreviewTitle] = useState("");

  const [isFolderClicked, setIsFolderClicked] = useState(false);
  const [clickedFolderTitle, setClickedFolderTitle] = useState("");
  const [clickedFolderImages, setClickedFolderImages] = useState([]);
  const [clickedFolderSelectedImageIndex, setClickedFolderSelectedImageIndex] = useState(null);
  const [isFolderImageClicked, setIsFolderImageClicked] = useState(false);
  const [isFolderImageFullscreenClicked, setIsFolderImageFullscreenClicked] = useState(false);
  const [isFolderInfoClicked, setIsFolderInfoClicked] = useState(false);
  const [clickedFolderInfoTitle, setClickedFolderInfoTitle] = useState(null);
  const [clickedFolderInfoContent, setClickedFolderInfoContent] = useState(null);

  const [isMobileFolderClicked, setIsMobileFolderClicked] = useState(false);
  const [isMobileFolderInfoClicked, setIsMobileFolderInfoClicked] = useState(false);
  const [clickedMobileFolderInfoTitle, setClickedMobileFolderInfoTitle] = useState("");
  const [clickedMobileFolderInfoContent, setClickedMobileFolderInfoContent] = useState(null);
  const [isMobileFolderImageClicked, setIsMobileFolderImageClicked] = useState(false);
  const [clickedMobileFolderImages, setClickedMobileFolderImages] = useState([]);
  const [clickedMobileFolderSelectedImageIndex, setClickedMobileFolderSelectedImageIndex] = useState(null);
  const [mobileImagePreviewTitle, setMobileImagePreviewTitle] = useState("");
  const [isMobileFolderImageInfoClicked, setIsMobileFolderImageInfoClicked] = useState(false);
  const [clickedMobileFolderImageInfoTitle, setClickedMobileFolderImageInfoTitle] = useState("");
  const [clickedMobileFolderImageInfoContent, setClickedMobileFolderImageInfoContent] = useState(null);
  const [isMobileFolderImageFullscreenClicked, setIsMobileFolderImageFullscreenClicked] = useState(false);
  const [mobileFolderImageFullscreenSrc, setMobileFolderImageFullscreenSrc] = useState(null);

  // Desktop video related constants
  // const [desktopSource] = useState(DesktopBackground);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [currentVideo, setCurrentVideo] = useState(1);
  // const video1Ref = useRef(null);
  // const video2Ref = useRef(null);

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
      title: "af1xsup_movie",
      content: nikeContent,
      isVideo: true,
    },
    {
      id: 2,
      src: "https://imagedelivery.net/_5GQGJ9vgiST2e1R0CD7HQ/473ef696-3d3a-4be8-67f5-aa5e4524af00/public",
      alt: 'Petra Roasting Co. Coffee',
      title: 'petra_box',
      content: petraContent,
      isVideo: false,
    },
    {
      id: 3,
      src: Image3,
      alt: 'Mercy Born',
      title: 'mercyborn',
      content: mercyBornContent,
      isVideo: false,
    },
    {
      id: 4,
      src: "https://imagedelivery.net/_5GQGJ9vgiST2e1R0CD7HQ/85350992-a68d-42ef-b6e8-6dd9d1a4f500/public",
      alt: 'Karnas',
      title: 'karnas',
      content: null,
      isVideo: false,
    },
    {
      id: 5,
      src: "https://imagedelivery.net/_5GQGJ9vgiST2e1R0CD7HQ/81e9ca7c-1a87-4b45-187c-03e4dd73ee00/public",
      alt: 'Ankh',
      title: 'ankh',
      content: ankhContent,
      isVideo: false,
    },
    {
      id: 6,
      src: "https://imagedelivery.net/_5GQGJ9vgiST2e1R0CD7HQ/61d6d11c-4508-43ad-552a-fa8b8686fd00/public",
      alt: 'Fred',
      title: 'fred_box',
      content: fredContent,
      isVideo: false,
    },
    {
      id: 7,
      src: "https://imagedelivery.net/_5GQGJ9vgiST2e1R0CD7HQ/bd1a17e3-cfbb-4ce3-b1d0-79fd64cdf900/public",
      alt: 'Pinoli',
      title: 'pinoli',
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
    if (isFolderImageFullscreenClicked) {
      setIsFolderImageFullscreenClicked(false);
    }
    if (isFullscreen) {
      setIsFullscreen(false);
    }
    if (isMobileFolderImageFullscreenClicked) {
      setIsMobileFolderImageFullscreenClicked(false);
    }
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
    if (isMobileInformationClicked) {
      setIsMobileInformationClicked(false);
    }
    if (isMobileFolderInfoClicked) {
      setIsMobileFolderInfoClicked(false);
    }
    if (isMobileFolderImageInfoClicked) {
      setIsMobileFolderImageInfoClicked(false);
    }
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
    if (isMobileImageClicked) {
      setIsMobileImageClicked(false);
    }
    if (isMobileFolderImageClicked) {
      setIsMobileFolderImageClicked(false);
    }
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
    if (isFolderInfoClicked) {
      setIsFolderInfoClicked(false);
    }
    if (isImageInformationClicked) {
      setIsImageInformationClicked(false);
    }
  };

  const handleFolderClick = (title) => {
    setClickedFolderTitle(title);
    setIsFolderClicked(true);
  };

  const handleFolderClose = () => {
    setIsFolderClicked(false);
  };

  const handleFolderImageClick = (images, index, title, content, previewTitle) => {
    setClickedFolderImages(images);
    setClickedFolderSelectedImageIndex(index);
    setClickedFolderInfoTitle(title);
    setClickedFolderInfoContent(content);
    setPreviewTitle(previewTitle);
    setIsFolderImageClicked(true);
  };

  const handleFolderImageClose = () => {
    setIsFolderImageClicked(false);
  };

  const handleFolderInfoClick = (title, content) => {
    setClickedFolderInfoTitle(title);
    setClickedFolderInfoContent(content);
    setIsFolderInfoClicked(true);
  };

  const handleFolderImageInfoClick = () => {
    setIsFolderInfoClicked(true);
  };

  const handleFolderImageFullscreenClick = (index) => {
    setClickedFolderSelectedImageIndex(index);
    setIsFolderImageFullscreenClicked(true);
  };

  const handleMobileFolderClick = (title) => {
    setClickedFolderTitle(title);
    setIsMobileFolderClicked(true);
  };

  const handleMobileFolderClose = () => {
    setIsMobileFolderClicked(false);
  };

  const handleMobileFolderInfoClick = (title, content) => {
    setClickedMobileFolderInfoTitle(title);
    setClickedMobileFolderInfoContent(content);
    setIsMobileFolderInfoClicked(true);
  };

  const handleMobileFolderImageClick = (images, index, infoTitle, content, previewTitle) => {
    setClickedMobileFolderImages(images);
    setClickedMobileFolderSelectedImageIndex(index);
    setClickedMobileFolderInfoTitle(infoTitle);
    setClickedMobileFolderInfoContent(content);
    setMobileImagePreviewTitle(previewTitle);
    setIsMobileFolderImageClicked(true);
  };

  const handleMobileImageInfoClick = (title, content) => {
    setClickedMobileFolderImageInfoTitle(title);
    setClickedMobileFolderImageInfoContent(content);
    setIsMobileFolderImageInfoClicked(true);
  };

  const handleMobileFolderImageFullscreenClick = (imageSrc) => {
    setMobileFolderImageFullscreenSrc(imageSrc);
    setIsMobileFolderImageFullscreenClicked(true);
  };

  // Desktop video related functions start
//   const handleDesktopFilmToggle = () => {
//     const video1 = video1Ref.current;
//     const video2 = video2Ref.current;

//     if (currentVideo === 1) {
//       setCurrentVideo(1);
//       video2.style.display = 'none';
//       video1.style.display = 'block';
//       video1.play();
//       video1.addEventListener('ended', () => {
//         console.log("Video 2 loaded");
//         video2.load();
//         video1.style.display = 'none';
//         video2.style.display = 'block';
//         setCurrentVideo(2);
//       });
//     } else {
//       setCurrentVideo(2);
//       video1.style.display = 'none';
//       video2.style.display = 'block';
//       video2.play();
//       video2.addEventListener('ended', () => {
//         console.log("Video 1 loaded");
//         video1.load();
//         video2.style.display = 'none';
//         video1.style.display = 'block';
//         setCurrentVideo(1);
//       });
//     }

//     setIsPlaying(!isPlaying);
// };

//   useEffect(() => {
//     const video1 = video1Ref.current;
//     const video2 = video2Ref.current;
//     const handleEnded = () => {};

//     video1.addEventListener('ended', handleEnded);
//     video2.addEventListener('ended', handleEnded);

//     return () => {
//       video1.removeEventListener('ended', handleEnded);
//       video2.removeEventListener('ended', handleEnded);
//     };
//   }, []);
  // Desktop video related functions end
    
  return (
    <div className="root">
      <Suspense>
      <div className="desktop-layout">
          {/* <div className="desktop-film-container">
            <video ref={video1Ref} className='desktop-film' poster={DesktopBackground} autoPlay={false} loop={false} muted={true} playsinline="true" disablePictureInPicture="true" preload='auto' type="video/mp4" style={{ display: currentVideo === 1 ? 'block' : 'none' }}>
              <source src={Video1} type="video/mp4" />
            </video>
            <video ref={video2Ref} className='desktop-film' poster={DesktopEmptyBackground} autoPlay={false} loop={false} muted={true} playsinline="true" disablePictureInPicture="true" preload='auto' type="video/mp4" style={{ display: currentVideo === 2 ? 'block' : 'none' }}>
              <source src={Video2} type="video/mp4" />
            </video>
          </div> */}
          {!isMobileFolderClicked && <div className='desktop-top-layout'>
          {/* <TopBar onInformationClick={handleInformationClick} onMobileInformationClick={handleMobileInformationClick} onDesktopFilmToggle={handleDesktopFilmToggle}/> */}
          <TopBar onInformationClick={handleInformationClick} onMobileInformationClick={handleMobileInformationClick} utilityClass={"top-bar-utility-dots"}/>
          </div>}
          <MusicPlayer/>
          <MusicPlayerMobile/>
          <div className='mobile-elements-container'>
            <div className="mobile-elements-container-wrapper">
              <MobileDesktopElement children={<InformationIcon className='information-icon' decoding="async" loading="lazy"/>} title='Information' onClick={handleMobileInformationClick}/>
              <a href="mailto: wino@studiowino.com" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                <MobileDesktopElement children={<ContactIcon className='contact-icon' decoding="async" loading="lazy"/>} title='Contact' onClick={""}/>
              </a>
              <MobileDesktopElement children={<FolderAlt className='mobile-folder-icon' decoding="async" loading="lazy"/>} title='Featured' onClick={handleMobileFolderClick}/>
              <MobileDesktopElement children={<FolderAlt className='mobile-folder-icon' decoding="async" loading="lazy"/>} title='Campaigns' onClick={handleMobileFolderClick}/>
              {/* <MobileDesktopElement children={<FolderAlt className='mobile-folder-icon' decoding="async" loading="lazy"/>} title='Upgrading' onClick={handleMobileFolderClick}/> */}
              <MobileDesktopElement children={<FolderAlt className='mobile-folder-icon' decoding="async" loading="lazy"/>} title='Design' onClick={handleMobileFolderClick}/>
              {/* <MobileDesktopElement children={<FolderAlt className='mobile-folder-icon' decoding="async" loading="lazy"/>} title='Branding' onClick={handleMobileFolderClick}/> */}
              <MobileDesktopElement children={<FolderAlt className='mobile-folder-icon' decoding="async" loading="lazy"/>} title='Strategy' onClick={handleMobileFolderClick}/>
              {/* <MobileDesktopElement children={<FolderAlt className='mobile-folder-icon' decoding="async" loading="lazy"/>} title='Team' onClick={handleMobileFolderClick}/> */}

              <MobileElement imageIndex={0} title={images[0].title} imageSrc={"https://imagedelivery.net/_5GQGJ9vgiST2e1R0CD7HQ/ef88e728-c0c4-46a5-8be4-741b9a4bda00/public"} imageAlt={images[0].alt} onImageClick={handleMobileImageClick} loading="lazy"/>
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
                <div className="desktop-element" onDoubleClick={() => handleFolderClick("Featured")}>
                  <DesktopElement title="Featured" iconSrc={<FolderAlt className='folder-icon' height="45px" decoding="async" loading="lazy"/>}/>
                </div>
                <div className="desktop-element" onDoubleClick={() => handleFolderClick("Campaigns")}>
                  <DesktopElement title="Campaigns" iconSrc={<FolderAlt className='folder-icon' height="45px" loading="lazy"/>}/>
                </div>
                {/* <div className="desktop-element" onDoubleClick={() => handleFolderClick("Upgrading")}>
                  <DesktopElement title="Upgrading" iconSrc={<FolderAlt className='folder-icon' height="45px" loading="lazy"/>}/>
                </div> */}
                <div className="desktop-element" onDoubleClick={() => handleFolderClick("Design")}>
                  <DesktopElement title="Design" iconSrc={<FolderAlt className='folder-icon' height="45px" loading="lazy"/>}/>
                </div>
                {/* <div className="desktop-element" onDoubleClick={() => handleFolderClick("Branding")}>
                  <DesktopElement title="Branding" iconSrc={<FolderAlt className='folder-icon' height="45px" loading="lazy"/>}/>
                </div> */}
                <div className="desktop-element" onDoubleClick={() => handleFolderClick("Strategy")}>
                  <DesktopElement title="Strategy" iconSrc={<FolderAlt className='folder-icon' height="45px" loading="lazy"/>}/>
                </div>
              </div>
              <div className='desktop-images'>
                {/* <div className="desktop-element" onDoubleClick={() => handleFolderClick("Team")}>
                  <DesktopElement title="Team" iconSrc={<FolderAlt className='folder-icon' height="45px" decoding="async" loading="lazy"/>}/>
                </div> */}
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
                <div style={{padding: "5px 0px", position: "relative", top: "112px", left: "85px"}}><DesktopVideo imageIndex={0} imageSrc={"https://imagedelivery.net/_5GQGJ9vgiST2e1R0CD7HQ/ef88e728-c0c4-46a5-8be4-741b9a4bda00/public"} videoIframe={nikeVideo} onImageClick={handleImageClick} title={images[0].title}/></div>
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
            <div style={{ display: "flex", alignItems: "center", zIndex: "2000", position: "relative"}}>
              <ContentPreviewWindow images={images} onFullscreen={handleFullscreenClick} onClose={handleImageClose} currentIndex={clickedImageIndex} onInformationClick={handleImageInformationClick} onViewedImageChange={handleViewedImageChange} contentTitle="Featured" />
            </div>
          )}
          {isMobileImageClicked && (
            <div style={{ zIndex: "9000", top: "0", left: "0", right: "0", bottom: "0", position: "absolute" }}>
              <MobileContentPreviewWindow images={images} currentIndex={clickedImageIndex} onClose={handleMobileImageClose} onInformationClick={handleMobileImageInformationClick} prevInfo={false} onViewedImageChange={handleViewedImageChange} prevTitle={"Featured"} onFullscreen={handleFullscreenClick}/>
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
          {isFolderClicked && (
            <div style={{ display: "flex", alignItems: "center", zIndex: "1000", position: "relative"}}>
              <FinderWindow clickedFolderTitle={clickedFolderTitle} onClose={handleFolderClose} onImageClick={handleFolderImageClick} onFolderInfoClick={handleFolderInfoClick} onInfoClick={handleInformationClick}/>
            </div>
          )}
          {isFolderImageClicked && (
            <div style={{ display: "flex", alignItems: "center", zIndex: "2000", position: "relative"}}>
              <ContentPreviewWindow images={clickedFolderImages} onFullscreen={handleFolderImageFullscreenClick} onClose={handleFolderImageClose} currentIndex={clickedFolderSelectedImageIndex} onInformationClick={handleFolderImageInfoClick} onViewedImageChange={handleViewedImageChange} contentTitle={previewTitle} />
            </div>
          )}
          {isFolderImageFullscreenClicked && (
            <FullscreenImage imageSrc={clickedFolderImages[clickedFolderSelectedImageIndex].src} onExitFullscreen={handleExitFullscreen} />
          )}
          {isFolderInfoClicked && (
            <div style={{ zIndex: "3000", top: "100px", left: "100vh", position: "absolute" }}>
              <TxtFile title={clickedFolderInfoTitle} content={clickedFolderInfoContent} onInformationClose={handleImageInformationClose} />
            </div>
          )}
          {isMobileFolderClicked && (
            <div style={{ zIndex: "2000", top: "0px", left: "0px", right: "0px", bottom: "0px", position: "absolute", height: "100%", width: "100%" }}>
              <MobileFinderWindow clickedFolderTitle={clickedFolderTitle} onClose={handleMobileFolderClose} onInfoClick={handleMobileFolderInfoClick} onImageClick={handleMobileFolderImageClick} onWinoInfoClick={handleMobileInformationClick}/>
            </div>
          )}
          {isMobileFolderInfoClicked && (
            <div style={{ zIndex: "9999", top: "0", left: "0", right: "0", bottom: "0", position: "absolute" }}>
              <MobileInformation title={clickedMobileFolderInfoTitle} content={clickedMobileFolderInfoContent} onInformationClose={handleMobileInformationClose} />
            </div>
          )}
          {isMobileFolderImageClicked && (
            <div style={{ zIndex: "9000", top: "0", left: "0", right: "0", bottom: "0", position: "absolute" }}>
              <MobileContentPreviewWindow images={clickedMobileFolderImages} currentIndex={clickedMobileFolderSelectedImageIndex} onClose={handleMobileImageClose} onInformationClick={handleMobileImageInfoClick} prevInfo={true} prevTitle={mobileImagePreviewTitle} onFullscreen={handleMobileFolderImageFullscreenClick}/>
            </div>
          )}
          {isMobileFolderImageInfoClicked && (
            <div style={{ zIndex: "9999", top: "0", left: "0", right: "0", bottom: "0", position: "absolute" }}>
              <MobileInformation title={clickedMobileFolderImageInfoTitle} content={clickedMobileFolderImageInfoContent} onInformationClose={handleMobileInformationClose} />
            </div>
          )}
          {isMobileFolderImageFullscreenClicked && (
            <FullscreenImage imageSrc={mobileFolderImageFullscreenSrc} onExitFullscreen={handleExitFullscreen} />
          )}
        </div>
        </Suspense>
    </div>
  );
}

export default App;