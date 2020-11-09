import React from "react"
import { Component } from "react"
import {Link, withRouter } from "react-router-dom"
import './Header.css'

class Header extends Component{
    render() {
        return(
            <>
            <nav className="header">
                 <h1 className="title"><Link to="/" style={{textDecoration: "none", color: "black"}}>Samantha Louise</Link></h1>
                 <ul className="navigation">
                     <li><Link to="/about" style={{textDecoration: "none", color: "black"}}>About</Link></li>
                     <li><Link to="/media" style={{textDecoration: "none", color: "black"}}>Media</Link></li>
                     <li><Link to="/tour" style={{textDecoration: "none", color: "black"}}>Tour</Link></li>
                     <li><Link to="/contact" style={{textDecoration: "none", color: "black"}}>Contact</Link></li>
                 </ul>
            </nav>
            </>
        )
    }
}

export default withRouter(Header)