import React, { Component } from 'react';
import yoti from '../../components/SectionFeatured/images/yoti.png';
import css from './YotiVerified.css';
import ReactTooltip from 'react-tooltip';

import verified from './verified.png';

class YotiVerified extends Component {
  render() {
    return (
      <div className={css.yotiVerified}>
        <div>
          <h3 className={css.title}>Verify your identity</h3>
        </div>
      <span className={css.yotiContainer} data-tip>
        <img src={yoti} />
      <ReactTooltip className={css.customTip} effect='solid'>
        <span className={css.tipColor}>  
        Verified by YOTI <img className={css.verifiedImg} src={verified} />
        </span>
      </ReactTooltip>
        <span>Verified</span>
      </span>
      </div>
    );
  }
}

export default YotiVerified;
