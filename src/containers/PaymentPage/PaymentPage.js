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
import css from './PaymentPage.css';

const PaymentPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Buy Membership and Go Premium | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PaymentPage',
        description: 'PawSquad',
        name: 'PaymentPage',
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
              <p>Need help? <NamedLink name="PaymentPage">Send us a message</NamedLink> or call on <NamedLink name="PaymentPage">020 3826 8628</NamedLink></p>
           </div>

      </div>  
     <div className={css.item2}>
           <h2>Why go Premium?</h2>

<div className={css.whybuy}>
  <div className={css.whyCont}>
    <img src={listing} />
  </div>
  <div className={css.whyItem}>
    <h3>Unlimited listings</h3>
    <p>Post unlimited listings about your service</p>
  </div>
</div>

<div className={css.whybuy}>
  <div className={css.whyCont}>
    <img src={vet} />
  </div>
  <div className={css.whyItem}>
    <h3>Virtual Vet</h3>
    <p>Get covered with 24/7 access to a UK qualified Vet</p>
  </div>
</div>

<p className={css.morereasons}>More reasons to go Premium</p>

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

export default PaymentPage;


