import React, { useState } from "react";
import "../styles/accordion.scss";

const Accordion = ({ heading, content }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <li className="accordion-item">
            <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
                <h3 className="accordion__toggle__title">{heading}</h3>
                <span className="arrow">{isActive ? <i className="fa-chevron-up"/> : <i className="fas fa-chevron-down"> </i>}</span>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </li>
    );
};

export default Accordion;