import React, {Component} from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Layout from '../../../src/Layout/Layout'
import "./Contact.css"


class Contact extends Component{
  state = {
        email: '',
        name: '',
        subject: '',
        message: ''
    }
    
    handleSubmit(e) {
        e.preventDefault()
        const { name, email, subject, message } = this.state
        let templateParams = {
            from_email: email,
            name: name,
            subject: subject,
            message_html: message
        }
        emailjs.send(
            'default_service',
            'template_do0dc2g',
            templateParams,
            'user_2MHkNPpFWbVMxxSeTZBLo'
        )
        this.resetForm();
        alert("Email Sent to Sam!");
    }
    resetForm() {
        this.setState({
            email: '',
            name: '',
            subject: '',
            message: ''
        })
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }
    render() {
        return (
            <body className="contactpic">
            <Layout>
            <div className="contact-form">
                <h1>Contact Samantha</h1>
                <form className="form"><Form onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup>
                        <Label className="text-muted">Email address</Label>
                        <Input
                            style={{ fontFamily: "lato", width: "50%"}}
                            type="email"
                            name="email"
                            value={this.state.email}
                            className="text-primary"
                            onChange={this.handleChange.bind(this, 'email')}
                            placeholder="Email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label className="text-muted">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            value={this.state.name}
                            className="text-primary"
                            onChange={this.handleChange.bind(this, 'name')}
                            placeholder="Name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label className="text-muted">Subject</Label>
                        <Input
                            type="text"
                            name="subject"
                            className="text-primary"
                            value={this.state.subject}
                            onChange={this.handleChange.bind(this, 'subject')}
                            placeholder="Subject"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label className="text-muted">Message</Label>
                        <Input
                            type="textarea"
                            name="message"
                            className="text-primary"
                            value={this.state.message}
                            onChange={this.handleChange.bind(this, 'message')}
                        />
                    </FormGroup>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
                </form>
            </div>
            </Layout>
            </body>
        )
    }
}
export default Contact