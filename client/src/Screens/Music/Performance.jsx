import React from "react"
import { Component } from "react"
import Layout from "../../Layout/Layout"
import "./Performance.css"

class Tour extends Component {

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://widget.bandsintown.com/main.min.js";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        return (
            <body className="tourpic">
                <Layout>

                    <a class="bit-widget-initializer"
                        data-font=""
                        data-language="en"
                        data-display-details="true"
                        data-text-color="#e7fae9"
                        data-background-color="rgba(82, 136, 82, 0.01)"
                        data-separator-color="#5E705E"
                        data-popup-background-color="#ffffff"
                        data-link-color="#B8F5B8"
                        data-link-text-color="#25352B"
                        data-artist-name="Samantha Louise"
                    ></a>

                </Layout>
            </body>
        )
    }
}

export default Tour