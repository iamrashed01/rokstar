import React from 'react';
import leftImage from '../../doc/images/about/abt-left-thumb.jpg';

function About(props) {
  return (
    <section class="about-area" id="about">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4">
            <div class="abt-left-thumb">
              <img src={leftImage} alt="left-img" />
            </div>
          </div>
          <div class="col-md-7 offset-md-1">
            <div class="abt-content">
              <div class="section-title">
                <h2 class="txt2_is_show">About Us</h2>
              </div>
              <p class="txt1-wrap"><span class="txt1">For instance, whenever I go back to the guest house during the morning to copy out the contract, these gentlemen are always still sitting there eating their breakfasts. I ought to just try that witht my boss; I'd get kicked out on the spot.</span></p>
              <p class="txt1-wrap"><span class="txt1">But who knows, maybe that would be the best thing for me. He'd fall right off his desk! And it's a funny sort of business to be sitting up there at your desk,</span> <span class="txt1">talking down at your subordinates. I ought to just try that witht my boss; I'd get kicked out on the spot. But who knows, maybe that would be the best thing for me. He'd fall right off his desk! And it's a funny sort of business to be sitting up there at your desk, talking down at your subordinates.</span></p>
              <div class="social-link">
                <h5>Share :</h5>
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-dribbble"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;