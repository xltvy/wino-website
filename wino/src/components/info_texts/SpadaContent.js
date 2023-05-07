import React from "react";
import Logo from "../../images/client_logos/spada-logo.webp";

const SpadaContent = () => {
    return (
        <>
            <div style={{justifyContent: "center", alignItems: "center", width: "100%", display: "flex"}}>
                <img src={Logo} alt="Spada Logo" style={{ width: "60%", height: "auto", paddingTop: "8px" }} decoding="async" loading="lazy"/>
            </div>
            <p style={{ paddingTop: "12px" }}>Our journey with Spada started with us looking at the notes of the coffee musically. Coffee is like a pleasant relationship! Both require exploration, learning, patience, and labor. Just as a pleasant relationship takes time and its beauty is hidden in the details, coffee will provide you with all the beauty in it over time as it goes deeper. Thus, we went deeper and brought a different perspective to coffee. What if the notes of coffee are also musical notes?</p>
            <p style={{ paddingTop: "8px" }}>Firstly, we designed the front and back sides of the coffee box in different rhythms. The primary reason for this is that the simplicity at the back side of the box states to give the feeling of the peak point of a musical composition by reviving figures on the front side. Each detail used in the design represents different music and coffee notes.</p>
        </>
    );
};

export default SpadaContent;