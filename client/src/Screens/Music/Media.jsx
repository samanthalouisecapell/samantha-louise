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
        <h1 className="perf">Performances</h1>
        <div className="youtube-map" >
        {videos.map(youtube => 
            <div className="youtube-clip">
            <h2 onClick={highlightVideo} style={{textAlign: "center"}}>{youtube.title}</h2>
            <div className="wrapper"> 
                <ReactPlayer className="player" url={youtube.link} width='100%'
          height='100%'/>
            </div>
            <h5 style={{textAlign: "center"}}>{youtube.details}</h5>
            </div>
            )}
        </div>
        </Layout>
        </div>
    )
}