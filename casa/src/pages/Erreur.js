import React from "react";
import { Link } from "react-router-dom"

function Erreur() {
    return (
        <div className="bodyz">
            <h1 className="taille404">404</h1>
            <h2 className="tailleh2">Oups ! La page que vous demandez n'existe pas.</h2>
            <Link to="/" >
                <p className="lienAccueil">Retourner sur la page d'accueil</p>
            </Link>
        </div>
    )
}

export default Erreur