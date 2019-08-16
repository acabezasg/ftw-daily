import React, { Component } from 'react';
import yoti from '../../components/SectionFeatured/images/yoti.png';
import css from './YotiVerifiedProfile.css';

class YotiVerifiedProfile extends Component {
  render() {
    return (
      <span className={css.yotiVerified}>
        <img src={yoti} />
        <span>Verified</span>
      </span>
    );
  }
}

export default YotiVerifiedProfile;
