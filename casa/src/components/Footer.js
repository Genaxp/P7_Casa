import React from "react"
import Logo from '../assets/images/LogoW.png'

function Footer() {
    return (
        <div className="footer">
            <img src={Logo} className="imgFooter" alt="LogoFooter" />
            <p > ©2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer