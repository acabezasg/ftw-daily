import React, { Component } from 'react';
import yoti from '../../components/SectionFeatured/images/yoti.png';
import css from './YotiVerified.css';

class YotiVerified extends Component {
  render() {
    return (
      <div className={css.yotiVerified}>
        <img src={yoti} />
        <span>Verified</span>
      </div>
    );
  }
}

export default YotiVerified;
