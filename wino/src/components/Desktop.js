import React, { useState } from 'react';
import Folder from './Folder';
import TopBar from './TopBar';
import TxtFile from './TxtFile';
import StickyNote from './StickyNote';
import DesktopBackground from '../images/desktop-bg.jpg';
import ContentPreviewWindow from './ContentPreviewWindow';
import FullscreenImage from './FullscreenImage';
import Image1 from '../images/image1.jpg';
import Image2 from '../images/image2.jpg';
import Image3 from '../images/image3.jpg';

const Desktop = () => {

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const images = [
        {
            id: 1,
            src: Image1,
            alt: 'Image 1',
            title: 'Cinema.jpg'
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

    console.log(selectedImageIndex);
    console.log(isFullscreen);

    return (
        <div className="desktop-layout" style={{backgroundImage: `url(${DesktopBackground})`}}>
            <div className='desktop-top-layout'>
                <TopBar/>
            </div>
            <div className='desktop-bottom-layout'>
                <div><Folder title={"Projects of Wino"} children={"This is folder 1"}></Folder></div>
                <div><Folder title={"Folder 2"} children={"This is folder 2"}></Folder></div>
                <div><Folder title={"Folder 3"} children={"This is folder 3"}></Folder></div>
                {/* <TxtFile title={"Information"}/> */}
                <ContentPreviewWindow images={images} onFullscreen={handleFullscreenClick} />
                <StickyNote/>
            </div>
            {isFullscreen && (
                <FullscreenImage imageSrc={images[selectedImageIndex].src} onExitFullscreen={handleExitFullscreen} />
            )}
        </div>
    );
};

export default Desktop;