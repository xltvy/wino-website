import React from "react";
import Logo from "../../images/client_logos/ankh-logo.webp";

const AnkhContent = () => {
    return (
        <>
            <div style={{justifyContent: "center", alignItems: "center", width: "100%", display: "flex"}}>
                <img src={Logo} alt="Ankh Logo" style={{ width: "60%", height: "auto", paddingTop: "8px" }} decoding="async" loading="lazy"/>
            </div>
            <p>We have started our journey, and we have taken our inspiration from the depths of history and mythology as if it would tell a deep story. We see two main illustrated figures in this brand, Pegasus, and Simurg, where we aim to capture the harmony brought by contrast. The harmony of these contrasts emphasizes the importance of catching this harmony also in our daily lives. We have created this identity based on two genderless characters and processed it with precision so that it can appeal to everyone.</p>
            <p style={{ paddingTop: "8px" }}>The story we created through the dance of these two characters was one of the most basic elements that gave the spirit of our work. Yin Yang, the far eastern philosophical concept that describes how complementary, interconnected, and interdependent opposites can be in the natural world, has formed our main idea in linking our concepts and techniques during our creation process. Inspired by the Japanese ink style, we revived the pegasus and Simurg characters and enriched the branding with the eye, and checkerboard elements that we drew in the same technique.</p>
            <p style={{ paddingTop: "8px" }}>Our reasons for choosing colors were that the brand included both gold and silver products. we can say that jewelry has become a guide to colors.</p>
        </>
    );
};

export default AnkhContent;