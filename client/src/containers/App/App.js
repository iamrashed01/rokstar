import { Fragment } from 'react';
import { Element } from 'react-scroll'
import Header from '../../components/Header';
// import Prealoader from '../../components/uiStyle/Prealoader';
import Hero from '../Hero';
import About from '../About';
import './App.css';

function App() {
  return (
    <Fragment>
      {/* <Prealoader/> */}
      <Header />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
    </Fragment>
  );
}

export default App;
