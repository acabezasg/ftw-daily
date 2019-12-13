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

import css from './DogSitting.css';

const DogSitting = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Dog Sitting | Trust My Pet Sitter"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'DogSitting',
        description: 'DogSitting',
        name: 'DogSitting',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain>
    <div className={css.sectionContent}>

    <h1 className={css.pawTitle}>Dog Sitting</h1>

    </div>

      </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default DogSitting;


