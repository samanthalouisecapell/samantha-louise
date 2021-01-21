import React from "react"
import { Component } from "react"
import Layout from "../../../src/Layout/Layout"
import "./Welcome.css"

class Home extends Component{
    render() {
        return(
            <>
              <div className="main-menu">
              <img className="koru" src="https://res.cloudinary.com/dkhiieq9p/image/upload/v1611238743/sbt92grll1u24s4ebpba423a85_udd8vp.png"></img>
                <Layout>
                <div className="welcome">
                    <h1>Explore</h1>
                    <p>The Latest in Sam's World</p>
                </div>
                </Layout>
                 </div>
            </>
        )
    }
}

export default Home