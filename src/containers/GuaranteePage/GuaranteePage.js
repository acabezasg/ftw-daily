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
  CrowdFundingForm,
  NamedLink,
  Button,
  // ExternalLink,
} from "../../components";

import css from "./GuaranteePage.css";
import banner from "./banner.jpg";
import pawsquad from "./pawsquad.png";
import superhog from "./superhog.jpg";
import yoti from "./yoti.jpg";

const GuaranteePage = () => {
  // const { siteTwitterHandle, siteFacebookPage } = config;
  // const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="What makes us different | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'GuaranteePage',
        description: 'Affiliate',
        name: 'GuaranteePage',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain>

      <hr className={css.myHr} />

        <div className={css.affiliateFirst}>
          <div className={css.sectionContent}>
            <div className={css.partnersGrid}>
            <div className={css.partnersItem}>
                <div className={css.partnersImg}>
                  <img src={yoti} />
                </div>
                <div className={css.partnersContent}>
                  <p><h2>YOTI</h2></p>
                  <p>YOTI works by allowing you to set<br />up a trusted, genuine and verified<br />digital identity.</p>
                  <p className={css.learnMe}><NamedLink className={css.learnMore} name="YotiPage">Learn more →</NamedLink></p>
                </div>
              </div>
              <div className={css.partnersItem}>
                <div className={css.partnersImg}>
                  <img src={superhog} />
                </div>
                <div className={css.partnersContent}>
                  <p><h2>Superhog</h2></p>
                  <p>An Insurance backed guarantee<br />working to protect your home and<br />contents for up to £1 million.</p>
                  <p className={css.learnMe}><NamedLink className={css.learnMore} name="SuperHogPage">Learn more →</NamedLink></p>
                </div>
              </div>
              <div className={css.partnersItem}>
                <div className={css.partnersImg}>
                  <img src={pawsquad} />
                </div>
                <div className={css.partnersContent}>
                  <p><h2>Pawsquad</h2></p>
                  <p>PawSquad lets you video call or<br />text chat with a qualified vet free at any<br />time or day or night, 365 days a year.</p>
                  <p className={css.learnMe}><NamedLink className={css.learnMore} name="PawSquadPage">Learn more →</NamedLink></p>
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

export default GuaranteePage;
