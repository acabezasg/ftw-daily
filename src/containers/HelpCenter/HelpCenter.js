import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink
} from '../../components';

import css from './HelpCenter.css';
import arrowRight from './images/arrowright.png';
import flag from './images/flag.png';
import controls from './images/controls.png';
import shield from './images/shield.png';
import community from './images/community.png';
import help from './images/help.png';
import sitters from './images/sitters.png';
import homes from './images/homes.png';

const HelpCenter = () => {
  

  // prettier-ignore
  return (
    <StaticPage
      title="Help Center | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'HelpCenter',
        description: 'Frequently Asked Questions',
        name: 'HelpCenter',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

<LayoutWrapperMain className={css.staticPageWrapper}>
  <div className={css.banner}>
    <div className={css.bannerContent}>
      <div className={css.bannerTitle}>
        <span className={css.helpTitle}>
        How can we help?
        </span>
      </div>
      <div className={css.bannerRight}>
        <img src={help} className={css.helpImage} />
      </div>
    </div>
  </div>
  <div className={css.skinWrapper}>
    <div className={css.reccArticles}>
      <h2>Recommended Articles</h2>
    </div>
    <div className={css.showArticles}>
      <div className={css.activeArticle}>
        <div className={css.articleInside}>
          <h3>How do I find the right Pet Sitter?</h3>
          <p>You can browse available Pet Sitters who have expressed
            a preference to provide services in your area, region or country.
          </p>
          <a>Read More<img class={css.arroW} src={arrowRight} /></a>
        </div>
      </div>
      <div className={css.activeArticle}>
        <div className={css.articleInside}>
          <h3>How do I find homes and Pets to Sit?</h3>
          <p>You can browse Pet Owners who have placed a listing in 
            area or country specific locations. Get started by 
            clicking the link on the home page “Find Homes to Sit”
          </p>
          <a>Read More<img class={css.arroW} src={arrowRight} /></a>
        </div>
      </div>
      <div className={css.activeArticle}>
        <div className={css.articleInside}>
          <h3>How do I make a Pet Sitter booking?</h3>
          <p>You can browse Pet Owners who have placed a listing in 
            area or country specific locations. Get started by 
            clicking the link on the home page “Find Homes to Sit”
          </p>
          <a>Read More<img class={css.arroW} src={arrowRight} /></a>
        </div>
      </div>
    </div>
    <hr className={css.helpDivider} />
    <div className={css.imageTips}>
      <div className={css.imageItem}>
        <div className={css.imageContainer}>
          <img src={sitters} />
        </div>
        <div className={css.textContainer}>
          <div className={css.textMove}>
            <h3>Find a Pet Sitter</h3>
            <p>Get help with booking Pet Sitters and
              finding the perfect match.
            </p>
          </div>
        </div>
      </div>
      <div className={css.imageItem}>
        <div className={css.imageContainer}>
          <img src={homes} />
        </div>
        <div className={css.textContainer}>
          <div className={css.textMove}>
            <h3>Find Pets and Homes to look after</h3>
            <p>Get help with setting up payments and
              withdrawling your funds.
            </p>
          </div>
        </div>
      </div>
    </div>
    <h2 className={css.topicsTitle}>Topics you may find helpful</h2>

    <div className={css.topics}>

    <div className={css.topicsMain}>
       <div className={css.iconTopic}>
         <img src={flag} />
       </div>
       <div className={css.topicContent}>
         <h3>Getting started</h3>
        <ul>
          <li>Starting your career</li>
          <li>Pet Sitters</li>
          <li>Creating account</li>
          <li>General questions</li>
        </ul>
       </div>
    </div>

    <div className={css.topicsMain}>
       <div className={css.iconTopic}>
         <img src={controls} className={css.controls} />
       </div>
       <div className={css.topicContent}>
         <h3>Your account</h3>
        <ul>
          <li>Managing your account</li>
          <li>ID Verification</li>
          <li>Account security</li>
          <li>Closing your account</li>
        </ul>
       </div>
    </div>

    <div className={css.topicsMain}>
       <div className={css.iconTopic}>
         <img src={community} />
       </div>
       <div className={css.topicContent}>
         <h3>Our Community</h3>
        <ul>
          <li>Accessibility</li>
          <li>Local communities</li>
          <li>Pet community</li>
          <li>Promoting on socials</li>
        </ul>
       </div>
    </div>

    <div className={css.topicsMain}>
       <div className={css.iconTopic}>
         <img src={shield} />
       </div>
       <div className={css.topicContent}>
         <h3>Trust and safety</h3>
        <ul>
          <li>Ways of security</li>
          <li>Yoti identity checker</li>
          <li>Prevent fraud</li>
          <li>Payment informations</li>
        </ul>
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

export default HelpCenter;
