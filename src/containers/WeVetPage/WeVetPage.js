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
              <h1 className={css.pageTitle}>We Vet every Pet Sitter</h1>
              <p>We don't let just anyone watch our pets,<br />why should you?</p>
              </div>
            </div>
          </div>

        <div className={css.affiliateFirst}>
          <div className={css.sectionContent}>
            <p className={css.HowWeDoIt}>When we were putting together Trust My Pet Sitter one thing stood out to us over all others, we didn’t want just anyone to watch our pets, we wanted to be sure Pet Sitters were right for us – and our pets.</p>
            <p>That’s why we are selective about who makes the grade - and unapologetically so.</p>
            <p className={css.HowWeDoItP}><strong>You could say that’s what sets up out from the crowd. What makes us different.</strong></p>
          </div>
        </div>

        <div className={css.affiliateSecond}>
          <div className={css.sectionContent}>
          <h1>Selection</h1>
            <div className={css.selectionDiv}>
              <p>We assess every application at Trust My Pet Sitter against our six point Selection Process for inclusion.  This gives you the guarantee that we select only the finest sitters to care for your precious pets.</p>
              <p>Our Pet Sitters are carefully selected by a highly experienced team of professionals to ensure only the highest calibre of sitters reach the TMPS benchmark to care for your fur babies.</p>
              <p>We offer bespoke day care through to short and long-term assignments.</p>
              <p>We assess every Pet Sitter against our exacting Six Point criterion for inclusion. This give you the guarantee that you will be presented with a choice of high calibre candidates to choose from.</p>
              <p>We build great relationships with our Pet Sitters, working closely with them to ensure that they have everything they need from us and from you to ensure a successful pet sitting experience for all.</p>
              <p>We also encourage and monitor feedback from both parties to ensure that each continues to earn its place as part of our elite community.</p>
            </div>
          </div>
        </div>

        <div className={css.affiliateFirst}>
          <div className={css.sectionContent}>
            <h1>Our Partnerships</h1>
            <div className={css.partnersGrid}>
              <div className={css.partnersItem}>
                <div className={css.partnersImg}>
                  <img src="https://i.imgur.com/KW3nLC5.jpg" />
                </div>
                <div className={css.partnersContent}>
                  <p><strong>We partnered up with PawSquad</strong></p>
                  <p>PawSquad lets you video call or text chat with a qualified vet free at any time or day or night, 365 days a year. You can be sure when you are away from home your Pet sitter has a Vet available to discuss any issues, no matter how small.</p>
                  <p><ExternalLink className={css.learnMore} href="https://pawsquad.com">Learn more →</ExternalLink></p>
                </div>
              </div>
              <div className={css.partnersItem}>
                <div className={css.partnersImg}>
                  <img src="https://i.imgur.com/2Zfo6CI.png" />
                </div>
                <div className={css.partnersContent}>
                  <p><strong>We partnered up with YOTI</strong></p>
                  <p>YOTI works by setting up a trusted, genuine and verified digital identity across 130 countries within a few minutes.  So, you can see that all of our members have a verified digital identity.</p>
                  <p><ExternalLink className={css.learnMore} href="https://yoti.com">Learn more →</ExternalLink></p>
                </div>
              </div>
              <div className={css.partnersItem}>
                <div className={css.partnersImg}>
                  <img src="https://i.imgur.com/KxRDZfS.jpg" />
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
