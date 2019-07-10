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
        let errorMessage = document.querySelector('.error-message');
        errorMessage.innerHTML = JSON.stringify(error);
      });

    e.preventDefault();
    this.setState({name: '', surname: '', email: '', message: ''}) // <= here
  }
    handleFields = e => this.setState({ [e.target.name]: e.target.value });  

  render() {
    return (

      <form onSubmit={this.handleForm}>
        <label htmlFor="name">Name</label>
        <input required type="text" id="name" name="name" onChange={this.handleFields} value={this.state.name} />

        <label htmlFor="surname">Surname</label>
        <input required type="text" id="surname" name="surname" onChange={this.handleFields} value={this.state.surname} />

        <label htmlFor="email">Email</label>
        <input required type="email" id="email" name="email" onChange={this.handleFields} value={this.state.email} />

        <label htmlFor="message">Your Message</label>
        <textarea required name="message" id="message" onChange={this.handleFields} value={this.state.message}></textarea>

        <button id="how-button" type="submit">Send</button>

          <div className="success-message">
            <label></label>
          </div>

          <div className="error-message">
            <label></label>
          </div>

      </form>
    );
  }
}
  
export default ContactForm;





