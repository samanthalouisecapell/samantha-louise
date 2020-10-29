import React from "react"
import { Component } from "react"
import {Link, withRouter } from "react-router-dom"
import './Header.css'

class Header extends Component{
    render() {
        return(
            <>
            <nav className="header">
                 <h1 className="title"><Link to="/">Samantha Louise</Link></h1>
                 <ul className="navigation">
                     <li><Link to="/about">About</Link></li>
                     <li>Media</li>
                     <li>Recordings</li>
                     <li>Tour</li>
                     <li>Contact</li>
                 </ul>
            </nav>
            </>
        )
    }
}

export default withRouter(Header)