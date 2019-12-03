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
import css from './PaymentAffiliatePage.css';

const PaymentAffiliatePage = props => {
  // prettier-ignore
  return (
    <StaticPage
      title="Buy Membership and Go Premium | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PaymentAffiliatePage',
        description: 'PawSquad',
        name: 'PaymentAffiliatePage',
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
           <h2>You are Premium now!</h2>
           <img className={css.lineImg} src={line} />
        </div>
        <p>Enjoy your <strong>Premium</strong> account. We will redirect you in a few seconds.</p>
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

export default PaymentAffiliatePage;
