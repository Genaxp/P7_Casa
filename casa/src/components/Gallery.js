import React , { useState } from "react"
import { useParams } from "react-router-dom"
import logements from "../components/logements"
import '../styles/gallery.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function Gallerie() {
    
    let {id} = useParams()
    const Home = logements.find((home) => home.id === id)

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
        <div className="logement__image__banner">
            <div className="logement__image__container">
                {Home.pictures.map((pic, i) => (
                <img
                    key={pic}
                    src={pic}
                    alt='Gallerie'
                    className={getClassName(i)}
                ></img>
                ))}
            </div>
            {}
            {Home.pictures.length > 1 && <>
            <button title="chevron" className="right" onClick={next}><FontAwesomeIcon icon={solid('chevron-right')} /></button>
            <button title="chevron" className="left" onClick={previous}><FontAwesomeIcon icon={solid('chevron-left')}  /></button>
            <span className="counter">
                {currentPic + 1} / {pictures.length}
            </span>
            </>}
        </div >
    )
}

export default Gallerie