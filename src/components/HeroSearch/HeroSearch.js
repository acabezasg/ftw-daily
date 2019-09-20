import React, { Component } from 'react';
import { DatePick } from '../../components';

import css from './HeroSearch.css';
import search from './images/search.png';

class HeroSearch extends Component {
  render() {
    return (
    <div>
      <div className={css.HeroSearch}>
          <div className={css.HeroPick}>
          <div className={css.ownerImg}></div>
          <p>Pet Owner</p>
          </div>

          <div className={css.HeroPick}>
          <div className={css.sitterImg}></div>
          <p>Pet Sitter</p>
          </div>

          <div className={css.HeroPick}>
          <div className={css.serviceImg}></div>
          <p>Pet Service</p>
          </div>
      </div>
      <div className={css.HeroMain}>
      <input className={css.HeroInput} type="search" placeholder="e.g London, New York..." />
      <DatePick />
      <button className={css.goBtn}>
        <span>Search</span>
      </button>
      <div className={css.locationIcon}>
      <img src={search} />
      </div>
      </div>
    </div>
    );
  }
}

export default HeroSearch;