import React, { useState } from "react"
import ReactPlayer from "react-player"
import Layout from "../../Layout/Layout"
import videos from "../../videos.json"
import "./Media.css"

export default function Media() {
    const [video, displayVideo] = useState({
        title: "",
        link: "",
        details: ""
    })

    const highlightVideo = (selection) => {
        displayVideo({
            title: selection.title,
            link: selection.link,
            details: selection.details
        })
    }

    return(
        <div className="media">
        <Layout>
        <h1>Performances</h1>
        <div className="youtube-map">
        {videos.map(youtube => 
            <div className="youtube-clip">
            <h2 onClick={highlightVideo}>{youtube.title}</h2>
            <ReactPlayer url={youtube.link}/>
            <h5>{youtube.details}</h5>
            </div>
            )}
        </div>
        </Layout>
        </div>
    )
}