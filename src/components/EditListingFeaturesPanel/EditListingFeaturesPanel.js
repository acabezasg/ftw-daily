import React from 'react';
import { bool, func, object, string, propTypes,array } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { ensureListing } from '../../util/data';
import { ListingLink } from '../../components';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { EditListingFeaturesForm } from '../../forms';
import config from '../../config';
import css from './EditListingFeaturesPanel.css';
import { restElement } from '@babel/types';

const EditListingFeaturesPanel = props => {
  const {
    rootClassName,
    className,
    listing,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
    
  } = props;

  const FEATURES_NAME = 'amenities';

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureListing(listing);
  const { publicData } = currentListing.attributes;

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingFeaturesPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingFeaturesPanel.createListingTitle" />
  );

  const amenities = publicData && publicData.amenities;
  const initialValues = { amenities };
  console.log(initialValues);
  // state = {
  //   selected:[...initialValues]
  // }
  // function onClick(flag){
  //   if()
  // }
  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingFeaturesForm
        
        className={css.form}
        name={FEATURES_NAME}
        initialValues={{
          dog: publicData.dog,
          cat: publicData.cat,
          reptile: publicData.reptile,
          bird: publicData.bird,
          farm: publicData.farm,
          rabbit: publicData.rabbit,
          fish: publicData.fish,
          other: publicData.other,
          horse: publicData.horse,
          amenities: publicData.amenities 
        }}
        onSubmit={values => {
          const { 
            amenities = [],
            dog,
            cat,
            reptile,
            bird,
            farm,
            rabbit,
            fish,
            horse,
            other } = values;

          const updatedValues = {
            publicData: 
            { amenities,
              dog,
              cat,
              reptile,
              bird,
              farm,
              rabbit,
              fish,
              horse,
              other },
          };
          onSubmit(updatedValues);
        }}
        onChange={onChange}
        saveActionMsg={submitButtonText}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
        categories={config.custom.amenities}
        
      />
    </div>
  );
};

EditListingFeaturesPanel.defaultProps = {
  rootClassName: null,
  className: null,
  listing: null,
  errors: null,
};



EditListingFeaturesPanel.propTypes = {
  rootClassName: string,
  className: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
 
};

export default EditListingFeaturesPanel;
