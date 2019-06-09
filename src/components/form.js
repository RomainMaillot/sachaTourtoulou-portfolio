import { Link } from "gatsby"
import React, { Component } from "react"
import { texts, containers } from '../styles';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

class Form extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            name: {
                content: "",
                state: ""
            },
            email: {
                content: "",
                state: ""
            },
            message: {
                content: "",
                state: ""
            },
        }
    }
    
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        console.log('name' + this.state.name.content)
        console.log('email' + this.state.email.content)
        console.log('message' +this.state.message.content)
    
        this.setState({
            [name]: {
                content: value,
                state: "",
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        if(this.state.name.state === "fill" && this.state.email.state === "fill" && this.state.message.state === "fill")
        {
            const link = `mailto:sacha.tourtoulou@live.fr?cc=${this.state.email.content}&body=Hi I'm ${this.state.name.content}, ${this.state.message.content}`
            window.location.href = link
        }
    }

    validateEmail = email => {
        let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return regex.test(email)
    }

    handleBlur = event => {
        event.preventDefault()
        const name = event.target.name
        const content = event.target.value
        if(event.target.value !== "" && event.target.name !== "email")
        {
            event.target.previousSibling.classList.add('fill')
            event.target.parentNode.classList.add('fill')
            this.setState({
                [name]: {
                    content: content,
                    state: "fill",
                }
            })
        }
        if(event.target.name === "email" && !this.validateEmail(event.target.value))
        {
            event.target.parentNode.classList.add('invalid')
            this.setState({
                [name]: {
                    content: content,
                    state: "",
                }
            })
        }
        else {
            event.target.parentNode.classList.remove('invalid')
            event.target.previousSibling.classList.add('fill')
            event.target.parentNode.classList.add('fill')
            this.setState({
                [name]: {
                    content: content,
                    state: "fill",
                }
            })
        }
        console.log('name' + this.state.name.content)
        console.log('email' + this.state.email.content)
        console.log('message' +this.state.message.content)
    }

    render() {
        return (
            <containers.form onSubmit={this.handleSubmit}>
                <texts.formTitle>Say hello !</texts.formTitle>
                <containers.label>
                    <span>Name</span>
                    <containers.input
                        type="text" 
                        name="name"
                        placeholder="Name"
                        value={this.state.name.content}
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}></containers.input>
                </containers.label>
                <containers.label>
                    <span>Email</span>
                    <containers.input
                        type="text" 
                        name="email"
                        placeholder="Email adress"
                        value={this.state.email.content}
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}></containers.input>
                </containers.label>
                <containers.label>
                    <span>Message</span>
                    <containers.textarea
                        type="textarea" 
                        name="message"
                        placeholder="Message"
                        value={this.state.message.content}
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}></containers.textarea>
                </containers.label>
                <texts.submit type="submit">Submit</texts.submit>
            </containers.form>
        )
    }
}

export default Form