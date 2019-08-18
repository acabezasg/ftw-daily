import React, { Component } from 'react';
import css from './YotiVerifiedListingPage.css';

import yoti from './yoti.png';

class YotiVerifiedListingPage extends Component {
  render() {
    return (
    <span className={css.yotiVerified}>
      <span className={css.yotiContainer} data-tip>
        <img className={css.yotiBadge} src={yoti} />
      </span>
     </span>
    );
  }
}

export default YotiVerifiedListingPage;
