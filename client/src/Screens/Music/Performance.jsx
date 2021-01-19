import React from "react"
import { Component } from "react"
import Layout from "../../Layout/Layout"
import "./Performance.css"

class Tour extends Component{
    render() {
    return(
        <body className="tourpic">
        <Layout>
        <div className="tour">
        <h2>There are no current tour dates. Stay tuned for future performances!</h2>
        </div>
        </Layout>
        </body>
         )
    }
}

export default Tour