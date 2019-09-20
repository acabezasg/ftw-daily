import React, { Component } from 'react';
import { DatePick } from '../../components';

import css from './HeroSearch.css';

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
      <svg width="21" height="22" viewBox="0 0 21 22" xmlns="http://www.w3.org/2000/svg"><g className={css.stroke} class="LocationAutocompleteInput_iconSvgGroup__2g-R7" transform="matrix(-1 0 0 1 20 1)" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M13 14l5.241 5.241"></path><circle cx="7.5" cy="7.5" r="7.5"></circle></g></svg>
      </div>
      </div>
    </div>
    );
  }
}

export default HeroSearch;