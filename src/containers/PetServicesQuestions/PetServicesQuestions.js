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

    <Tabs className={css.whatwedoWrapper}>
<div className={css.goBack}>
<NamedLink name="HelpCenter" className={css.backUrl}>Help Center</NamedLink> <img src={arrow} /> <span className={css.backUrl}>Pet Service Questions</span>
</div>
    <div className={css.goFlex}>

      <div className={css.whatwedoLeft}>

            <TabList>

            <label for="collapsible1" className={css.lblToggle}><span className={css.collapsibleTitle}>Pet Service Questions</span></label>

              <Tab><div className={css.collapseItem}>
                <a>What are your Service Fees?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How much does it cost to join Trust My Pet Sitter?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How do I create an account?</a>
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


