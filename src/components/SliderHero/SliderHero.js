import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { render } from "react-dom";
import { fadeInUp, fadeInLeft, fadeInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import css from './SliderHero.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import firstSlide from './slides/first.jpg';
import secondSlide from './slides/second.jpg';
import thirdSlide from './slides/third.jpg';
import forthSlide from './slides/forth.jpg';
import fifthSlide from './slides/fifth.jpg';

const styles = {
  fadeInUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
  }
}

const stylesLeft = {
  fadeInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
  }
}

const stylesRight = {
    fadeInRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
  }
}

const SliderHero = () => (
  <Carousel>
    <Carousel.Item>
    <div className={css.carouselHero}>
      <img
        alt="First Slide"
        src={firstSlide}
      />
    </div>

    <div className={css.carouselCaption}>

    <StyleRoot>
        <h1 style={styles.fadeInUp}>Changing the way Pet Lovers<br />think about travel</h1>
        <p style={styles.fadeInUp}>Dogs | Cats | Rabbits | Reptiles | Pet Birds | Aquarium | Poultry</p>

         <div className={css.submitContainer}>
         
            <a style={stylesLeft.fadeInLeft} href="/s?pub_user_type=1">Find a Pet Sitter</a> 
            <a style={stylesRight.fadeInRight} href="/s?pub_user_type=0">Find Homes to Sit</a>

          </div>
    </StyleRoot>

      </div>
    </Carousel.Item>

    <Carousel.Item>
    <div className={css.carouselHero}>
      <img
        alt="Second"
        src={secondSlide}
      />
    </div>
      <div className={css.carouselCaption}>

    <StyleRoot>
        <h1 style={styles.fadeInUp}>Changing the way Pet Lovers<br />think about travel</h1>
        <p style={styles.fadeInUp}>Dogs | Cats | Rabbits | Reptiles | Pet Birds | Aquarium | Poultry</p>

         <div className={css.submitContainer}>
         
            <a style={stylesLeft.fadeInLeft} href="/s?pub_user_type=1">Find a Pet Sitter</a> 
            <a style={stylesRight.fadeInRight} href="/s?pub_user_type=0">Find Homes to Sit</a>

          </div>
    </StyleRoot>

      </div>
    </Carousel.Item>

    <Carousel.Item>
    <div className={css.carouselHero}>
      <img
        alt="Third Slide"
        src={thirdSlide}
      />
    </div>
    
      <div className={css.carouselCaption}>

    <StyleRoot>
        <h1 style={styles.fadeInUp}>Changing the way Pet Lovers<br />think about travel</h1>
        <p style={styles.fadeInUp}>Dogs | Cats | Rabbits | Reptiles | Pet Birds | Aquarium | Poultry</p>

         <div className={css.submitContainer}>
         
            <a style={stylesLeft.fadeInLeft} href="/s?pub_user_type=1">Find a Pet Sitter</a> 
            <a style={stylesRight.fadeInRight} href="/s?pub_user_type=0">Find Homes to Sit</a>

          </div>
    </StyleRoot>

      </div>
    </Carousel.Item>







    <Carousel.Item>
    <div className={css.carouselHero}>
      <img
        alt="Test"
        src={forthSlide}
      />
    </div>
     <div className={css.carouselCaption}>

    <StyleRoot>
        <h1 style={styles.fadeInUp}>Changing the way Pet Lovers<br />think about travel</h1>
        <p style={styles.fadeInUp}>Dogs | Cats | Rabbits | Reptiles | Pet Birds | Aquarium | Poultry</p>

         <div className={css.submitContainer}>
         
            <a style={stylesLeft.fadeInLeft} href="/s?pub_user_type=1">Find a Pet Sitter</a> 
            <a style={stylesRight.fadeInRight} href="/s?pub_user_type=0">Find Homes to Sit</a>

          </div>
    </StyleRoot>

      </div>
    </Carousel.Item>

        <Carousel.Item>
    <div className={css.carouselHero}>
      <img
        alt="Test"
        src={fifthSlide}
      />
    </div>
     <div className={css.carouselCaption}>

    <StyleRoot>
        <h1 style={styles.fadeInUp}>Changing the way Pet Lovers<br />think about travel</h1>
        <p style={styles.fadeInUp}>Dogs | Cats | Rabbits | Reptiles | Pet Birds | Aquarium | Poultry</p>

         <div className={css.submitContainer}>
         
            <a style={stylesLeft.fadeInLeft} href="/s?pub_user_type=1">Find a Pet Sitter</a> 
            <a style={stylesRight.fadeInRight} href="/s?pub_user_type=0">Find Homes to Sit</a>

          </div>
    </StyleRoot>

      </div>
    </Carousel.Item>









  </Carousel>
);
 
 export default SliderHero;