import React from "react"
import '../styles/navigation.scss'
import Logo from '../assets/images/Logo.png'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav className='k-banner'>
            <div className="k-banner__Logo" >
                <img className="k-banner__img" src={Logo} alt='Logo' />
            </div>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className="lien__nav" >Accueil</li>
                </NavLink>
                <NavLink to="/Apropos" className={(nav) => (nav.isActive ? "nav-active1" : "")}>
                    <li className="lien__nav">A Propos</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Nav