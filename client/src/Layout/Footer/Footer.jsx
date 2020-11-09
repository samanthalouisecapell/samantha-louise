import React from "react"
import { Component } from "react"
import './Footer.css'

class Footer extends Component{
    render() {
        return(
            <>
            <nav className="footer">
                <ul className="socials">
                    <li><a href="#" style={{textDecoration: "none", color: "black"}}>YouTube</a></li>
                    <li><a href="#" style={{textDecoration: "none", color: "black"}}>Instagram</a></li>
                    <li><a href="#" style={{textDecoration: "none", color: "black"}}>Facebook</a></li>
                    <li><a href="#" style={{textDecoration: "none", color: "black"}}>Twitter</a></li>
                    <li><a href="#" style={{textDecoration: "none", color: "black"}}>Email</a></li>
                </ul>
            </nav>
            </>
        )
    }
}

export default Footer