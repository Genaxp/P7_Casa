import React from "react";
import { NavLink } from "react-router-dom"

function Erreur() {
    return (
        <div className="body">
            <h1 className="taille404">404</h1>
            <h2 className="tailleh2">Oups ! La page que vous demandez n'existe pas.</h2>
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <p className="lienAccueil">Retourner sur la page d'accueil</p>
            </NavLink>
        </div>
    )
}

export default Erreur