import React from "react"
import Logo from '../assets/images/LogoW.png'

function Footer() {
    return (
        <div className="footer">
            <div className="imgFooter">
                <img src={Logo} alt="LogoFooter" />
            </div>
            <p > ©2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer