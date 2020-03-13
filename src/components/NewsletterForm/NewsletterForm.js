import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'

class NewsletterForm extends Component {
  render() {
    return (
        <Mailchimp
        action='https://trustmypetsitter.us19.list-manage.com/subscribe/post?u=4a35a5d134da29e00c99b1019&amp;id=da197424fe'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
        messages = {
            {
              sending: "Sending...",
              success: "Thank you for subscribing!",
              error: "An unexpected internal error has occurred.",
              empty: "You must write an email.",
              duplicate: "This email address is already subscribed.",
              button: "Sign me up"
            }
          }
        styles = {
           {
               sendingMsg: {
                   color: '#009432'
               },
               successMsg: {
                   color: '#009432'
               },
               duplicateMsg: {
                    color: '#EE5A24'
               },
               errorMsg: {
                   color: '#ED4C67'
               }
            }
        }
        />
    );
  }
}

export default NewsletterForm;