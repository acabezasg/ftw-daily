import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ensureOwnListing } from '../../util/data';
import { ListingLink } from '../../components';
import { EditListingPoliciesForm } from '../../forms';

import css from './EditListingPoliciesPanel.css';

const EditListingPoliciesPanel = props => {
  const {
    className,
    rootClassName,
    listing,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
    user_type,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { publicData } = currentListing.attributes;

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const user_name = user_type === 0 ? 'owner' : user_type === 1 ? 'sitter' : 'service';
  const publish = isPublished ? 'title.' : 'createListingTitle.';
  const PoliciesPanelTitle = 'EditListingPoliciesPanel.' + publish + user_name;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id={PoliciesPanelTitle}
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id={PoliciesPanelTitle} />
  );

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingPoliciesForm
        className={css.form}
        publicData={publicData}
        initialValues={{ identify: publicData.identify }}
        onSubmit={values => {
          const { identify = '' } = values;
          const updateValues = {
            publicData: {
              identify,
            },
          };
          onSubmit(updateValues);
        }}
        onChange={onChange}
        saveActionMsg={submitButtonText}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
        user_type={user_type}
      />
    </div>
  );
};

const { func, object, string, bool } = PropTypes;

EditListingPoliciesPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingPoliciesPanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingPoliciesPanel;
