import React, { useState } from "react";
import "../styles/accordion.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Accordion = ({ heading, content }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <li className="accordion-item">
            <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
                <h3 className="accordion__toggle__title">{heading}</h3>
                <span className="arrow">{isActive ? <FontAwesomeIcon icon={solid('chevron-up')} /> : <FontAwesomeIcon icon={solid('chevron-down')}/>}</span>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </li>
    );
};

export default Accordion;