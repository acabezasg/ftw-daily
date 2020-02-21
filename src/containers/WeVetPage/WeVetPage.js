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

import css from "./WeVetPage.css";
import banner from "./banner.jpg";
import pawsquad from "./pawsquad.png";
import superhog from "./superhog.jpg";
import yoti from "./yoti.jpg";

const WeVetPage = () => {
  // const { siteTwitterHandle, siteFacebookPage } = config;
  // const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="What makes us different | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'WeVetPage',
        description: 'Affiliate',
        name: 'WeVetPage',
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
              <h1 className={css.pageTitle}>We’ve Raised the Bar</h1>
              <p>We don't let just anyone watch our pets</p>
              </div>
            </div>
          </div>

        <div className={css.affiliateFirst}>
          <div className={css.sectionContent}>
            <h1 className={css.pageTitle}>We are Pet People first and foremost,<br />not Tech People</h1>
            <p className={css.HowWeDoIt}>You could say that’s what sets up out from the crowd. What makes us different.</p>
            <p>When we were creating Trust My Pet Sitter we didn’t want just anyone to watch our pets, we wanted to be sure Pet Sitters were right for us – and our pets. So how did we do that?</p>
            <p className={css.HowWeDoItP}>We looked at what safeguards we’d need to protect our owners their pets and our sitters. We teamed up with the best partners, who shared a common vision of being the best at what they do, helping to protect you and offer peace of mind for all pet sitting experiences - on both sides.</p>
          </div>
        </div>

        <div className={css.affiliateSecond}>
          <div className={css.sectionContent}>
            <ul>
              <li>£1m property damage and £1m public liability protection </li>
              <li>Damages deposit up to £1000 per pet sit</li>
              <li>Secure PCI Level 1 Payment Gateway to protect your transactions</li>
              <li>Free ID check – Fast, accurate and free ID verification tool </li>
              <li>24/7 Virtual Vet Advice for all Pet Sitters staffed by UK qualified Veterinary Surgeons.</li>
            </ul>
          </div>
        </div>


        <div className={css.affiliateFirst}>
          <div className={css.sectionContent}>
            <h1>Our Partnerships</h1>
            <div className={css.partnersGrid}>
              <div className={css.partnersItem}>
                <div className={css.partnersImg}>
                  <img src={yoti} />
                </div>
                <div className={css.partnersContent}>
                  <p><strong>We partnered up with PawSquad</strong></p>
                  <p>PawSquad lets you video call or text chat with a qualified vet free at any time or day or night, 365 days a year. You can be sure when you are away from home your Pet sitter has a Vet available to discuss any issues, no matter how small.</p>
                  <p><ExternalLink className={css.learnMore} href="https://pawsquad.com">Learn more →</ExternalLink></p>
                </div>
              </div>
              <div className={css.partnersItem}>
                <div className={css.partnersImg}>
                  <img src={superhog} />
                </div>
                <div className={css.partnersContent}>
                  <p><strong>We partnered up with YOTI</strong></p>
                  <p>YOTI works by setting up a trusted, genuine and verified digital identity across 130 countries within a few minutes.  So, you can see that all of our members have a verified digital identity.</p>
                  <p><ExternalLink className={css.learnMore} href="https://yoti.com">Learn more →</ExternalLink></p>
                </div>
              </div>
              <div className={css.partnersItem}>
                <div className={css.partnersImg}>
                  <img src={pawsquad} />
                </div>
                <div className={css.partnersContent}>
                  <p><strong>We partnered up with Superhog</strong></p>
                  <p>Superhog is our premium members insurance backed guarantee, working to protect your home and contents for up to £1million while you are away from home.</p>
                  <p><ExternalLink className={css.learnMore} href="https://superhog.com">Learn more →</ExternalLink></p>
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

export default WeVetPage;
