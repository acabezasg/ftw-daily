import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './HowItWorksPage.css';

import how1 from './images/how-1.png';
import how2 from './images/how-2.png';
import how3 from './images/how-3.jpg';
import how4 from './images/how-4.jpg';
import how5 from './images/how-5.jpg';
import divider from './images/div-img.png';

console.log(how1);
console.log(how2);
console.log(how3);
console.log(how4);
console.log(how5);

const HowItWorksPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="How it Works | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'HowItWorksPage',
        description: 'How It Works',
        name: 'HowItWorksPage',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

      <LayoutWrapperMain className={css.staticPageWrapper}>

      <div className={css.sectionContent}>

      <img src={how1} alt="How It Works" />

      <img className={css.divider1} src={divider} alt="Divider" />

      <img src={how2} alt="How It Works" />

      <img className={css.divider2} src={divider} alt="Divider" />

      <img src={how3} alt="How It Works" />

      <img className={css.divider3} src={divider} alt="Divider" />

      <img src={how4} alt="How It Works" />

      <img className={css.divider4} src={divider} alt="Divider" />

      <img src={how5} alt="How It Works" />

      </div>

      </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default HowItWorksPage;
