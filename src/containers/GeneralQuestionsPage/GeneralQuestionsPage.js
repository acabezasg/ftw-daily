import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FacebookProvider, Page } from 'react-facebook';
import { Timeline } from 'react-twitter-widgets';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  ExternalLink,
  NamedRedirect

} from '../../components';

import arrow from './arrow.png';
import logo from './logo.png';
import css from './GeneralQuestionsPage.css';


const articles = [
  <div>
    <h2>
    How Do I Sign Up? 
    </h2>
    <p>To get started as a registered user simply select the “Sign Up” link in the page navigation bar.  You will be asked to enter your name and email address.</p> 
    <p>You will be sent a verification email and just click the link to get started.</p>
  </div>,

  <div>
    <h2>
      Membership 
</h2>
    <p>You can browse Trust My Pet Sitter free of charge, but if you want to contact members of our community you need to create your own listing and upgrade to <NamedLink name="MembershipPage">Premium Membership</NamedLink>.</p>
  </div>,

  <div>
    <h2>
    Create your Listing
</h2>
    <p>In order to display your profile and become a member of our community you need to create a listing. You can find the link on the navigation bar under “Create Listing”.</p>
  </div>,

  <div>
    <h2>
    What is the minimum age?
</h2>
    <p>At Trust My Pet Sitter the minimum age to sign up and join our platform is 18 years old. You can sign up by clicking the link bellow.</p>
    <p><NamedLink name="SignupPage">Sign Up</NamedLink></p>
  </div>,

<div>
<h2>
Your Listings
</h2>
<p>In order to manage your account, click the icon with your photo on the upper right hand side of the navigation bar.</p>
<p>Manage your current Listings by selecting “Your Listings”.  To edit left click on the photo and then look for the grey bar across the top of the photo headed “Edit Listing”.  When you click here you will be directed to the description pages.  Be sure to Save Each page before proceeding to the next.</p>
<p>If you wish to close your listing select “Your Listings” and find the listing you wish to delete.  Hover and then click over the three dots on the upper right hand corner of the picture and you will be given the option to “close listing”.  Select and your listing will be closed.</p>
</div>,

<div>
<h2>
Managing your Profile
</h2>
<p>In order to manage your account, click the icon with your photo on the upper right hand side of the navigation bar.</p>
<p>Manage your Contact Details by editing your email address and phone number. Both details are covered by our Privacy Policy and only used by Trust My Pet Sitter staff when we need to contact you about your account. </p>
<p>Edit your Profile Bio – this is where you get to introduce yourself and discuss your motivations.</p>
<p>For Pet Sitters – you can select the countries where you would like to be considered for pet sitting roles.</p>
</div>,

<div>
<h2>
Account Settings
</h2>
<p>In order to manage your account, click the icon with your photo on the upper right hand side of the navigation bar.</p>
<p>Manage your Profile by selecting “Profile Settings.  You can edit your profile picture by selecting “Change”.  If you are a Pet Sitter or Pet Owner please choose an image where your face is recognizable. For Pet Services please choose an image showing your team, product or store.</p>
<p><strong>Password</strong> – Change your password here.</p>
<p><strong>Payments</strong> – Payment settings are used to manage your account using our partner at Stripe.com.  You can learn more about Stripe security <ExternalLink href="https://stripe.com/docs/security/stripe">here</ExternalLink>.</p>
</div>,

<div>
<h2>
ID Verification
</h2>
<p>In order to manage your account, click the icon with your photo on the upper right hand side of the navigation bar.</p>
<p>In order to qualify for our premium membership all Pet Sitters and Pet Owners must pass ID verification. You can find out more about it <NamedLink name="YotiPage">here</NamedLink>.</p>
</div>,
]

const GeneralQuestionsPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="General Questions | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'GeneralQuestionsPage',
        description: 'All website related questions',
        name: 'GeneralQuestionsPage',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain>

          <div className={css.questionMain}>
            <div className={css.pageContent}>
              <div><h3 className={css.helpTitle}>General Questions</h3></div>
              <div className={css.logoWrap}><img src={logo} /></div>
            </div>
          </div>

          <Tabs className={css.sectionContent}>
            <div className={css.goBack}>
              <NamedLink name="HelpCenter" className={css.backUrl}>Help Center</NamedLink> <img src={arrow} /> <span className={css.backUrl}>General Questions</span>
            </div>
            <div className={css.goFlex}>

              <div className={css.whatwedoLeft}>

                <TabList>

                  <label for="collapsible1" className={css.lblToggle}><span className={css.collapsibleTitle}>Getting Started</span></label>

                  <Tab>
                    <NavLink to="/general/1" className={css.link} activeClassName={css.activeLink} >
                      <div className={css.collapseItem}>
                        <a>1. How Do I Sign Up?</a>
                      </div>
                    </NavLink>
                  </Tab>

                  <Tab>
                    <NavLink to="/general/2" className={css.link} activeClassName={css.activeLink} >
                      <div className={css.collapseItem}>
                        <a>2. Membership</a>
                      </div>
                    </NavLink>
                  </Tab>

                  <Tab>
                    <NavLink to="/general/3" className={css.link} activeClassName={css.activeLink} >
                      <div className={css.collapseItem}>
                        <a>3. Create your Listing</a>
                      </div>
                    </NavLink>
                  </Tab>

                  <Tab>
                    <NavLink to="/general/4" className={css.link} activeClassName={css.activeLink} >
                      <div className={css.collapseItem}>
                        <a>4. What is the minimum age?</a>
                      </div>
                    </NavLink>
                  </Tab>
                  
                  <label for="collapsible1" className={css.lblToggle}><span className={css.collapsibleTitle}>Your Account</span></label>
                
                  <Tab>
                    <NavLink to="/general/5" className={css.link} activeClassName={css.activeLink} >
                      <div className={css.collapseItem}>
                        <a>5. Your Listings</a>
                      </div>
                    </NavLink>
                  </Tab>

                  <Tab>
                    <NavLink to="/general/6" className={css.link} activeClassName={css.activeLink} >
                      <div className={css.collapseItem}>
                        <a>6. Managing your Profile</a>
                      </div>
                    </NavLink>
                  </Tab>

                  <Tab>
                    <NavLink to="/general/7" className={css.link} activeClassName={css.activeLink} >
                      <div className={css.collapseItem}>
                        <a>7. Account Settings</a>
                      </div>
                    </NavLink>
                  </Tab>

                  <Tab>
                    <NavLink to="/general/8" className={css.link} activeClassName={css.activeLink} >
                      <div className={css.collapseItem}>
                        <a>8. ID Verification</a>
                      </div>
                    </NavLink>
                  </Tab>

                </TabList>

              </div>

              <div className={css.whatwedoRight}>
                <Route path="/general/:id" render={(props) => {
                  return articles[props.match.params.id - 1] ? articles[props.match.params.id - 1] : <NamedRedirect name="NotFoundPage"></NamedRedirect>
                }}>
                </Route>
              </div>

            </div>

          </Tabs>

        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default GeneralQuestionsPage;


