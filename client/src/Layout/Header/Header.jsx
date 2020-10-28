import React from "react"
import { Component } from "react"
import Link from "react-router-dom"
import './Header.css'

class Header extends Component{


    render() {
        return(
            <>
            <nav className="header">
                 <h1 className="title">Samantha Louise</h1>
                 <ul className="navigation">
                     <li>About</li>
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

export default Header