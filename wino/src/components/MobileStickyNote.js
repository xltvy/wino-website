import React from 'react';
import './component_styles.css'

const MobileStickyNote = () => {

    return (
        <div className="mobile-sticky-note-layout">
            <div className="sticky-note-upper">
                <div className="sticky-note-button"/>
            </div>
            <div className="sticky-note-lower">
                <div className="sticky-note-body">
                    <p className='sticky-note-important'>The website is coming soon!</p>
                    <p className='sticky-note-text'>WINO is an award-winning creative studio inspired by human-centered outcomes. Here, visual communication strategies, campaigns, graphic design and industrial products are created by us, for all.</p>
                    
                </div>
            </div>
        </div>
    );

}

export default MobileStickyNote;