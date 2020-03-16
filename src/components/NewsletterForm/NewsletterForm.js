import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form';
import css from './NewsletterForm.css';
import { compose } from "redux";
import { Redirect, withRouter } from "react-router-dom";
import { injectIntl, intlShape } from "react-intl";
import PropTypes from "prop-types";

export const NewsletterFormComponent = props => {

const { history } = props;

  const handleSignUpClick = () => {
    history.push("/signup");
  }

    return (
        <Mailchimp
        action='https://trustmypetsitter.us19.list-manage.com/subscribe/post?u=145dd169debb895ee85a3f842&amp;id=ca2a05fd83'
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
        className={css.NewsletterForm}
        />
    );

};


const { object } = PropTypes;

NewsletterFormComponent.propTypes = {
  history: object.isRequired
};


const NewsletterForm = compose(
  withRouter,
  injectIntl
)(NewsletterFormComponent);

export default NewsletterForm;