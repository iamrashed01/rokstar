import { Fragment, useEffect } from 'react';
import { Element } from 'react-scroll'
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify'
import Header from '../../components/Header';
// import Prealoader from '../../components/uiStyle/Prealoader';
import Hero from '../Hero';
import About from '../About';
import Auth from '../../components/Auth';

import { getUser } from '../../store/actions';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App(props) {

  useEffect(() => {
    props.getUser();
  }, [])

  const error = props.error.message;
  if (error) {
    toast.error(error)
  }
  return (
    <Fragment>
      {/* <Prealoader/> */}
      <Auth />
      <Header />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <ToastContainer />
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    error: state.meta.error
  }
}

export default connect(mapStateToProps, { getUser })(App);
