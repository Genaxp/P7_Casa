import React from "react";
import Aprop from "../assets/images/kalen.png"
// import Arrow from "../assets/images/arrow_back.png"
import Bandeau from "../components/Bandeau"

function About() {
    return (
        <div className="container">
            <div className="Aprop__background">
                <img className="Aprop__background__img" src={Aprop} alt="about" width={1240} height={223} />
            </div>
            < Bandeau />
        </div>
    )
}

export default About