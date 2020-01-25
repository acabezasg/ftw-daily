import React from "react";
import { StaticPage, TopbarContainer } from "../../containers";
import {
  ContactForm,
  GoogleMap,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
  CrowdFundingForm
  // ExternalLink,
} from "../../components";

import css from "./CrowdFundingPage.css";
import banner from "./banner.jpg";
import affiliate from "./affiliate.png";
import paw from "./paw.png";
import img from "./sitters.jpg";

const CrowdFundingPage = () => {
  // const { siteTwitterHandle, siteFacebookPage } = config;
  // const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="We're crowdfunding! | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'CrowdFundingPage',
        description: 'Affiliate',
        name: 'CrowdFundingPage',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain>
          <div className={css.affiliateWrapper}>
            <img src={banner} />
            <div className={css.imgOverlay}>
              <div className={css.crowdTitle}>
              <h1 className={css.pageTitle}>We’re <i>Crowdfunding</i></h1>
              <p>Pre-register for exclusive early access</p>
              </div>
            </div>
          </div>

        <div className={css.affiliateFirst}>
          <div className={css.sectionContent}>
           <div className={css.wrapFlex}>
             <div className={css.wrapCol}>
              <h1>Don't miss out...</h1>
              <p className={css.wrapP}>
                Last year we raised £330k in a very successful crowdfunding campaign. 
                We overfunded by 265% with more than 400 investors in just 7 days! 
                Completing the round so quickly did mean however, that not everyone 
                was able to come on board at that time.
              </p>

              <p className={css.wrapP}><strong>If you missed out last time, now is your chance as we’re about to launch our second crowdfunding campaign.</strong></p>

             </div>

             <div className={css.wrapCol}>
               <h1>Get started now!</h1>
                <CrowdFundingForm />
             </div>
           </div>
          </div>
        </div>

        <div className={css.affiliateSecond}>
          <div className={css.sectionContent}>
            <h1>Our Mission</h1>
            <p>Nobody should need to spend hours plotting routes, let alone worry about “getting it right”.</p>
          </div>
        </div>

        <div className={css.affiliateFirst}>
          <div className={css.sectionContent}>
            <h1>Pre-register for exclusive early access</h1>
            <h2 className={css.byJoin}>We have big plans for 2020, we’re going to:</h2>
            <ul className={css.affUl}>
              <li>Expand into the much larger motorboat market</li>
              <li>Drastically increase our marketing spend</li>
              <li>Add new acquisition channels</li>
              <li>And form industry partnerships</li>
            </ul>
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

export default CrowdFundingPage;
