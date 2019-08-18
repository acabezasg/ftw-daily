import React, { Component } from 'react';
import yoti from '../../components/SectionFeatured/images/yoti.png';
import css from './YotiVerifiedProfile.css';
import ReactTooltip from 'react-tooltip';

import verified from './verified.png';

class YotiVerifiedProfile extends Component {
  render() {
    return (
      <span className={css.yotiVerified}>
        <img data-tip src={yoti} />
          <ReactTooltip className={css.customTip} effect='solid'>
            <span className={css.tipColor}>  
            Verified by YOTI <img className={css.verifiedImg} src={verified} />
            </span>
          </ReactTooltip>
        <span>Verified</span>
      </span>
    );
  }
}

export default YotiVerifiedProfile;
