import React from "react";
import axios from "axios"; // For making client request.

class ContactForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: "", surname: "", email: "", message: ""};
  }

  handleForm = e => {
    axios.post(
      "https://formcarry.com/s/Ek8wZYC7v0H", 
      this.state, 
      {headers: {"Accept": "application/json"}}
      )

      .then(function (response) {
        let successMessage = document.querySelector('.success-message');
        successMessage.innerHTML = JSON.stringify(response.data.title);
      })
      .catch(function (error) {
        let successMessage = document.querySelector('.success-message');
        successMessage.innerHTML = JSON.stringify(error);
      });

    e.preventDefault();
    this.setState({name: '', surname: '', email: '', message: ''}) // <= here
  }
    handleFields = e => this.setState({ [e.target.name]: e.target.value });  

  render() {
    return (

      <form onSubmit={this.handleForm}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={this.handleFields} value={this.state.fullName} />

        <label htmlFor="surname">Surname</label>
        <input type="text" id="surname" name="surname" onChange={this.handleFields} value={this.state.fullName} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={this.handleFields} value={this.state.fullName} />

        <label htmlFor="message">Your Message</label>
        <textarea name="message" id="message" onChange={this.handleFields} value={this.state.fullName}></textarea>

        <button id="how-button" type="submit">Send</button>
  
 <div className="success-message">
                <label></label>
              </div>

      </form>
    );
  }
}
  
export default ContactForm;





