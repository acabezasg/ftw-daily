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
            <h1 className={css.pageTitle}>We are Pet People first and foremost, not Tech People</h1>
            <p className={css.HowWeDoIt}>You could say that’s what sets up out from the crowd. What makes us different.</p>
            <p>When we were creating Trust My Pet Sitter we didn’t want just anyone to watch our pets, we wanted to be sure Pet Sitters were right for us – and our pets. So how did we do that?</p>
            <p className={css.HowWeDoItP}>We looked at what safeguards we’d need to protect our owners their pets and our sitters. We teamed up with the best partners, who shared a common vision of being the best at what they do, helping to protect you and offer peace of mind for all pet sitting experiences - on both sides.</p>

            <ul>
              <li>£1m property damage and £1m public liability protection </li>
              <li>Damages deposit up to £1000 per pet sit</li>
              <li>Secure PCI Level 1 Payment Gateway to protect your transactions</li>
              <li>Free ID check – Fast, accurate and free ID verification tool </li>
              <li>24/7 Virtual Vet Advice for all Pet Sitters staffed by UK qualified Veterinary Surgeons.</li>
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

export default WeVetPage;
