import React from 'react'
import Layout from '../../Layout/Layout'
import "./Contact.css"

export default function Contact() {
    return( <>
    <Layout>
        <h2>Message Sam for any Gig/Recording Inquiries</h2>
        <form className="contact-form">
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Email"></input>
            <textarea type="text" placeholder="Write your message here..."></textarea>
            <button>Send Message</button>
        </form>
    </Layout>
        </>
    )
}