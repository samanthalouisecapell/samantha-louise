import React from "react"
import { Component } from "react"
import Layout from "../../../src/Layout/Layout"
import "./Welcome.css"

class Home extends Component{
    render() {
        return(
            <>
              <div className="main-menu">
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