import React, { useEffect, useState } from 'react';
import { Parallax } from "react-parallax";
import { Link } from 'react-scroll'
import { connect } from 'react-redux';
import { getHeroDataAction, updateHeroAction } from '../../store/actions';
import { appUrl } from '../../utils/requests';
import background from '../../doc/images/bg/slider-bg.jpg';

function HeroSection(props) {

  const [state, setState] = useState({
    title: '',
    designation: ''
  })

  const changeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    props.getHeroDataAction();
  }, [])

  useEffect(() => {
    if (props.hero.title !== undefined) {
      // console.log(props.hero.designation, 'hero designation=======');
      setState({
        ...state,
        title: props.hero.title,
        designation: props.hero.designation
      })
    }
  }, [props.hero])

  const updateHandler = e => {
    if (e.key === 'Enter') {
      const data = {
        title: state.title,
        designation: state.designation
      }
      props.updateHeroAction(data);
    }
  }

  const { backgroundImage } = props.hero;

  const designationArray = state.designation.split(' ');
  const titleArray = state.title.split(' ');

  return (
    <div className="slider-area">
      <Parallax bgImage={backgroundImage !== undefined ? appUrl + backgroundImage : background} strength={500} bgImageStyle={{ height: '100%', objectFit: 'cover' }}>
        <div className="container">
          <div className="slider-content">
            {props.user ? (
              <div className="editForm">
                <form>
                  <input type="text" placeholder="Title" onKeyDown={updateHandler} value={state.title} name="title" onChange={changeHandler} />
                  <input type="text" placeholder="Designation" onKeyDown={updateHandler} value={state.designation} name="designation" onChange={changeHandler} />
                </form>
              </div>
            ) : null}
            <h2 className="txtanim1">
              {titleArray.length > 0 && (
                titleArray.map((el, key) => (
                  <span key={key}>{el}</span>
                ))
              )}
            </h2>
            <h4 className="txtanim1 delay1">
              {designationArray.length > 0 && (
                designationArray.map((el, key) => (
                  <span key={key}>{el}</span>
                ))
              )}
            </h4>
          </div>
        </div>
        <div className="white_svg svg_white">
          <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
            <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 " />
          </svg>
        </div>
        <div className="txtanim1 next-section">
          <span>
            <Link to="about" spy={true} smooth={true} offset={10} duration={1000} href="#about">about us <strong><i className="fa fa-question-circle"></i></strong></Link></span>
        </div>
      </Parallax>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    hero: state.hero,
    user: state.meta.user
  }
}

export default connect(mapStateToProps, { getHeroDataAction, updateHeroAction })(HeroSection);