import React from 'react';
import { StaticPage, TopbarContainer, ProfileSettingsPage } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
  NamedLink,
  
} from '../../components';

import line from './images/sketch.svg';
import crown from './images/crown.png';
import card from './images/card.png';
import vet from './images/vet2.png';
import listing from './images/checklist.png';
import checkmark from './images/checkmark.png';
import css from './PaymentSitterPage.css';

const PaymentSitterPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Buy Membership and Go Premium | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PaymentSitterPage',
        description: 'PawSquad',
        name: 'PaymentSitterPage',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

  <LayoutWrapperMain className={css.PaymentWrapper}>
  
    <div className={css.sectionContent}>

    <div className={css.gridContainer}>
      <div className={css.item1}>
        <div className={css.firstRow}>
           <img src={crown} />
           <h2>Go Premium now</h2>
           <img className={css.lineImg} src={line} />
        </div>
           <p>just <span>$10</span> per month</p>
           <p>(pay $120 annually)</p>

           <div className={css.Chargebee}>
            <img src={card} />Pay with card
           </div>

           <div className={css.getHelp}>
              <p>Need help? <NamedLink name="ContactPage">Send us a message</NamedLink></p>
           </div>

      </div>  
     <div className={css.item2}>
           <h2>Pet Sitters - Go Premium</h2>

<div className={css.whybuy}>
  <h3>Whilst looking after Pets:</h3>
  <ul>
     <li><img src={checkmark} /> 24/7 Virtual Vet Advice wherever you are</li>
  </ul>

  <h3>After Sign up:</h3>
  <ul>
     <li><img src={checkmark} /> 30-day money back guarantee</li>
     <li><img src={checkmark} /> ID verification provided by <ExternalLink href="https://www.yoti.com/blog/trust-my-pet-sitter-verifies-accounts-with-yoti">Yoti.com</ExternalLink></li>
     <li><img src={checkmark} /> Send messages to Pet Owners</li>
     <li><img src={checkmark} /> Complete your booking and secure payment
</li>
  </ul>

  <h3>Anytime:</h3>
  <ul>
     <li><img src={checkmark} /> Create your online Profile</li>
     <li><img src={checkmark} /> Receive messages from Pet Owners</li>
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

export default PaymentSitterPage;


