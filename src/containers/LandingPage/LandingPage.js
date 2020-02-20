import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { injectIntl, intlShape } from "react-intl";
import { isScrollingDisabled } from "../../ducks/UI.duck";
import config from "../../config";
import {
  Page,
  SectionHero,
  SectionLocations,
  SectionFeatured,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  SliderHero,
  HomepageVideo,
  Stepper2,
  NamedLink,
  ExternalLink,
  FeaturedIn,
} from "../../components";
import { TopbarContainer } from "../../containers";

import carefully from "./carefully.jpg";
import wevet from "./wevet.jpg";
import superhog from "./superhog.jpg";
import yoti from "./yoti.jpg";
import pawsquad from "./pawsquad.png";
import facebookImage from "../../assets/saunatimeFacebook-1200x630.jpg";
import twitterImage from "../../assets/saunatimeTwitter-600x314.jpg";
import featured1 from "./featuredin/1.png";
import featured2 from "./featuredin/2.png";
import featured3 from "./featuredin/3.png";
import featured4 from "./featuredin/4.png";
import elite from './elite.jpg';
import css from "./LandingPage.css";
import discoverCheck from "./select.png";
import discoverShield from "./shield.png";
import discoverNetwork from "./network.png";

export const LandingPageComponent = props => {
  const { history, intl, location, scrollingDisabled } = props;

  // Schema for search engines (helps them to understand what this page is about)
  // http://schema.org
  // We are using JSON-LD format
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage(
    { id: "LandingPage.schemaTitle" },
    { siteTitle }
  );
  const schemaDescription = intl.formatMessage({
    id: "LandingPage.schemaDescription"
  });
  const schemaImage = `${config.canonicalRootURL}${facebookImage}`;

  return (
    <Page
      className={css.root}
      scrollingDisabled={scrollingDisabled}
      contentType="website"
      description={schemaDescription}
      title={schemaTitle}
      facebookImages={[{ url: facebookImage, width: 1200, height: 630 }]}
      twitterImages={[
        {
          url: `${config.canonicalRootURL}${twitterImage}`,
          width: 600,
          height: 314
        }
      ]}
      schema={{
        "@context": "http://schema.org",
        "@type": "WebPage",
        description: schemaDescription,
        name: schemaTitle,
        image: [schemaImage]
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
        {/* 
          <div className={css.heroContainer}>
            <SectionHero className={css.hero} history={history} location={location} />
          </div>
        */}
        <div className={css.sliderFeaturedWrapper}>
          <div>
          <SliderHero />
          <div className={css.featuredIn}>
              <div className={css.featuredSection}>
              <div className={css.featuredMobile}>
                <h1>Featured In</h1>
                <FeaturedIn />
              </div>
                <div className={css.featuredWrapper}>
                  <div className={css.featuredItem}>FEATURED IN</div>
                  <a className={css.featuredItem}>
                    <img src={featured1} />
                  </a>
                  <a className={css.featuredItem}>
                    <img src={featured2} />
                  </a>
                  <a className={css.featuredItem}>
                    <img src={featured3} />
                  </a>
                  <a className={css.featuredItem}>
                    <img src={featured4} />
                  </a>
                </div>
              </div>
            </div>
            </div>

        </div>

          <ul className={css.sections}>

            <li className={css.sections}>
                <div className={css.sectionServiceContent}>
                  <div className={css.serviceGrid}>
                    <div className={css.serviceGridItem}>
                      <div className={css.serviceGridContent}>
                        <div className={css.serviceCenter}>
                        <h1>
                          Unique<br className={css.experienceBr} /> Experience
                        </h1>
                        <p>Build unforgettable memories<br />watching pets in their own home</p>
                        </div>
                      </div>
                    </div>
                    <div className={css.serviceGridItem}>
                      <img src={elite}></img>
                    </div>
                  </div>
                </div>	
            </li>

            <li className={css.sections}>
              <div className={(css.sectionServiceContent, css.sectionWeVet)}>
                <div className={css.WeVetSection}>
                  <h1 className={(css.vettitle)}>
                    We Vet every Pet Sitter
                  </h1>
                  <p className={css.WeVetDiv}>We don't let just anyone watch our pets</p>
                  <p className={css.WeVetLearn}><NamedLink name="WeVetPage">Learn How We Do It <span className={css.WeVetArrow}>&rarr;</span></NamedLink></p>
                </div>
                <div className={css.WeVetImage}>
                  <img src={wevet} />
                </div>
              </div>
            </li>
            
            <li className={css.sections}>
              <div className={css.sectionHomestay}>
                <div className={css.newstandardSection}>
                  <h1 className={css.vettitle}>
                    Discover a new standard in Pet Care
                  </h1>
                  <div className={css.newstandardCol}>
                  <div className={css.newstandardItem}>
                    <p className={css.discoverFlex}>
                      <span><img src={discoverCheck} /></span>
                      <span>We provide a wide choice of Pet Sitters,<br />to help you choose the one that's right<br />for you and your pets</span>
                    </p>
                  </div>
                  <div className={css.newstandardItem}>
                    <p className={css.discoverFlex}>
                      <span><img src={discoverShield}  /></span>
                      <span>Our Insurance backed guarantee covers<br />your home for up to £1 million</span>
                    </p>
                  </div>
                  <div className={css.newstandardItem}>
                    <p className={css.discoverFlex}>
                      <span><img src={discoverNetwork}  /></span>
                      <span>With our trusted partners we've got<br />you and your pet covered</span>
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            </li>

            <hr className={css.hpHr2} />

            <li className={css.sections}>
              <div className={css.sectionHomestay}>
                <div className={css.newstandardSection}>
                  <div className={css.carefullyselectedCol}>
                  <div className={css.carefullyselectedItem}>
                  <h1>We’ve got you Covered</h1>
                    <p>
                       From Dogs, Cats and Rabbits to Gecko’s, Parrots and Horses
                    </p>
                   <ul className={css.carefullyCopy}>
                     <li><img src="https://i.imgur.com/5acrgq1.png" /> Pets are happiest at home in their own environment</li>
                     <li><img src="https://i.imgur.com/5acrgq1.png" /> 1:1 care and attention</li>
                     <li><img src="https://i.imgur.com/5acrgq1.png" /> Get regular updates from your sitter</li>
                     <li><img src="https://i.imgur.com/5acrgq1.png" /> Pets follow their familiar routines when you are away</li>
                     <li><img src="https://i.imgur.com/5acrgq1.png" /> Minimise disruption to your family</li>
                     <li><img src="https://i.imgur.com/5acrgq1.png" /> Choose the sitter that is right for your pets</li>
                     <li><img src="https://i.imgur.com/5acrgq1.png" /> Our sitters come with an Insurance backed guarantee</li>
                     <li><img src="https://i.imgur.com/5acrgq1.png" /> Happy Pets = Happy Owners</li>
                   </ul>
                  </div>
                  <div className={css.carefullyselectedItem}>
                    <div className={css.carefullyImage}>
                      <img src={carefully} />
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </li>

            <hr className={css.hpHr} />

            <li className={css.sections}>
              <div className={css.sectionHomestay}>
                <div className={css.newstandardSection}>
                  <h1 className={css.vettitle}>
                    Our Trusted Partners
                  </h1>
                  <div className={css.newstandardCol}>
                  <div className={css.newstandardItem}>
                    <div className={css.ourPartners}>
                      <div className={css.ourPartnersItem1}>
                         <img src={yoti} />
                      </div>
                      <div className={css.ourPartnersItem2}>
                        <h2>YOTI</h2>
                        <p>YOTI works by allowing you to set up a trusted, genuine and verified digital identity.</p>
                        <p className={css.secondCol}><ExternalLink href="https://www.yoti.com">Learn more <span className={css.WeVetArrow5}>→</span></ExternalLink></p>
                      </div>
                    </div>
                  </div>
                  <div className={css.newstandardItem}>
                    <div className={css.ourPartners}>
                      <div className={css.ourPartnersItem1}>
                         <img src={superhog} />
                      </div>
                      <div className={css.ourPartnersItem2}>
                        <h2>Superhog</h2>
                        <p>An Insurance backed guarantee working to protect your home and contents for up to £1 million.</p>
                        <p className={css.secondCol}><ExternalLink href="https://www.superhog.com">Learn more <span className={css.WeVetArrow5}>→</span></ExternalLink></p>
                      </div>
                    </div>
                  </div>
                  <div className={css.newstandardItem}>
                    <div className={css.ourPartners}>
                      <div className={css.ourPartnersItem1}>
                         <img src={pawsquad} />
                      </div>
                      <div className={css.ourPartnersItem2}>
                        <h2>Pawsquad</h2>
                        <p>PawSquad lets you video call or text chat with a qualified vet free at any time or day or night, 365 days a year.</p>
                        <p className={css.secondCol}><ExternalLink href="https://www.pawsquad.com">Learn more <span className={css.WeVetArrow5}>→</span></ExternalLink></p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </li>

            <hr className={css.hpHr} />

          {/*
            <li className={(css.sections, css.whyUseBg)}>
              <div className={css.sectionContent}>
                <h1>Why use Trust My Pet Sitter?</h1>

                <div className={css.whyUse}>
                  <div className={css.whyContainer}>
                    <h2>Safety</h2>

                    <p>
                      All Premium members are ID verified and the membership
                      includes insurance and access to a 24/7 Virtual Vet
                    </p>

                    <NamedLink name="YotiPage">Learn More</NamedLink>
                  </div>

                  <div className={css.whyContainer}>
                    <h2>Our Community</h2>

                    <p>
                      Find and meet like minded people in our pet community.
                      Find pet sitters, dog walkers, groomers and vets
                    </p>

                    <NamedLink name="SignupPage">Join Now</NamedLink>
                  </div>

                  <div className={css.whyContainer}>
                    <h2>Travel the World</h2>

                    <p>
                      Pet Sitters can travel the world looking after much loved
                      pets in the family home. Find your next great adventure...
                    </p>

                    <NamedLink name="PawSquadPage">Learn More</NamedLink>
                  </div>

                  <div className={css.whyContainer}>
                    <h2>The Personal Touch</h2>

                    <p>
                      Our team personally approve every verified Pet Sitter
                      prior to going live on Trust My Pet Sitter
                    </p>

                    <NamedLink name="SignupPage">Join Now</NamedLink>
                  </div>
                </div>
              </div>
            </li>

            <li className={css.section}>
              <div className={css.sectionContentFirstChild}>
                <HomepageVideo />
              </div>
            </li>

            */}

          {/*
            <li className={css.section}>
              <div className={css.sectionContent}>
                <div className={css.howItWorksColors}>
                <h1 className={css.howtitle}>How it Works</h1>

                <Stepper2 />

                <div className={css.firstchistepper}>
                  <span className={css.step}>1</span>
                  <h2>Choose Pet Sitter</h2>
                  <p>
                    Trust My Pet Sitter introduces a wider choice of local,
                    national and international pet sitters.
                  </p>
                </div>

                <div className={css.mobileStepper}>
                  <span className={css.step}>2</span>
                  <h2>Book Pet Sitter</h2>
                  <p>
                    Book your Pet Sitter using our secure payment provider. All
                    bookings are covered by 24/7 Vet Advice and Emergency
                    Insurance
                  </p>
                </div>

                <div className={css.mobileStepper}>
                  <span className={css.step}>3</span>
                  <h2>Pets are Happy at Home</h2>
                  <p>
                    Your Pet stays home with our verified Pet Sitter, happy and
                    secure in their own familiar space.
                  </p>

                  <div className={css.mobbt}>
                    <NamedLink name="SignupPage">Start Now</NamedLink>
                  </div>
                </div>
              </div>
              </div>
            </li>

          */}

            <li className={css.section}>
              <div className={css.sectionContent}>
                <SectionLocations />
              </div>
            </li>

          </ul>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  );
};

const { bool, object } = PropTypes;

LandingPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from withRouter
  history: object.isRequired,
  location: object.isRequired,

  // from injectIntl
  intl: intlShape.isRequired
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state)
  };
};

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const LandingPage = compose(
  withRouter,
  connect(mapStateToProps),
  injectIntl
)(LandingPageComponent);

export default LandingPage;
