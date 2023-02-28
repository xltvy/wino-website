import React from 'react';
import Draggable from 'react-draggable';
import './component_styles.css'

const StickyNote = () => {

    return (
        <Draggable>
            <div className="sticky-note-layout">
                <div className="sticky-note-upper">
                    <div className="sticky-note-button"/>
                </div>
                <div className="sticky-note-lower">
                    <div className="sticky-note-body">
                        <h3 className='sticky-note-header' style={{margin: "0px", padding: "0px"}}>PETRA COFFEE</h3>
                        <p className='sticky-note-text' style={{marginTop: "10px", padding: "0px"}}>-</p>
                        <p className='sticky-note-text' style={{margin: "0px", padding: "0px"}}>Gayrettepe, Hossohbet street</p>
                        <p className='sticky-note-text' style={{margin: "0px", padding: "0px"}}>34349</p>
                        <p className='sticky-note-text' style={{margin: "0px", padding: "0px"}}>Beşiktaş/İstanbul</p>
                        <a className='sticky-note-link' href='https://www.studiowino.com' style={{margin: "0px", padding: "0px"}}>Read more</a>
                    </div>
                </div>
            </div>
        </Draggable>
    );

}

export default StickyNote;