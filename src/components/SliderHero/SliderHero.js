import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { render } from "react-dom";
import { fadeInUp, fadeInLeft, fadeInRight } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { NamedLink } from "../../components";

import css from "./SliderHero.css";
import "bootstrap/dist/css/bootstrap.min.css";

import forthSlide from "./slides/forth.jpg";
import test2 from "./testslides/test2.jpg";
import test5 from "./testslides/test5.jpg";
import test6 from "./testslides/test6.jpg";

const styles = {
  fadeInUp: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp")
  }
};

const stylesLeft = {
  fadeInLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft")
  }
};

const stylesRight = {
  fadeInRight: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight")
  }
};

const SliderHero = () => (
  <Carousel interval="8000" fade={true}>


<Carousel.Item>
      <div className={css.carouselHero}>
        <img src={test5}></img>
      </div>

      <div className={css.carouselCaption}>
        <StyleRoot>
          <div style={styles.fadeInUp}>
            <h1 style={styles.fadeInUp}>Test Heading</h1>

            <div className={css.submitContainer}>
              <a href="s?pub_user_type=1">Find a Pet Sitter</a>
              <a href="s?pub_user_type=0">Find Homes to Sit</a>
            </div>
          </div>

          <div className={css.submitContainer}>
            <a
              className={css.btnMob}
              style={stylesLeft.fadeInLeft}
              href="s?pub_user_type=2"
            >
              Find a Pet Service
            </a>
          </div>
        </StyleRoot>
      </div>
    </Carousel.Item>

<Carousel.Item>
      <div className={css.carouselHero}>
        <img src={forthSlide}></img>
      </div>

      <div className={css.carouselCaption}>
        <StyleRoot>
          <div style={styles.fadeInUp}>
            <h1 style={styles.fadeInUp}>Discover a new standard of Pet Care</h1>

            <div className={css.submitContainer}>
              <a href="s?pub_user_type=1">Find a Pet Sitter</a>
              <a href="s?pub_user_type=0">Find Homes to Sit</a>
            </div>
          </div>

          <div className={css.submitContainer}>
            <a
              className={css.btnMob}
              style={stylesLeft.fadeInLeft}
              href="s?pub_user_type=2"
            >
              Find a Pet Service
            </a>
          </div>
        </StyleRoot>
      </div>
    </Carousel.Item>

    <Carousel.Item>
      <div className={css.carouselHero}>
        <img src={test2}></img>
      </div>

      <div className={css.carouselCaption}>
        <StyleRoot>
          <div style={styles.fadeInUp}>
            <h1 style={styles.fadeInUp}>Test Heading</h1>

            <div className={css.submitContainer}>
              <a href="s?pub_user_type=1">Find a Pet Sitter</a>
              <a href="s?pub_user_type=0">Find Homes to Sit</a>
            </div>
          </div>

          <div className={css.submitContainer}>
            <a
              className={css.btnMob}
              style={stylesLeft.fadeInLeft}
              href="s?pub_user_type=2"
            >
              Find a Pet Service
            </a>
          </div>
        </StyleRoot>
      </div>
    </Carousel.Item>

    <Carousel.Item>
      <div className={css.carouselHero}>
        <img src={test6}></img>
      </div>

      <div className={css.carouselCaption}>
        <StyleRoot>
          <div style={styles.fadeInUp}>
            <h1 style={styles.fadeInUp}>Test Heading</h1>

            <div className={css.submitContainer}>
              <a href="s?pub_user_type=1">Find a Pet Sitter</a>
              <a href="s?pub_user_type=0">Find Homes to Sit</a>
            </div>
          </div>

          <div className={css.submitContainer}>
            <a
              className={css.btnMob}
              style={stylesLeft.fadeInLeft}
              href="s?pub_user_type=2"
            >
              Find a Pet Service
            </a>
          </div>
        </StyleRoot>
      </div>
    </Carousel.Item>










  </Carousel>
);

export default SliderHero;