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
  
} from '../../components';

import twitterimg from './twitter.png';
import facebookimg from './facebook.png';

import css from './WhatWeDoPage.css';

const WhatWeDoPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="What We Do | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'WhatWeDoPage',
        description: 'About Trust My Pet Sitter',
        name: 'What We Do',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain>

        <div className={css.whatwedoBg}>

        <div className={css.whatwedoTitle}>
          <div className={css.reveal}><div className={css.revealContent}><h2>What.</h2></div></div>
          <div className={css.reveal}><div className={css.revealContent}><h2>We.</h2></div></div>
          <div className={css.reveal}><div className={css.revealContent}><h2>Do.</h2></div></div>
        </div> 

        </div>

    <div className={css.staticPageWrapper}>

      <div className={css.sectionContent}>

    <Tabs className={css.whatwedoWrapper}>

      <TabList className={css.whatwedoLeft}>
        <Tab className={css.tabImg}> <span>Pet Owners</span></Tab>
        <Tab className={css.tabImg}> <span>Pet Sitters</span></Tab>
        <Tab className={css.tabImg}> <span>Pet Services</span></Tab>
      </TabList>

      <div className={css.whatwedoRight}>
       <TabPanel>
          <h2>
            Most people know instinctively that pets are likely to be happier in their own homes. 
            The most obvious reason is that your pets are used to a daily routine, where they 
            sleep, their feeding schedule, familiar smells and sounds of their immediate 
            environment and the companionship of any other pets in your household.
          </h2>

          <p>
            At Trust My Pet Sitter we introduce you to verified Live-In Pet Sitters both near and 
            far travellers, who will come to your home and look after your pets. You can browse 
            Pet Sitters and make contact with them to see if they may be a good fit for your pet.
          </p>

          <p>
            Every Pet Sitter is ID verified using industry leading technology. At Trust My Pet Sitter 
            your pets benefit from 1:1 attention from a dedicated live-in Pet Sitter, chosen by you!
          </p>
        </TabPanel>

        <TabPanel>
          <h2>
            List your Pet Sitters Business at Trust My Pet Sitter and let us help give you the tools 
            to success. You set your work schedule, set your rates and concentrate on running your business.
          </h2>

          <p>
            We'll ensure you are continually advertised helping to attract new clients and build great relationships.
            Trust My Pet Sitter can help to connect you with local pet owners looking for Daily Drop-in Pet Sitters, 
            and Dog Walkers.
          </p>
        </TabPanel>

        <TabPanel>
          <h2>
            List your Pet Services Business at Trust My Pet Sitter and let us help give you the tools 
            to success. You set your work schedule, set your rates and concentrate on running your business.
          </h2>

          <p>
            We'll ensure you are continually advertised helping to attract new clients and build great relationships.
            Trust My Pet Sitter can help to connect you with local pet owners looking for Daily Drop-in Pet Sitters, 
            and Dog Walkers.
          </p>
        </TabPanel>

      </div>

    </Tabs>
        
        </div>

    <div className={css.trustFollow}>

    <div className={css.followLeft}>
    
    </div>
        
      <div className={css.followRight}>

        <div className={css.trustFb}>

          <img src={facebookimg} alt="Twitter Icon" />

          <h2>TMPS on Facebook</h2>

          <FacebookProvider appId="1569883489808798">
            <Page href="https://www.facebook.com/trustmypetsitter" tabs="timeline" />
          </FacebookProvider>

        </div>

          <div className={css.trustTw}>

            <img src={twitterimg} alt="Facebook Icon" />

            <h2>TMPS on Twitter</h2>

            <Timeline
              dataSource={{
              sourceType: 'profile',
              screenName: 'trustpetsitter'
            }}
              options={{
              username: 'trustpetsitter',
              height: '507px'
            }}
              onLoad={() => console.log('Timeline is loaded!')}
              />

          </div>

        </div>

      </div>

    </div>

      </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default WhatWeDoPage;


