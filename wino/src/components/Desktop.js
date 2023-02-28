import React from 'react';
import Folder from './Folder';
import TopBar from './TopBar';
import TxtFile from './TxtFile';
import StickyNote from './StickyNote';
import DesktopBackground from '../images/desktop-bg.jpg';
import ContentPreviewWindow from './ContentPreviewWindow';

const Desktop = () => {


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
                <ContentPreviewWindow title={"Petra Coffee"}/>
                <StickyNote/>
            </div>
        </div>
    );
};

export default Desktop;