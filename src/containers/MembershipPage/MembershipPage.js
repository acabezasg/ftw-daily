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
               49<span class={css.decimal}>.99</span>
             </span>
             <span className={css.month}>
               /year
             </span>
            </div>
            <p className={css.offer}>24/7 Virtual Vet, ID Verification...</p>
            <div className={css.block}></div>
            <ul className={css.plans}>
              <li><img src={check} /> Find the perfect Pet Sitter</li>
              <li><img src={check} /> Contact Pet Services</li>
              <li><img src={check} /> Home Covered by Insurance</li>
              <li><img src={check} /> ID Verification </li>
              <li><img src={check} /> Create Unlimited Listings</li>
              <li><img src={check} /> Send secure messages</li>
              <li><img src={check} /> Receive messages </li>
              <li><img src={check} /> Pay Securely</li>
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
               49<span class={css.decimal}>.99</span>
             </span>
             <span className={css.month}>
               /year
             </span>
            </div>
            <p className={css.offer}>Send messages, post listings...</p>
            <div className={css.block}></div>
            <ul className={css.plans}>
              <li><img src={check} /> Find the perfect pet to watch</li>
              <li><img src={check} /> ID Verification</li>
              <li><img src={check} /> 24/7 access to Virtual Vet</li>
              <li><img src={check} /> Create online profile</li>
              <li><img src={check} /> Receive messages</li>
              <li><img src={check} /> Send messages</li>
              <li><img src={check} /> Secure Payments</li>
              <li><img src={check} /> Travel the World</li>
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
               30
             </span>
             <span className={css.month}>
               /month
             </span>
            </div>
            <p className={css.offer}>Create profile, online messaging...</p>
            <div className={css.block}></div>
            <ul className={css.plans}>
              <li><img src={check} /> Pet Services Profile</li>
              <li><img src={check} /> No additional fees</li>
              <li><img src={check} /> Targeted local marketing</li>
              <li><img src={check} /> Unlimited photos</li>
              <li><img src={check} /> App Profile</li>
              <li><img src={check} /> Reviews</li>
              <li><img src={check} /> Add your website, address and contact number</li>
              <li><img src={check} /> Trust My Pet Sitter Logo badge</li>
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
          {/* <p>Get in touch with our worldwide users anytime.</p> */}
        </div>
        <div>
          <img src={virtualvet} />
          <h3>24/7 Virtual Vet</h3>
          {/* <p>Get covered by professional vets all the time.</p> */}
        </div>
        <div>
          <img src={verification} />
          <h3>ID Verification</h3>
          {/* <p>Your account will become verified with the badge.</p> */}
        </div>
      </div>
    </div>
  </div>

  <div className={css.basicWrapper}>
    <div className={css.whyContent}>
      <h3 className={css.basicTitle}>Staying Basic? What do I get?</h3>
      <p className={css.basicP}>If you don’t wish to upgrade to the Premium membership you can still browse <span className={css.tLink}>Trust My Pet Sitter</span> free of charge. 
        However, you won’t be able to create a listing or contact other users.</p>
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


