import React from "react"
import { useState } from "react"
import Layout from "../../Layout/Layout"
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
            <>
            {status.pressed === false ? (
                 <div className="front">
                <h1>Samantha Louise</h1>
                <button onClick={exploreSam}>Enter</button>
                </div>
            )
            : (
            <Layout>
                <div className="welcome">
                    <h1>Explore</h1>
                </div>
            </Layout>
            )}
             </>
        )
    }

