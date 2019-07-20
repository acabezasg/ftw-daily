import React from 'react';
import { bool, func, object, string, propTypes } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { ensureListing } from '../../util/data';
import { ListingLink } from '..';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { EditListingHomeForm } from '../../forms';
import config from '../../config';
import css from './EditListingHomePanel.css';

const EditListingHomePanel = props => {
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
      id="EditListingHomePanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingHomePanel.createListingTitle" />
  );

  const {locations,equipments} = publicData;
  const initialValues = { locations,equipments };
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
      <EditListingHomeForm
        className={css.form}
        name={FEATURES_NAME}
        initialValues={{ 
          locations: publicData.locations,
          equipments: publicData.equipments,
          bedroom:publicData.bedroom,
          bathroom:publicData.bathroom,
        }} 
        onSubmit={values => {
          const { 
            locations = [],
            equipments = [],
            bedroom,
            bathroom, 
          } = values;

          const updatedValues = {
            publicData: { 
              locations,
              equipments,
              bedroom,
              bathroom },
          };
          onSubmit(updatedValues);
        }}
        onChange={onChange}
        saveActionMsg={submitButtonText}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
        locations={config.custom.locations}
        equipments={config.custom.equipments}
        name_equipments="equipments"
        name_locations="locations"
        
      />
    </div>
  );
};

EditListingHomePanel.defaultProps = {
  rootClassName: null,
  className: null,
  listing: null,
  errors: null,
};



EditListingHomePanel.propTypes = {
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

export default EditListingHomePanel;
