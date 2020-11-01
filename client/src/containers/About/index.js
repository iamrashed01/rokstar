import React from 'react';
import leftImage from '../../doc/images/about/abt-left-thumb.jpg';

function About(props) {
  return (
    <div className="about-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="abt-left-thumb">
              <img src={leftImage} alt="left-img" />
            </div>
          </div>
          <div className="col-md-7 offset-md-1">
            <div className="abt-content">
              <div className="section-title">
                <h2 className="txt2_is_show">About Us</h2>
              </div>
              <p className="txt1-wrap"><span className="txt1">For instance, whenever I go back to the guest house during the morning to copy out the contract, these gentlemen are always still sitting there eating their breakfasts. I ought to just try that witht my boss; I'd get kicked out on the spot.</span></p>
              <p className="txt1-wrap"><span className="txt1">But who knows, maybe that would be the best thing for me. He'd fall right off his desk! And it's a funny sort of business to be sitting up there at your desk,</span> <span className="txt1">talking down at your subordinates. I ought to just try that witht my boss; I'd get kicked out on the spot. But who knows, maybe that would be the best thing for me. He'd fall right off his desk! And it's a funny sort of business to be sitting up there at your desk, talking down at your subordinates.</span></p>
              <div className="social-link">
                <h5>Share :</h5>
                <a href={'link'}><i className="fa fa-facebook"></i></a>
                <a href={'link'}><i className="fa fa-twitter"></i></a>
                <a href={'link'}><i className="fa fa-dribbble"></i></a>
                <a href={'link'}><i className="fa fa-linkedin"></i></a>
                <a href={'link'}><i className="fa fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;