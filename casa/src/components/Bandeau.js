import React from "react";
import Accordion from "../components/Accordion";
import { Data } from "./Data";


const Bandeau = () => {
    return (
        <div className="logement__description__container__aprop">
            <ul className="logement__description__card__contenu__aprop">
                {Data.map(({ heading, content }) => (
                    <Accordion key={heading} heading={heading} content={content} />
                ))}
            </ul>
        </div>
    )
}

export default Bandeau