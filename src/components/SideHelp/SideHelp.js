import React from "react";
import Stepper from 'bs-stepper';
import { NamedLink } from '../../components';
import { FormattedMessage } from 'react-intl';

import arrowRight from './images/arrowright.png';
import arrowLeft from './images/arrowleft.png';
import help from './images/help.png';
import css from "./SideHelp.css";

class SideHelp extends React.Component {
  state = {
    state: {
      showNav: false
    }
  }

  openNavClick = e => {
    e.preventDefault()
    this.openNav()
  }

  closeNavClick = e => {
    e.preventDefault()
    this.closeNav()
  }

  openNav = () => {
    this.setState({
      showNav: true
    })

    document.addEventListener("keydown", this.handleEscKey)
  }
  closeNav = () => {
    this.setState({
      showNav: false
    })

    document.removeEventListener("keydown", this.handleEscKey)
  }

  handleEscKey = e => {
    if (e.key === "Escape") {
      this.closeNav()
    }
  }

   componentDidMount() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }

  onSubmit(e) {
    e.preventDefault()
  }

  render() {
    const { showNav } = this.state
    let navCoverStyle = { width: showNav ? "100%" : "0" }
    let sideNavStyle = { width: showNav ? "420px" : "0" }

    return (
      <React.Fragment>
    <span className={css.createListingLink} onClick={this.openNavClick}>
      <span className={css.signup}>
        <img src={help} className={css.topbaricon} /> <FormattedMessage id="Help">Help</FormattedMessage>
      </span>
    </span>
        <div
          onClick={this.navCoverClick}
          className={css.navcover}
          style={navCoverStyle}
        />
        <div name="side-nav" className={css.sidenav} style={sideNavStyle}>
          <div className={css.sideheader}>
            <h2 className={css.helptitle}>Recommended Help</h2>
            <a href="#" onClick={this.closeNavClick} className={css.closenav}>
              &times;
            </a>
          </div>

       <div id="stepper1" class="bs-stepper">
          <div class="bs-stepper-header">
          </div>
          <div className={css.helpContent}>
              <div id="test-l-1" class="content">
                  <h4 className={css.helpMainTitle}>Recommended Articles</h4>
                  <h3 className={css.articleTitle}>How do I create an account?</h3>
                  <p className={css.articleParagraph}>Just click the Sign Up button below or the link on the Navigation Bar above. You'll land on our Sign Up page and can choose to sign up with Facebook, Linkedin or by Email.</p>
                <button className={css.articleButton} onClick={() => this.stepper.next()}>Read More <img className={css.readmoreImg} src={arrowRight} /></button> 
              </div>
              <div id="test-l-2" class="content">
               <div class="step inlineStep" data-target="#test-l-1">
              <button class="step-trigger articleButton">
              <img className={css.backImg} src={arrowLeft} /> Back
              </button>
            </div>
              <h3 className={css.insideTitle}>How do I create an account?</h3>
                <p className={css.insideP}>Just click the <NamedLink className={css.insideLinks} name="SignupPage">Sign Up</NamedLink> button below or the link on the Navigation Bar above.</p>
                <p className={css.insideP}>You'll land on our Sign Up page and can choose to sign up with Facebook, Linkedin or by Email.</p>
                <p className={css.insideP}>We'll send you an email to guide you through the process. It's easy and only takes a few minutes from start to finish.</p>
            <div style={{display: "none"}} class="step" data-target="#test-l-2">
              <button class="step-trigger"></button>
            </div>
              </div>
          </div>
        </div>              
        <div className={css.sidefooter}>
          <NamedLink name="FaqPage" className={css.helpcenter}>
            <span>Visit the Help Center</span>
          </NamedLink>
        </div>

        </div>
      </React.Fragment>
    )
  }
}

export default SideHelp;
