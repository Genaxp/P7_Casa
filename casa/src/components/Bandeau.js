import React from "react";
import Accordion from "../components/Accordion";
import { Data } from "./Data";


const Bandeau = () => {
    return (
        <div className="logement__description__container">
            <ul className="logement__description__container__card">
                {Data.map(({ heading, content }) => (
                    <Accordion key={heading} heading={heading} content={content} />
                ))}
            </ul>
        </div>
    )
}

export default Bandeau