import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { render } from "react-dom";
import { fadeInUp, fadeInLeft, fadeInRight } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { NamedLink } from "../../components";

import css from "./SliderHero.css";
import "bootstrap/dist/css/bootstrap.min.css";

import firstSlide from "./slides/first.jpg";
import secondSlide from "./slides/second.jpg";
import thirdSlide from "./slides/third.jpg";
import forthSlide from "./slides/forth.jpg";
import fifthSlide from "./slides/fifth.jpg";

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
  <Carousel interval="8000">

    <Carousel.Item>
      <div className={css.carouselHero}>
        <img src="https://i.imgur.com/RuIMBGJ.jpg"></img>
      </div>

      <div className={css.carouselCaption}>
        <StyleRoot>
          <div style={styles.fadeInUp}>
            <h1 style={styles.fadeInUp}>Elite Pet Sitting</h1>
            <p style={styles.fadeInUp}>
              Bespoke, tailored pet care
            </p>

            <div className={css.submitContainer}>
              <a href="s?pub_user_type=1">Find a Pet Sitter</a>
              <a className={css.btnPc} href="s?pub_user_type=2">
                Find a Pet Service
              </a>
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
        <img src="https://i.imgur.com/5UWHAVm.jpg"></img>
      </div>

      <div className={css.carouselCaption}>
        <StyleRoot>
          <div style={styles.fadeInUp}>
            <h1 style={styles.fadeInUp}>For Busy Professionals - and their Pets</h1>
            <p style={styles.fadeInUp}>
              Description
            </p>

            <div className={css.submitContainer}>
              <a href="s?pub_user_type=1">Find a Pet Sitter</a>
              <a className={css.btnPc} href="s?pub_user_type=2">
                Find a Pet Service
              </a>
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
        <img src="https://i.imgur.com/8SmuH9R.jpg"></img>
      </div>

      <div className={css.carouselCaption}>
        <StyleRoot>
          <div style={styles.fadeInUp}>
            <h1 style={styles.fadeInUp}>Slider Title</h1>
            <p style={styles.fadeInUp}>
              Description
            </p>

            <div className={css.submitContainer}>
              <a href="s?pub_user_type=1">Find a Pet Sitter</a>
              <a className={css.btnPc} href="s?pub_user_type=2">
                Find a Pet Service
              </a>
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
        <img src={secondSlide}></img>
      </div>

      <div className={css.carouselCaption}>
        <StyleRoot>
          <div style={styles.fadeInUp}>
            <h1 style={styles.fadeInUp}>Slider Title</h1>
            <p style={styles.fadeInUp}>
              Description
            </p>

            <div className={css.submitContainer}>
              <a href="s?pub_user_type=1">Find a Pet Sitter</a>
              <a className={css.btnPc} href="s?pub_user_type=2">
                Find a Pet Service
              </a>
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
            <h1 style={styles.fadeInUp}>Slider Title</h1>
            <p style={styles.fadeInUp}>
              Description
            </p>

            <div className={css.submitContainer}>
              <a href="s?pub_user_type=1">Find a Pet Sitter</a>
              <a className={css.btnPc} href="s?pub_user_type=2">
                Find a Pet Service
              </a>
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
        <img src={firstSlide}></img>
      </div>

      <div className={css.carouselCaption}>
        <StyleRoot>
          <div style={styles.fadeInUp}>
            <h1 style={styles.fadeInUp}>Slider Title</h1>
            <p style={styles.fadeInUp}>
              Description
            </p>

            <div className={css.submitContainer}>
              <a href="s?pub_user_type=1">Find a Pet Sitter</a>
              <a className={css.btnPc} href="s?pub_user_type=2">
                Find a Pet Service
              </a>
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
{/*

    <Carousel.Item>
      <div className={css.carouselHero}>
        <img alt="First Slide" src={firstSlide} /> 
      </div>

      <div className={css.carouselCaption}>
        <StyleRoot>
          <div style={styles.fadeInUp}>
            <h1 style={styles.fadeInUp}>For Pet Parents Everywhere</h1>
            <p style={styles.fadeInUp}>
              Dogs | Cats | Rabbits | Reptiles | Pet Birds | Aquarium | Poultry
            </p>

            <div className={css.submitContainer}>
              <a href="s?pub_user_type=1">Find a Pet Sitter</a>
              <a className={css.btnPc} href="s?pub_user_type=2">
                Find a Pet Service
              </a>
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
        <img alt="Test" src={fifthSlide} />
      </div>
      <div className={css.carouselCaption}>
        <StyleRoot>
          <div style={styles.fadeInUp}>
            <h1 style={styles.fadeInUp}>Pet Services Made Simple</h1>
            <p style={styles.fadeInUp}>
              Dog Walking | Pet Foods | Drop- in Sitters | Grooming | Vets | Pet
              Stores
            </p>

            <div className={css.submitContainer}>
              <a href="s?pub_user_type=1">Find a Pet Sitter</a>
              <a className={css.btnPc} href="s?pub_user_type=2">
                Find a Pet Service
              </a>
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
        <img alt="Second" src={secondSlide} />
      </div>
      <div className={css.carouselCaption}>
        <StyleRoot>
          <div style={styles.fadeInUp}>
            <h1 style={styles.fadeInUp}>Watch pets in their own home</h1>
            <p style={styles.fadeInUp}>
              Dogs | Cats | Rabbits | Reptiles | Pet Birds | Aquarium | Poultry
            </p>

            <div className={css.submitContainer}>
              <a href="s?pub_user_type=1">Find a Pet Sitter</a>
              <a className={css.btnPc} href="s?pub_user_type=2">
                Find a Pet Service
              </a>
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
        <img alt="Third Slide" src={thirdSlide} />
      </div>

      <div className={css.carouselCaption}>
        <StyleRoot>
          <div style={styles.fadeInUp}>
            <h1 style={styles.fadeInUp}>
              Our Professional Sitters come to you
            </h1>
            <p style={styles.fadeInUp}>
              Dogs | Cats | Rabbits | Reptiles | Pet Birds | Aquarium | Poultry
            </p>

            <div className={css.submitContainer}>
              <a href="s?pub_user_type=1">Find a Pet Sitter</a>
              <a className={css.btnPc} href="s?pub_user_type=2">
                Find a Pet Service
              </a>
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
        <img alt="Test" src={forthSlide} />
      </div>
      <div className={css.carouselCaption}>
        <StyleRoot>
          <div style={styles.fadeInUp}>
            <h1 style={styles.fadeInUp}>For short and long term sits</h1>
            <p style={styles.fadeInUp}>
              Dogs | Cats | Rabbits | Reptiles | Pet Birds | Aquarium | Poultry
            </p>

            <div className={css.submitContainer}>
              <a href="s?pub_user_type=1">Find a Pet Sitter</a>
              <a className={css.btnPc} href="s?pub_user_type=2">
                Find a Pet Service
              </a>
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
*/}
  </Carousel>
);

export default SliderHero;