import React from "react";
import Logo from "../../images/client_logos/lunamerdin-logo.png";

const LunaMerdinContent = () => {
    return (
        <>
            <div style={{justifyContent: "center", alignItems: "center", width: "100%", display: "flex"}}>
                <img src={Logo} alt="Luna Merdin Logo" style={{ width: "60%", height: "auto", paddingTop: "8px" }} loading="lazy"/>
            </div>
            <p>From the moment we started our journey with Luna Merdin, we found ourselves in the heart of Mesopotamia. A long-established story based on the stories of Luna, the moon goddess, and Merdin, the pearl of Mesopotamia, became our starting point. Our first step was to write the story of these two important elements. And we revitalize the story of 1000 years... Inspired by this story we wrote the starting point of the brand; we created a suitable brand and visual identity for it. We have brought the story of these authentic melodies to the present day with modern touches.</p>
            <p style={{ paddingTop: "8px" }}>During the creation of the emblem, we took the strokes and geometric patterns hidden in the old mosques and churches and moved them to a very effective figure such as the moon to create its modern reflection. At the same time, we see a compass pointing east with a star right in the middle of the moon. And this is an element that reminds us that we are changing our course to Mesopotamia.</p>
            <p style={{ paddingTop: "8px" }}>At our logo stage, we touched on exactly these thoughts. We have achieved the same fluid integrity by creating our logo by reflecting this same oriental and modern blend.</p>
        </>
    );
};

export default LunaMerdinContent;