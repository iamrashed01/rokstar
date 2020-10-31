import React from 'react';
import { Parallax } from "react-parallax";
import { Link } from 'react-scroll'
import background from '../../doc/images/bg/slider-bg.jpg';

function HeroSection(props) {
  return (
    <section id="home" class="slider-area">
      <Parallax bgImage={background} strength={500} bgImageStyle={{ height: '100%', objectFit: 'cover' }}>
        <div class="container">
          <div class="slider-content">
            <h2 class="txtanim1"><span>I'm</span> <span>lucy</span> <span>Doe</span></h2>
            <h4 class="txtanim1 delay1">
              <span>W</span>
              <span>e</span>
              <span>b</span>
              <span>D</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>o</span>
              <span>p</span>
              <span>e</span>
              <span>r</span>
            </h4>
          </div>
        </div>
        <div class="white_svg svg_white">
          <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
            <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 " />
          </svg>
        </div>
        <div class="txtanim1 next-section">
          <span>
          <Link Link to="about" spy={true} smooth={true} offset={10} duration={1000} href="#about">about us <strong><i class="fa fa-question-circle"></i></strong></Link></span>
        </div>
      </Parallax>
    </section>
  );
}

export default HeroSection;