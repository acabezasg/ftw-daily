import React from 'react';
import { StaticPage, TopbarContainer, ProfileSettingsPage } from '../../containers';
import { Player, BigPlayButton } from 'video-react';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  ExternalLink,
  
} from '../../components';

import css from './MembershipPage.css';
import check from './check.png';

const MembershipPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Membership | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'MembershipPage ',
        description: 'MembershipPage ',
        name: 'MembershipPage ',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain>

        <div className={css.mBanner}></div>

    <div className={css.sectionContent}>
       <div className={css.mMain}>
         <div className={css.mWrapper}>
         <div>
            <h3>Pet Owner</h3>
            <p>Plan for all pet owners</p>
            <div className={css.price}>
             <span className={css.currency}>
              £
             </span>
             <span className={css.bigNum}>
               49
             </span>
             <span className={css.month}>
               /year
             </span>
            </div>
            <p className={css.offer}>Send messages, post listings...</p>
            <div className={css.block}></div>
            <ul className={css.plans}>
              <li><img src={check} />30-day money back guarantee</li>
              <li><img src={check} /> ID verification provided by Yoti.com</li>
              <li><img src={check} /> Send messages to Pet Owners</li>
              <li><img src={check} /> Create your online Profile</li>
            </ul>
            <div className={css.getPlan}>
              <a><img src="https://i.imgur.com/JO1N5iZ.png" />Go Premium</a>
            </div>
          </div>
          <div>
            <h3>Pet Sitter</h3>
            <p>Plan for all pet owners</p>
            <div className={css.price}>
             <span className={css.currency}>
              $
             </span>
             <span className={css.bigNum}>
               49
             </span>
             <span className={css.month}>
               /year
             </span>
            </div>
            <p className={css.offer}>Send messages, post listings...</p>
            <div className={css.block}></div>
            <ul className={css.plans}>
              <li><img src={check} />30-day money back guarantee</li>
              <li><img src={check} /> ID verification provided by Yoti.com</li>
              <li><img src={check} /> Send messages to Pet Owners</li>
              <li><img src={check} /> Create your online Profile</li>
            </ul>
            <div className={css.getPlan}>
              <a><img src="https://i.imgur.com/JO1N5iZ.png" />Go Premium</a>
            </div>
          </div>
          <div>
            <h3>Pet Service</h3>
            <p>Plan for all pet owners</p>
            <div className={css.price}>
             <span className={css.currency}>
              $
             </span>
             <span className={css.bigNum}>
               10
             </span>
             <span className={css.month}>
               /month
             </span>
            </div>
            <p className={css.offer}>Send messages, post listings...</p>
            <div className={css.block}></div>
            <ul className={css.plans}>
              <li><img src={check} />30-day money back guarantee</li>
              <li><img src={check} /> ID verification provided by Yoti.com</li>
              <li><img src={check} /> Send messages to Pet Owners</li>
              <li><img src={check} /> Create your online Profile</li>
            </ul>
            <div className={css.getPlan}>
              <a><img src="https://i.imgur.com/JO1N5iZ.png" />Go Premium</a>
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

export default MembershipPage ;


