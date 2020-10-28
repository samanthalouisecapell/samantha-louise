import React from "react"
import { Component } from "react"
import './Footer.css'

class Footer extends Component{
    render() {
        return(
            <>
            <nav className="footer">
                <ul className="socials">
                    <li><a href="#">YouTube</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </nav>
            </>
        )
    }
}

export default Footer