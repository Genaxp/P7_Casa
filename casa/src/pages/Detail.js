import React from "react";
import { useParams } from "react-router-dom"
import logements from "../components/logements"
import Accordion from "../components/Accordion";
import Gallery from "../components/Gallery"


function Detail() {
  
    let {id} = useParams()
    const Home = logements.find((home) => home.id === id)
    
    return (
   
         <div className="bodyz container">
            <Gallery/>
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
                <Accordion heading="Equipment" content={Home.equipments.map((equip,index) =>
                    <li key={index}>{equip}</li>
                )} />
            </div>
        </div >
    )
}

export default Detail