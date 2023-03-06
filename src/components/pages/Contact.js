import React, {Component} from "react";

class Contact extends Component {
    state = {
        nameFull: "",
        emailAdd: "",
        messageEmail: ""
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };

    handleSubmitForm = event => {
        // prevent default behaviour of the form submit
        event.preventDefault();

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Name: ${this.state.nameFull} \n Email: ${this.state.emailAdd} \n Message: ${this.state.messageEmail}`);
        this.setState({
            nameFull: "",
            emailAdd: "",
            messageEmail: ""
        });
    }

    render() {
        return (
            <div className="contact">
                <div className="links">
                    <a href="mailto:aaronlapworth@hotmail.co.uk" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope fa-2x"></i><h2>Email me</h2></a>
                    <a href={process.env.PUBLIC_URL + "../../cv/CV_aaron_lapworth_week13_proj.pdf"} download><i className="fa fa-file fa-2x"></i><h2>My resumé</h2></a>
                    <a href="https://github.com/LapworthAaron" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x"></i><h2>My Github</h2></a>
                    <a href="https://www.linkedin.com/in/aaron-lapworth-a0168042/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x"></i><h2>LinkedIn</h2></a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-2x"></i><h2>facebook</h2></a>
                </div>
                <form className="contactForm">
                    <label>Name: </label>
                    <input 
                        type="text"
                        name="nameFull"
                        value={this.state.nameFull}
                        onChange={this.handleInputChange}
                        placeholder="Your name.."
                    />
                    <label>Email Address: </label>
                    <input
                        type="text"
                        name="emailAdd"
                        placeholder="Your email address.."
                        value={this.state.emailAdd}
                        onChange={this.handleInputChange}
                    />
                    <label>Subject: </label>
                    <textarea
                        name="messageEmail"
                        placeholder="Your message.."
                        value={this.state.messageEmail}
                        onChange={this.handleInputChange}
                    >
                    </textarea>
                    <button id="submitBtn" onClick={this.handleSubmitForm}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Contact;