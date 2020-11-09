import React, { useEffect, useState } from 'react';
import { Parallax } from "react-parallax";
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import { Link } from 'react-scroll'
import { connect } from 'react-redux';
import { getHeroDataAction, updateHeroAction } from '../../store/actions';
import { appUrl } from '../../utils/requests';
import Delete from '../../components/uiStyle/Delete';

function HeroSection(props) {

  const [state, setState] = useState({
    title: '',
    designation: '',
    filePreview: null
  })

  const [showhText, setShowhText] = useState(false);

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
      setState({
        ...state,
        title: props.hero.title,
        designation: props.hero.designation
      })
    }
  }, [props.hero])

  const updateHandler = e => {
    if (e.key === 'Enter') {
      const formData = new FormData();
      formData.append('title', state.title);
      formData.append('designation', state.designation);
      props.updateHeroAction(formData);
      setShowhText(false);
    }
  }

  const heroTextHandler = () => {
    setShowhText(!showhText);
  }

  const updateImage = e => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.addEventListener("load", function () {
      // convert image file to base64 string
      setState({
        ...state, filePreview: reader.result
      });
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }

    const formData = new FormData();
    formData.append('title', state.title);
    formData.append('designation', state.designation);
    formData.append('backgroundImage', file);
    if (file !== undefined) {
      props.updateHeroAction(formData);
    }
  }

  const { backgroundImage } = props.hero;

  const designationArray = state.designation.split(' ');
  const titleArray = state.title.split(' ');

  return (
    <div className="slider-area">
      <Parallax bgImage={state.filePreview ? state.filePreview : backgroundImage !== undefined ? appUrl + backgroundImage : ''} strength={500} bgImageStyle={{ height: '100%', width: '100%', objectFit: 'cover' }}>
        <div className="container">
          <div className="slider-content">
            <Flip top opposite when={props.user && showhText}>
              <div className="editForm">
                <form>
                  <input type="text" placeholder="Title" onKeyDown={updateHandler} value={state.title} name="title" onChange={changeHandler} />
                  <input type="text" placeholder="Designation" onKeyDown={updateHandler} value={state.designation} name="designation" onChange={changeHandler} />
                </form>
              </div>
            </Flip>
            {props.user && (
              <Delete onChangeHandler={heroTextHandler} />
            )}
            {props.user && (
              <div className="editImage">
                <label htmlFor="backgroundImage">
                  <Delete icon="picture-o" />
                </label>
                <input accept="image/jpeg" onChange={updateImage} id="backgroundImage" type="file" />
              </div>
            )}
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