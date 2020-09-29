import React from "react"
import Link from "react-router-dom"

class Header {


    render() {
        return(
            <>
            <nav>
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