
import React from 'react';
import { FacebookProvider, EmbeddedPost, Page } from 'react-facebook';
import { Timeline } from 'react-twitter-widgets';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import { NamedLink ,SecondaryButton } from '../../components';
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

import css from './OrderTypesPage.css';

const OrderTypesPage = (props) => {

  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);
  const draftId = '00000000-0000-0000-0000-000000000000';
  const draftSlug = 'draft';
  const type = props.params.type?props.params.type:'new';
  // prettier-ignore
  return (
    <StaticPage
      title="Order Types | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'OrderTypes',
        description: 'About Trust My Pet Sitter',
        name: 'Order Types',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain>

          <div className={css.whatwedoBg}>

            <div className={css.whatwedoTitle}>
              <div className={css.reveal}><div className={css.revealContent}><h3>Order.</h3></div></div>
              <div className={css.reveal}><div className={css.revealContent}><h3>Type.</h3></div></div>
              <div className={css.reveal}><div className={css.revealContent}><h3>Page.</h3></div></div>
            </div>
          </div>

          <div className={css.staticPageWrapper}>
            <div className={css.sectionContent}>
              <h2 class="listing-form-title" id="foo">Select category</h2>

              <div id="option-groups">
                <div class="option-group" name="category">
                <NamedLink name="EditListingPage" params={{ slug: draftSlug, id: draftId, type: type, tab: 'description_owner' }}>  
                    <SecondaryButton> 
                        Pet Owner
                    </SecondaryButton>
                  </NamedLink>
                  <NamedLink name="EditListingPage" params={{ slug: draftSlug, id: draftId, type: type, tab: 'description_sitter' }}>  
                    <SecondaryButton> 
                        Pet Sitter
                    </SecondaryButton>
                  </NamedLink>
                  <NamedLink name="EditListingPage" params={{ slug: draftSlug, id: draftId, type: type, tab: 'description_service' }}>  
                    <SecondaryButton> 
                        Pet Service
                    </SecondaryButton>
                  </NamedLink>
                </div>
              </div>
              <div class="js-form-fields hidden"></div>
            </div>

            <div className={css.trustFollow}>
              <div className={css.followLeft}>
              </div>
              <div className={css.followRight}>
                <div className={css.trustFb}>
                  <img src={facebookimg} alt="Twitter Icon" />
                  <h2>TMPS on Facebook</h2>
                  <FacebookProvider appId="1569883489808798">
                    <Page href="https://www.facebook.com/trustmypetsitter" tabs="timeline" />
                  </FacebookProvider>
                </div>
                <div className={css.trustTw}>
                  <img src={twitterimg} alt="Facebook Icon" />
                  <h2>TMPS on Twitter</h2>
                  <Timeline
                    dataSource={{
                      sourceType: 'profile',
                      screenName: 'trustpetsitter'
                    }}
                    options={{
                      username: 'trustpetsitter',
                      height: '507px'
                    }}
                    onLoad={() => console.log('Timeline is loaded!')}
                  />
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

export default OrderTypesPage;


