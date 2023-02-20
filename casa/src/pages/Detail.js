import React, { useState } from "react";
import { useLocation } from "react-router-dom"
import logements from "../components/logements"
import Accordion from "../components/Accordion";


function Detail() {
    const location = useLocation()
    const Home = logements.find((home) => home.id === location.state.logementId)

    const pictures = Home.pictures
    const [currentPic, setCurrentPic] = useState(0)

    const getClassName = (i) => {
        if (i === currentPic) return "img__on";
        return "";
    }

    const next = () => {
        setCurrentPic((currentPic + 1) % pictures.length)
    };
    const previous = () => {
        const newCurrentpic = currentPic - 1;
        if (newCurrentpic < 0) {
            setCurrentPic(pictures.length - 1);
            return;
        }
        setCurrentPic(currentPic - 1);
    }

    return (
        <div className="bodyz container">
            <div className="logement__image__banner">
                <div className="logement__image__container">
                    {Home.pictures.map((pic, i) => (<img
                        key={pic}
                        src={pic}
                        alt='Gallerie'
                        className={getClassName(i)}
                    ></img>
                    ))}
                </div>
                <button className="right" onClick={next}><i className="fas fa-chevron-right"> </i></button>

                <button className="left" onClick={previous}><i className="fas fa-chevron-left"> </i></button>
                <span className="counter">
                    {currentPic + 1} / {pictures.length}
                </span>
            </div >
            <div className="logement__banner">
                <div className="logement">
                    <h1 className="logement__titre">{Home.title}</h1>
                    <h2 className="logement__lieu">{Home.location}</h2>
                    <div >
                        {Home.tags.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="logement__container" >
                    <div className="logement__proprio">
                        <h3> {Home.host.name}</h3>
                        <div className="logement__proprio__badge"><img src={Home.host.picture} className="logement__proprio__badge" alt="host" /></div>
                    </div>
                    <div className="logement__proprio__stars" >
                        {[1, 2, 3, 4, 5].map((num) => (
                            <span key={num} className={Home.rating >= num ? "on" : ""} >★</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="logement__description">
                <Accordion heading="Description" content={Home.description} />
                <Accordion heading="Equipment" content={Home.equipments.map((equip) =>
                    <li>{equip}</li>
                )} />
            </div>
        </div >
    )
}

export default Detail