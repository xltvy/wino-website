import React from "react";
import Logo from "../../images/client_logos/nike-logo.png";

const NikeContent = () => {
    return (
        <>
            <img src={Logo} alt="Nike Logo" style={{ width: "100%", height: "auto", paddingTop: "8px" }} loading="lazy"/>
            <p>As children growing up in a culture where the street is the home of all our memories and dance is a part of every celebration, yet we went to the places we needed to reach and always come back again to our community, to the neighborhood with the Air Force 1.</p>
            <p style={{ paddingTop: "8px" }}>Here is Gen Z, the newest generation of those who feel timeless (1A). Unique working rules, liberating perception of beauty, completely different ways of self-expression. They know a place beyond what is right or wrong, what is desired or boring. We will meet them there, together with Elements of Dance (EoD) & other communities.</p>
        </>
    );
};

export default NikeContent;