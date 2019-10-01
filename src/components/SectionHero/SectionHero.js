import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { NamedLink, HeroSearch } from '../../components';

import css from './SectionHero.css';
import dogimg from './images/dog.png';

const SectionHero = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <div className={css.heroHalf}>
        <h1 className={css.heroMainTitle}>
          <span>Find Trusted <br />Pet Sitters and Services</span>
        </h1>
        <p className={css.seperatorText}>Local, National and International Pet Sitting</p>
        <HeroSearch />
        </div>
        <div className={css.imageHalf}>
          <img className={css.imageImg} src={dogimg} />
        </div>
      </div>
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
