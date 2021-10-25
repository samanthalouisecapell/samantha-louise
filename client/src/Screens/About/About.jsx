import React, { Component } from "react"
import Layout from "../../Layout/Layout"
import './About.css'


class About extends Component {
    render() {
        return (
            <body className="newpic">
            <Layout>
                <div className="about">
                    <h2>About Samantha Louise</h2>
                    <p className="bio">Samantha grew up in a small town in New Zealand surrounded by a large family of music lovers. Though her grandfather’s tendre for country-western music, her grandmother’s Polynesian acapella tradition, and the hymns of her family’s devout religious practice formed an unusual musical vocabulary, she was able to harmonize popular melodies by ear before she was ten and had developed a deep appreciation for lyrics. Samantha earned her Bachelor of Music at Cornish College of the Arts studying under Johnaye Kendrick. During that time, she was honored to have an original composition selected to be arranged for and performed by members of the Seattle Philharmonic. She was later afforded the privilege of representing the school’s Jazz department with an original piece of music at the 2015 Cornish College of the Arts Commencement Ceremony.</p>
                    <p className="bio">Samantha was next invited to attend the University of Miami's Frost School of Music on a full-ride scholarship and earned her Master of Music in Studio Music and Jazz in May of 2017. Whilst studying with Dr. Kate Reid, she sang both alto and soprano in Frost’s award-winning Jazz Vocal Ensemble One, was a featured soloist with the XJB Big Band, and was hired to sing back-ups for two-time Grammy Award winner Jon Secada.</p>
                    <p className="bio">Samantha is now a New York City based vocalist where she performs works from the Great American Songbook and composes contemporary music inspired by both Black American Music theory as well as popular music trends.</p>
                </div>
            </Layout>
            </body>
        )
    }
}

export default About