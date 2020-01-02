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
import logo from './images/logo.png';
import sitters from './images/sitters.jpg';
import homes from './images/homes.jpg';
import service from './images/service.png';

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
          <div className={css.questionMain}>
            <div className={css.sectionContent}>
              <div><h3 className={css.helpTitle}>Your Questions</h3></div>
              <div className={css.logoWrap}><img src={logo} /></div>
            </div>
          </div>
          <div className={css.skinWrapper}>
            <div className={css.reccArticles}>
              <h2>Recommended Articles</h2>
            </div>
            <div className={css.showArticles}>
              <div className={css.activeArticle}>
                <div className={css.articleInside}>
                  <NamedLink name="PetOwnerQuestions" params={{ id: 12 }}>
                    <h3>How do I find the right Pet Sitter near me?</h3>
                    <p>You must be a premium member of Trust My Pet Sitter in order to contact Pet Sitters directly. If you haven’t yet signed up, then follow the link on the navbar to “Create Post” and complete the steps.
                    </p>
                    <a>Read More<img class={css.arroW} src={arrowRight} /></a>
                  </NamedLink>
                </div>
              </div>
              <div className={css.activeArticle}>
                <div className={css.articleInside}>
                <NamedLink name="QuestionPage" params={{ id: 6 }}>
                  <h3>How much does it cost to join Trust My Pet Sitter?</h3>
                  <p>Trust My Pet Sitter charges a small membership fee to cover our Insurance,
                     Pet Support Advice Line and support staff.
                     You can review the latest membership fees at Membership page.
                  </p>
                  <a>Read More<img class={css.arroW} src={arrowRight} /></a>
                  </NamedLink>
                </div>
              </div>
              <div className={css.activeArticle}>
                <div className={css.articleInside}>
                <NamedLink name="QuestionPage" params={{ id: 13 }}>
                  <h3>What if my pet needs a vet when I am away from home?</h3>
                  <p>At Trust My Pet Sitter all our Pet Sitters are provided with access to PawSquad a 24/7 Virtual Vet staffed with UK qualified Veterinary Surgeons for the duration of their pet sit.</p>
                  <a>Read More<img class={css.arroW} src={arrowRight} /></a>
                </NamedLink>
                </div>
              </div>
            </div>
            <hr className={css.helpDivider} />
            <div className={css.imageTips}>
              <NamedLink className={css.imageItem} name="QuestionPage" params={{ id: 1 }}>
                <div className={css.imageContainer}>
                  <img src={sitters} />
                </div>
                <div className={css.textContainer}>
                  <div className={css.textMove}>
                    <h3>Find a Pet Sitter</h3>
                    <p>Get help
                      finding the perfect match for your pet.
            </p>
                  </div>
                </div>
              </NamedLink>
              <NamedLink className={css.imageItem} name="PetServicesQuestions" params={{ id: 1 }}>
                <div className={css.imageContainer}>
                  <img src={service} />
                </div>
                <div className={css.textContainer}>
                  <div className={css.textMove}>
                    <h3>Find a Pet Service</h3>
                    <p>Search for Pet Services by price, category or location.
            </p>
                  </div>
                </div>
              </NamedLink>
              <NamedLink className={css.imageItem} name="PetOwnerQuestions" params={{ id: 1 }}>
                <div className={css.imageContainer}>
                  <img src={homes} />
                </div>
                <div className={css.textContainer}>
                  <div className={css.textMove}>
                    <h3>Find a Pet Owner</h3>
                    <p>Search for Pet Owners looking for Sitters and Services
                  </p>
                  </div>
                </div>
              </NamedLink>
            </div>
            <h2 className={css.topicsTitle}>Topics you may find useful</h2>

            <div className={css.topics}>

              <div className={css.topicsMain}>
                <div className={css.iconTopic}>
                  <img src={flag} />
                </div>
                <div className={css.topicContent}>
                  <h3>Getting started</h3>
                  <ul>
                    <li>What is Trust My Pet Sitter and how does it work?</li>
                    <li>Join Up</li>
                    <li>Verify your email</li>
                    <li>Create your first posting</li>
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
                    <li>Managing your profile</li>
                    <li>Membership options</li>
                    <li>Managing your options</li>
                    <li>Cancel my membership</li>
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
                    <li>Promoting on Social</li>
                    <li>Responsibilities</li>
                    <li>Security</li>
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
                    <li>ID Verification</li>
                    <li>Insurance backed guarantee</li>
                    <li>Payment Information</li>
                    <li>Secure Messaging Platform</li>
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
