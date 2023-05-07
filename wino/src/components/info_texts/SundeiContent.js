import React from "react";
import Logo from "../../images/client_logos/sundei-logo.webp";

const SundeiContent = () => {
    return (
        <>
            <div style={{justifyContent: "center", alignItems: "center", width: "100%", display: "flex"}}>
                <img src={Logo} alt="Sundei Logo" style={{ width: "60%", height: "auto", paddingTop: "8px" }} decoding="async" loading="lazy"/>
            </div>
            <p style={{ paddingTop: "12px" }}>As Studio WINO we have designed a brand identity system and packaging for the Istanbul based textile brand SUNDËI.</p>
            <p style={{ paddingTop: "8px" }}>Our journey with Sundëi began with the Greek God of the Sun, Helios. We were inspired by his power and gave it a feminine touch while designing. As its name also derives from our big shiny star, the Sun, it was a great starting point for us. While keeping in mind the brand’s values like respecting the Sun and planetary life, we have connected the Sun’s shine with Sundëi’s logo and packaging designs. We also have given a friendly and modern aura to the designs that come from the uniting vision of the brand.</p>
        </>
    );
};

export default SundeiContent;