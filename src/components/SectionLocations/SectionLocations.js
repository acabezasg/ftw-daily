import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import helsinkiImage from './images/location_helsinki.jpg';
import rovaniemiImage from './images/location_rovaniemi.jpg';
import rukaImage from './images/location_ruka.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
  <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper} id="wrapperAspect">
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      <div className={css.linkText} id="textLink">
        <FormattedMessage
          id="SectionLocations.listingsInLocation" 
          values={{ location: nameText }}
        />
      </div>
    </div>
  </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'UK',
          rukaImage,
          '?address=United%20Kingdom&bounds=60.945453%2C1.867399%2C49.802665%2C-8.718659'
        )}
        {locationLink(
          'USA',
          rovaniemiImage,
          '?address=United%20States%20of%20America&bounds=71.540724%2C-66.885444%2C18.765563%2C-179.9'
        )}
        {locationLink(
          'Australia',
          helsinkiImage,
          '?address=Australia&bounds=-9.042719%2C159.209167%2C-43.840288%2C112.821339'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
