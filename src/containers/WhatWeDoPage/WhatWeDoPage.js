import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import twitterimg from './twitter.png';
import facebookimg from './facebook.png';
import pawActive from './paw-active.png';
import paw from './paw.png';

import css from './WhatWeDoPage.css';

const WhatWeDoPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

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

        <div className={css.whatwedoWrapper}>
        
         <div className={css.whatwedoLeft}>
        
           <ul className={css.whatwedoUl}>
              
            <li className={css.active}><img className={css.pawImg} src={pawActive} alt="Paw Icon" /> Pet Owners</li>
            <li><img className={css.pawImg} src={paw} alt="Paw Icon" /> Pet Sitters</li>
            <li><img className={css.pawImg} src={paw} alt="Paw Icon" /> Pet Services</li>

           </ul>

         </div>

         <div className={css.whatwedoRight}>
        
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


         </div>
        
        </div>

    <div className={css.trustFollow}>

    <div className={css.followLeft}>
    
    </div>
        
      <div className={css.followRight}>

        <div className={css.trustFb}>

          <img src={facebookimg} alt="Twitter Icon" />

          <h2>TMPS on Facebook</h2>

        </div>

          <div className={css.trustTw}>

            <img src={twitterimg} alt="Facebook Icon" />

            <h2>TMPS on Twitter</h2>

          </div>

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


