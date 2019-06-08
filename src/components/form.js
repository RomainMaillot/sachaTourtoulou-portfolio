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
            name: "",
            email: "",
            message: "",
        }
    }
    
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
    
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        alert(`You : ${this.state.name} email: ${this.state.email} and you say : ${this.state.message} !`)
    }

    handleBlur = event => {
        event.preventDefault()
        event.target.previousSibling.classList.add('fill')
        event.target.parentNode.classList.add('fill')
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
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}></containers.input>
                </containers.label>
                <containers.label>
                    <span>Email</span>
                    <containers.input
                        type="text" 
                        name="email"
                        placeholder="Email adress"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}></containers.input>
                </containers.label>
                <containers.label>
                    <span>Message</span>
                    <containers.textarea
                        type="textarea" 
                        name="message"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}></containers.textarea>
                </containers.label>
                <texts.submit type="submit">Submit</texts.submit>
            </containers.form>
        )
    }
}

export default Form