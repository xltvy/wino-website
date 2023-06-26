import React from "react";
// import Logo from "../../images/wino-logo2.webp";

const InformationContent = () => {
    return (
        <>
            <div style={{justifyContent: "center", alignItems: "center", width: "100%", display: "flex"}}>
                <img src={"https://imagedelivery.net/_5GQGJ9vgiST2e1R0CD7HQ/1658a380-92e5-4029-a188-b292e4456300/public"} alt="Wino Logo" style={{ width: "60%", height: "auto", paddingTop: "8px" }} decoding="async" loading="lazy"/>
            </div>
            <h3>CONTACT</h3>
            <br/>
            <p>For any inquires, please contact:</p>
            <br/>
            <p> <a style={{ color: "black" }} href="mailto:wino@studiowino.com">wino@studiowino.com</a> </p>
            <br/>
            <p>T: +90 212 807 08 67</p>
            <br/>
            <p>IG: <a style={{ color: "black" }} href='https://www.instagram.com/studiowino/' target="_blank" rel="noreferrer">@studiowino</a> </p>
            <br/>
            <h3>ABOUT</h3>
            <br/>
            <p>WINO is an award-winning creative studio inspired by human-centered outcomes.</p>
            <p style={{ paddingTop: "8px" }}>
                Here, visual communication strategies, graphic design and industrial products are created by us, for everybody.
                <br/>
                <br/>
                Also, under the name of GREEN, WINO will maintain its commitment to the environment, resources and ethical values as long as it provides services.
                <br/>
                <br/>
                The studio was launched in 2020 in Istanbul, in the heart of Europe and Asia. WINO was inevitable, because after all these years in the industry,
                the accumulation of all the experience and observations was calling for a new identity.
                <br/>
                <br/>
                In our very first year, we have worked with both big clients and tiny startups, on local and international market.
                <br/>
                <br/>
                We like the contamination between creative disciplines and diversity in general.
                We prefer to avoid doing the same thing twice, and prefer to go further what we’re already able to do. It is tiring but satisfying.
                <br/>
                <br/>
                Marketing & Visual Strategy, Graphic Design, Illustration, Identity, Packaging, Typography, Motion,
                Digitalization & Brand Socialization are what W love.
            </p>
        </>
    );
};

export default InformationContent;