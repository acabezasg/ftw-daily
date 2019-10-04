import React, { Component } from 'react';
import { Player, BigPlayButton } from 'video-react';
import { FormattedMessage } from 'react-intl';

import css from "./HomepageVideo.css"; 
import poster from './tmpsposter.png';
import video from './tmps.mp4';

class HomepageVideo extends Component {
  render() {
    return (
<div>
   <div className={css.title}>
        <span>Happy Pets | Happy Owners | Happy Sitters</span>
    </div>
    <br />
    <div className={css.subContainer}>
    <span className={css.videoSub}>Pets stay at home | No Kennels | No Catteries | No strange places | Just familiarity, routine and 1 : 1 attention!</span>
    </div>
    <div className={css.videoContainer}>
       <Player
      playsInline
      poster={poster}
      src={video}>
      <BigPlayButton position="center" />
      </Player>
    </div>
</div>
    );
  }
}

export default HomepageVideo;