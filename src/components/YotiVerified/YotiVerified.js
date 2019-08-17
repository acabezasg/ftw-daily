import React, { Component } from 'react';
import yoti from '../../components/SectionFeatured/images/yoti.png';
import css from './YotiVerified.css';
import ReactTooltip from 'react-tooltip';

class YotiVerified extends Component {
  render() {
    return (
      <div className={css.yotiVerified}>
        <img data-tip src={yoti} />
      <ReactTooltip className={css.customTip} effect='solid'>
        <span className={css.tipColor}>  
        Yoti ID Verification
        </span>
      </ReactTooltip>
        <span>Verified</span>
      </div>
    );
  }
}

export default YotiVerified;
