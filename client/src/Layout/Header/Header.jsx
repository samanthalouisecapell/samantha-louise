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
                     <li><Link to="/media">Media</Link></li>
                     <li><Link to="/tour">Tour</Link></li>
                     <li><Link to="/contact">Contact</Link></li>
                 </ul>
            </nav>
            </>
        )
    }
}

export default withRouter(Header)