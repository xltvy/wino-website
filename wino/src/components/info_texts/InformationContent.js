import React from "react";
import Logo from "../../images/wino-logo2.png";

const InformationContent = () => {
    return (
        <>
            <div style={{justifyContent: "center", alignItems: "center", width: "100%", display: "flex"}}>
                <img src={Logo} alt="Wino Logo" style={{ width: "60%", height: "auto", paddingTop: "8px" }} decoding="async" loading="lazy"/>
            </div>
            <h3>CONTACT</h3>
            <p>For any inquires, please contact:</p>
            <p> <a style={{ color: "black" }} href="mailto:wino@studiowino.com">wino@studiowino.com</a> </p>
            <p/>
            <p>T: +90 212 807 08 67</p>
            <p>IG: <a style={{ color: "black" }} href='https://www.instagram.com/studiowino/' target="_blank" rel="noreferrer">@studiowino</a> </p>
            <p/>
            <h3>ABOUT</h3>
            <p>WINO is an award-winning creative studio inspired by human-centered outcomes.</p>
            <p style={{ paddingTop: "8px" }}>Here, visual communication strategies, graphic design and industrial products are created by us, for everybody.</p>
            <p style={{ paddingTop: "8px" }}>Also, under the name of GREEN, WINO will maintain its commitment to the environment, resources and ethical values as long as it provides services.</p>
            <p style={{ paddingTop: "8px" }}>The studio was launched in 2020 in Istanbul, in the heart of Europe and Asia. WINO was inevitable, because after all these years in the industry, the accumulation of all the experience and observations was calling for a new identity.</p>
            <p style={{ paddingTop: "8px" }}>In our very first year, we have worked with both big clients and tiny startups, on local and international market.</p>
            <p style={{ paddingTop: "8px" }}>We like the contamination between creative disciplines and diversity in general. We prefer to avoid doing the same thing twice, and prefer to go further what we’re already able to do. It is tiring but satisfying.</p>
            <p style={{ paddingTop: "8px" }}>Marketing & Visual Strategy, Graphic Design, Illustration, Identity, Packaging, Typography, Motion, Digitalization & Brand Socialization are what W love.</p>
        </>
    );
};

export default InformationContent;