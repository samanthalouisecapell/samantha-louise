import React from "react"
import { useState } from "react"
import Layout from "../../Layout/Layout"
import {Link, withRouter} from "react-router-dom"
import './Welcome.css'

export default function Welcome(){
    const [status, toggleButton] = useState({
        pressed: false
    })

    const exploreSam = () => {
        toggleButton({
            pressed: true
        })
    }

        return(
            <body>
            <div className="cover">
            {status.pressed === false ? (
                 <div className="front">
                <h1>Samantha Louise</h1>
                <button onClick={exploreSam}><Link to="/home" style={{textDecoration: "none", color: "black"}}>Enter</Link></button>
                </div>
            )
            : (
                <div className="main-menu">
                <Layout>
                <div className="welcome">
                    <h1>Explore</h1>
                    <p>The Latest in Sam's World</p>
                </div>
                </Layout>
                 </div>
            )}
             </div>
             </body>
        )
    }

