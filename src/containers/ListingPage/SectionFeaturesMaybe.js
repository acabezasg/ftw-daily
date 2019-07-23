import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionFeaturesMaybe = props => {
  const { options, publicData,servicesConfig } = props;
  if (!publicData) {
    return null;
  }
  const service = servicesConfig[publicData.service];
  const selectedOptions = publicData && publicData.amenities ? publicData.amenities : [];
  return (
    <div>
      {
        publicData.user_type ===2?
        (
        <div>
          <label className={css.serviceItem}>
            <span className={ css.serviceItemLabel }> Service </span> 
            { publicData.service }
          </label>
        </div>
        )
        :null
      }
      <div className={css.sectionFeatures}>
        <h2 className={css.featuresTitle}>
          <FormattedMessage id="ListingPage.featuresTitle" />
        </h2>
        <PropertyGroup
          id="ListingPage.amenities"
          options={options}
          selectedOptions={selectedOptions}
          twoColumns={true}
          flag = {3}
          publicData = {publicData}
          
        />
      </div>
    </div>
  );
};

export default SectionFeaturesMaybe;
