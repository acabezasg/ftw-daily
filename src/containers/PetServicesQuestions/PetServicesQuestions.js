import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FacebookProvider,Page } from 'react-facebook';
import { Timeline } from 'react-twitter-widgets';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  ExternalLink,
  
} from '../../components';

import arrow from './arrow.png';

import css from './PetServicesQuestions.css';

const PetServicesQuestions = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Help Center | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PetServicesQuestions',
        description: 'About Trust My Pet Sitter',
        name: 'Help Center',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain>

        <div className={css.questionMain}>
            <div className={css.sectionContent}>
              <h3>Pet Service Questions</h3>
            </div>
          </div>

    <Tabs className={css.sectionContent}>
<div className={css.goBack}>
<NamedLink name="HelpCenter" className={css.backUrl}>Help Center</NamedLink> <img src={arrow} /> <span className={css.backUrl}>Pet Service Questions</span>
</div>
    <div className={css.goFlex}>

      <div className={css.whatwedoLeft}>

            <TabList>

            <label for="collapsible1" className={css.lblToggle}><span className={css.collapsibleTitle}>Pet Service Questions</span></label>

              <Tab><div className={css.collapseItem}>
                <a>1. What are your Service Fees?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>2. How much does it cost to join Trust My Pet Sitter?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>3. How do I create an account?</a>
              </div></Tab>

            </TabList>

      </div>

      <div className={css.whatwedoRight}>

        <TabPanel>
          <h2>
            What are your Service Fees?
          </h2>
          <p>To help operate the Trust My Pet Sitter platform, including services like Pet Advice Line, Insurance,  customer support and credit card processing, we charge a service fee when a booking is confirmed.</p>

          <p><strong>Pet Services Fee</strong></p>

          <p>Pet Services are not charged a service fee to receive contact from Pet Owners via the Trust My Pet Sitter Platform.</p>

        </TabPanel>

        <TabPanel>
        <h2>How much does it cost to join Trust My Pet Sitter?</h2>

        <p>Trust My Pet Sitter charges a small membership fee to cover our Insurance, Pet Support Advice Line and support staff.</p>

        <p>You can review the latest membership fees at: <NamedLink name="LandingPage">Membership Page</NamedLink></p>
        </TabPanel>

        <TabPanel>
          <h2>How do I create an account?</h2>

          <p>To create an account with Trust My Pet Sitter you must be at least 18 years old and be in possession of an ID verifiable document such as a Driving Licence, Passport or ID Card.</p>

          <p>To get started just select the “Sign Up” icon in the Navigation Bar and follow the steps shown on the screen:</p>

          <ul className={css.mainUL}>
            <li>Email Address</li>
            <li>First Name</li>
            <li>Last Name</li>
            <li>Password</li>
          </ul>

          <p>Click the Accept Terms and Conditions to join as a user.  You cannot send or receive messages from members until you complete the “Create a Post” user journey.</p>

          <p>To Create a Post select the “Create a Post” icon in the Navigation Bar and complete the steps for your chosen Category:</p>
          
          <ul className={css.mainUL}>
            <li>Pet Owner</li>
            <li>Pet Sitter</li>
            <li>Pet Services</li>
          </ul>
          
          <p>When you have completed the Post details you will be a full member of our community and able to converse using our secure messaging platform</p>
         
        </TabPanel>


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

export default PetServicesQuestions;


