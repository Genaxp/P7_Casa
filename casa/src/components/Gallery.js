import React , { useState } from "react"
import { useParams } from "react-router-dom"
import logements from "../components/logements"
import '../styles/gallery.scss'



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
    )
}

export default Gallerie