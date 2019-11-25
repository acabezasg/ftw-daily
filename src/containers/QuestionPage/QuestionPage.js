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
  
} from '../../components';

import arrow from './arrow.png';

import css from './QuestionPage.css';

const QuestionPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Help Center | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'QuestionPage',
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
<NamedLink name="HelpCenter" className={css.backUrl}>Help Center</NamedLink> <img src={arrow} />
</div>
    <div className={css.goFlex}>

      <div className={css.whatwedoLeft}>

            <TabList>

            <label for="collapsible1" className={css.lblToggle}><span className={css.collapsibleTitle}>Pet Sitter Questions</span></label>

             <Tab><div className={css.collapseItem}>
                <a>How much should I pay someone to pet / houesit?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>What is a professional pet / housesitter?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How much should I pay someone to watch my pet?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>Do Pet Sitters get paid?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>What are your Service Fees?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How much should I charge for house sitting and pet sitting?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>Do pet sitters stay overnight?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>Is pet sitting safe?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How do I know I can trust a pet sitter in my home?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>What are the rules for house sitting?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>Do Housesitters pay utilities?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>What does a pet sitter do?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>What should I ask a Pet Owner before accepting a Pet Sitting job?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>What should I know before Pet Sitting?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>Do Cats need a Pet Sitter?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>Do Pet / House sitters need insurance?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>What if my pet needs a vet when I am away from home?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How much do pet sitters charge per hour?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>Can I make a career from Pet Sitting?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How do I prepare for a Pet Sitter coming to my home?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How do I prepare for a Pet Sit?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>What is hte minimum age for a pet sitting?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How do I create an account?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How do I find a Pet Sitter?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>Can I choose my own Pet Sitter?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How do I find homes and pets to sit?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>Can I work for more then one pet sitting company?</a>
              </div></Tab>

              <Tab><div className={css.collapseItem}>
                <a>How do I get paid?</a>
              </div></Tab>



            <label for="collapsible1" className={css.lblToggle}><span className={css.collapsibleTitle}>Your account</span></label>
              
              <Tab><div className={css.collapseItem}>
                <a>Managing your account</a>
              </div></Tab>

              <div className={css.collapseItem}>
                <a>ID Verification</a>
              </div>

              <div className={css.collapseItem}>
                <a>Account security</a>
              </div>

              <div className={css.collapseItem}>
                <a>Closing your account</a>
              </div>  

              <label for="collapsible1" className={css.lblToggle}><span className={css.collapsibleTitle}>Our community</span></label>
              
              <div className={css.collapseItem}>
                <a>Accessibility</a>
              </div>

              <div className={css.collapseItem}>
                <a>Local communities</a>
              </div>

              <div className={css.collapseItem}>
                <a>Promoting on socials</a>
              </div>

    
            <label for="collapsible4" className={css.lblToggle}><span className={css.collapsibleTitle}>Trust and security</span></label>
              
              <div className={css.collapseItem}>
                <a>Ways of security</a>
              </div>

              <div className={css.collapseItem}>
                <a>Yoti identity checker</a>
              </div>

              <div className={css.collapseItem}>
                <a>Prevent fraud</a>
              </div>

              <div className={css.collapseItem}>
                <a>Payment informations</a>
              </div>

            </TabList>

      </div>

      <div className={css.whatwedoRight}>
       <TabPanel>
          <h2>
            How much should I pay someone to pet / housesit?
          </h2>
          <p>Professional Pet Sitters set their own nightly rate and can charge anywhere from $20 up to $75 per night depending upon their skills, experience and your requirements.</p><p>If you like a Pet Sitters profile but consider their nightly price too high, you can always send them a message and find out if they will consider negotiating the price.</p>
        </TabPanel>

        <TabPanel>
          <h2>
            What is a professional pet / housesitter?
          </h2>
          <p>A professional pet and house sitter is someone who considers this role their primary job.  As part of their duties looking after your pets and your home they are paid a rate agreed before the Pet and House sit commences.</p><p>They should not be confused with pet boarders who look after dogs in their home, or drop in sitters who visit but do not stay overnight.  Trust My Pet Sitters always stay in the pets home and have a pre-agreement with the Pet Owners to the duties and expectations whilst in situ.</p>    
        </TabPanel>

        <TabPanel>
          <h2>
            How much should I pay someone to watch my pet?
          </h2>
          <p>At Trust My Pet Sitter our sitters set their nightly rate, based on their skills and experience.</p><p>The average rate for Pet Sitters is from $20 to around $75 per night, but you can negotiate and choose the best pet sitter who matches your budget and expectations.</p>
        </TabPanel>

        <TabPanel>
          <h2>
            Do Pet Sitters get paid?
          </h2>
          <p>At Trust My Pet Sitters our sitters set their nightly rate, based on their skills and experience.</p><p>The average rate for Pet Sitters is from $20 to around $75 per night, but Pet Owners may negotiate and choose the best pet sitter who matches their budget and expectations.</p>
        </TabPanel>

        <TabPanel>
          <h2>
            What are your Service Fees?
          </h2>
          <p>To help operate the Trust My Pet Sitter platform, including services like Pet Advice Line, Insurance,  customer support and credit card processing, we charge a service fee when a booking is confirmed.</p>

          <p><strong>Pet Sitter Service Fee</strong></p>

          <p>This fee is 20% of the booking subtotal which is deducted from the final pay-out.  For example, if you charge $20 per night, then Trust My Pet Sitter will pay you 80% of the booking total on completion of the Pet Sit.</p>

          <p><strong>Pet Owner Service Fee</strong></p>

          <p>This fee is 10% for Pet Owners which is charged in addition to the Pet Sitter fee.  For example, if your Pet Sitter charges $20 per night, then Trust My Pet Sitter will charge $22 per night. This fee is calculated from the booking subtotal and is automatically added to the booking total.</p>

          <p><strong>Pet Services Fee</strong></p>

          <p>Pet Services are not charged a service fee to receive contact from Pet Owners via the Trust My Pet Sitter Platform.</p>

        </TabPanel>

        <TabPanel>
          <h2>
            How much should I charge for house sitting and pet sitting?
          </h2>
          <p>How much you choose to charge for House and pet sitting is entirely up to you. You should consider your level of pet experience and expectations.</p><p>The average nightly rate varies greatly but the norm would be considered anywhere from $20 to $75, again depending on experience, the type and number of pets to be looked after.</p>
        </TabPanel>

        <TabPanel>
          <h2>
            Do pet sitters stay overnight?

          </h2>
          <p>At Trust My Pet Sitter our Pet Sitters watch your pets at home. Our pets always stay at home, not in someone else’s!  Pet Sitters provide 1:1 care and attention looking after your pets in their own  space, in their own environment with familiar routines.</p>
        </TabPanel>

        <TabPanel>
          <h2>
            Is pet sitting safe?

          </h2>
          <p>At Trust My Pet Sitter we use industry leading ID verification to confirm the identity of both our Pet Sitters and Pet Owners.</p><p>We select the finest Pet Sitters for your pets. Only 20% of sitters who apply to Trust My Pet Sitter are successful.</p><p>In addition, we provide 24/7/365 Virtual Vet Advice to every active Pet Sitter no matter where they are in the world – a Vet always on hand to provide help and assistance. Our safety pack is completed with Public Liability Insurance.</p>
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

export default QuestionPage;


