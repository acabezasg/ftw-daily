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
  NamedLink
} from "../../components";
import { TopbarContainer } from "../../containers";

import facebookImage from "../../assets/saunatimeFacebook-1200x630.jpg";
import twitterImage from "../../assets/saunatimeTwitter-600x314.jpg";
import petservice1 from "./petservices-1.png";
import petservice2 from "./petservices-2.png";
import petservice3 from "./petservices-3.png";
import featured1 from "./featuredin/1.png";
import featured2 from "./featuredin/2.png";
import featured3 from "./featuredin/3.png";
import featured4 from "./featuredin/4.png";
import css from "./HomepageCopy.css";

export const HomepageCopyComponent = props => {
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
          <SliderHero />
          <div className={css.featuredIn}>
              <div className={css.featuredSection}>
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

          <ul className={css.sections}>

            <li className={css.section}>
              <div className={css.serviceContent}>
                <div className={css.sectionContent}>
                  <h1 className={css.servicetitle}>
                    The Largest Pet Services Directory
                    <br />
                    is right here!
                  </h1>
                  <div className={css.serviceIcons}>
                    <div className={css.serviceSingle}>
                      <div className={css.singleIcon}>
                        <img src={petservice1}></img>
                      </div>
                      <hr className={css.serviceHr}></hr>
                      <h3>STEP 1</h3>
                      <h2>Search by Location</h2>
                      <p>Find the top rated Pet Services in your local area.</p>
                    </div>

                    <div className={css.serviceSingle}>
                      <div className={css.singleIcon}>
                        <img src={petservice2}></img>
                      </div>
                      <hr className={css.serviceHr}></hr>
                      <h3>STEP 2</h3>
                      <h2>Search by Type</h2>
                      <p>
                        Find Dog Walkers, Groomers, Vets, Pet Food, Daycare and
                        more...
                      </p>
                    </div>

                    <div className={css.serviceSingle}>
                      <div className={css.singleIcon}>
                        <img src={petservice3}></img>
                      </div>
                      <hr className={css.serviceHr}></hr>
                      <h3>STEP 3</h3>
                      <h2>Read Reviews</h2>
                      <p>
                        Read reviews from verified pet parents at Trust My Pet
                        Sitter.
                      </p>
                    </div>
                  </div>
                  <div className={css.lastBtn}>
                    <a href="/s?pub_user_type=2">Begin Your Search</a>
                  </div>
                </div>
              </div>
            </li>

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

            <li className={css.section}>
              <div className={css.sectionContent}>
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
            </li>

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

HomepageCopyComponent.propTypes = {
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
const HomepageCopy = compose(
  withRouter,
  connect(mapStateToProps),
  injectIntl
)(HomepageCopyComponent);

export default HomepageCopy;
