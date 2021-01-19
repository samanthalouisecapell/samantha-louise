import React from "react"
import { Component } from "react"
import './Footer.css'

class Footer extends Component{
    render() {
        return(
            <>
            <nav className="footer">
                <ul className="socials">
                    <li><a href="#" style={{textDecoration: "none", color: "black"}}><img className="icon" src="https://res.cloudinary.com/dkhiieq9p/image/upload/v1611084962/Youtube-Splash-Icon-PNG-715x715_oetzwb.png"></img></a></li>
                    <li><a href="#" style={{textDecoration: "none", color: "black"}}><img className="icon" src="https://res.cloudinary.com/dkhiieq9p/image/upload/v1611085806/PngItem_1500145_psvxm8.png"></img></a></li>
                    <li><a href="#" style={{textDecoration: "none", color: "black"}}><img className="icon" src="https://res.cloudinary.com/dkhiieq9p/image/upload/v1588107364/58f4723d8f23906bdcb058604075ad2a_zredoo.png"></img></a></li>
                    <li><a href="#" style={{textDecoration: "none", color: "black"}}><img className="icon" src="https://res.cloudinary.com/dkhiieq9p/image/upload/v1588107413/112-gmail_email_mail-512_yi0luq.webp"></img></a></li>
                </ul>
            </nav>
            </>
        )
    }
}

export default Footer