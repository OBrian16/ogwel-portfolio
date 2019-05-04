import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Works from './components/works/works';
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer';
import resumeData from './components/resumeData';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About />
        <Resume /> 
        <Works/> 
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
