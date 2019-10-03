import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import Helmet from 'react-helmet';


class SliderSection extends Component {
  render() {
    return (
  <AwesomeSlider cssModule={AwsSliderStyles}>
    <div data-src="/path/to/image-0.png" />
    <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" />
       <Helmet>
    <style>{`
.styles_aws-sld__bullets {
	display: none;
}
`}</style>
        </Helmet>
  </AwesomeSlider>
    );
  }
}

export default SliderSection;