import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import "./index.css";


import AppPage from "./components/home/AppPage";
import Features from "./components/features/Features";
import DigitalWeb from "./components/DigitalWeb/DigitalWeb"
import Build from "./components/build/Build"
import Pricing from "./components/pricing/Pricing"
import Contact from "./components/contact/Contact"

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <AppPage />
        <Features />
        <DigitalWeb />
        <Build />
        <Pricing />
        <Contact />
      </MDBContainer>
      
    );
  }
}

export default App;
