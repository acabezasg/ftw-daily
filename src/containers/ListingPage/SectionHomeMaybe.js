import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionHomeMaybe = props => {
  const { options, publicData } = props;
  console.log('options',options);
  const { options1,options2} = options;
  if (!publicData) {
    return null;
  }
  console.log('home public',publicData);
  const selectedOptions1 = publicData && publicData.equipments ? publicData.equipments : [];
  const selectedOptions2 = publicData && publicData.locations ? publicData.locations : [];
  return (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.homeTitle" />
      </h2>
      <PropertyGroup
        id="ListingPage.equipment"
        options={options1}
        selectedOptions={selectedOptions1}
        twoColumns={true}
        publicData = {publicData}
        flag = {false}
      />
      <PropertyGroup
        id="ListingPage.location"
        options={options2}
        selectedOptions={selectedOptions2}
        twoColumns={true}
        publicData = {publicData}
        flag = {false}
      />
    </div>
  );
};

export default SectionHomeMaybe;
