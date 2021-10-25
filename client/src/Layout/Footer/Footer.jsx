import React from "react"
import { Component } from "react"
import './Footer.css'

class Footer extends Component{
    render() {
        return(
            <>
            <nav className="footer">
                <ul className="socials">
                    <li><a href="https://www.youtube.com/channel/UCNI5psXqpTEYpFEMZflXfaA/videos" style={{textDecoration: "none", color: "black"}}><img className="icon" src="https://res.cloudinary.com/dkhiieq9p/image/upload/v1611096284/Youtube-Splash-Icon-PNG-715x715_imzvmr.png"></img></a></li>
                    <li><a href="https://www.instagram.com/samanthalcapell/" style={{textDecoration: "none", color: "black"}}><img className="icon" src="https://res.cloudinary.com/dkhiieq9p/image/upload/v1611096286/res-console.cloudinary_smwos5.png"></img></a></li>
                    <li><a href="mailto:samanthacapell@gmail.com" style={{textDecoration: "none", color: "black"}}><img className="icon" src="https://res.cloudinary.com/dkhiieq9p/image/upload/v1611096247/kisspng-email-computer-icons-logo-clip-art-computer-e-mail-cliparts-5aadd733460724.5480821115213422592868_h3exwi.png"></img></a></li>
                </ul>
            </nav>
            </>
        )
    }
}

export default Footer