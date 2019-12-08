import React from 'react';
import { StaticPage, TopbarContainer, ProfileSettingsPage } from '../../containers';
import classNames from 'classnames';
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
import verification from './verification.png';
import message from './message.png';
import virtualvet from './virtualvet.png';
import premium from './premium.png';

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
      <h3 className={css.extend}>Extend your experience</h3>
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
              <NamedLink name="PaymentOwnerPage"><img src={premium} />Go Premium</NamedLink>
            </div>
          </div>
          <div>
            <h3>Pet Sitter</h3>
            <p>Plan for all pet sitters</p>
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
            <NamedLink name="PaymentSitterPage"><img src={premium}  />Go Premium</NamedLink>
            </div>
          </div>
          <div>
            <h3>Pet Service</h3>
            <p>Plan for all pet services</p>
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
            <NamedLink name="PaymentServicePage"><img src={premium}  />Go Premium</NamedLink>
            </div>
          </div>
          </div>
       </div>
    </div>

  <div className={css.whyWrapper}>
    <div className={css.whyContent}>
      <h3 className={css.whyTitle}>Why go Premium?</h3>
      <div className={css.whyFlex}>
        <div>
          <img src={message} />
          <h3>Send messages</h3>
          <p>Get in touch with our worldwide users anytime.</p>
        </div>
        <div>
          <img src={virtualvet} />
          <h3>24/7 Virtual Vet</h3>
          <p>Get covered by professional vets all the time.</p>
        </div>
        <div>
          <img src={verification} />
          <h3>ID Verification</h3>
          <p>Your account will become verified with the badge.</p>
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


