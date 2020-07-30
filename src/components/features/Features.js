import React from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBView } from "mdbreact";

const Features = () => {
  return (
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Our services
        </h2>
        <p className="lead grey-text w-responsive mx-auto mb-5">
        We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.
        </p>
        <MDBRow>
          
          <MDBCol className="hoverable" md="4">
        
            <MDBIcon fab icon="sketch" size="3x" className="red-text"/>
            <h5 className="font-weight-bold my-4">Digital Design</h5>
            <p className="grey-text mb-md-0 mb-5">
            Some quick example text to build on the card title and make up the bulk of the card's content. 
            Moltin gives you the platform.
            </p>
            
          </MDBCol>
          
          <MDBCol className="hoverable" md="4">
            <MDBIcon icon="palette" size="3x" className="red-text"/>
            <h5 className="font-weight-bold my-4">Unlimited Colors</h5>
            <p className="grey-text mb-md-0 mb-5">
            Credibly brand standards compliant users without extensible services. 
            Anibh euismod tincidunt ut laoreet.
            </p>
          </MDBCol>
          <MDBCol className="hoverable" md="4">
          <MDBIcon icon="piggy-bank" size="3x" className="red-text"/>
            <h5 className="font-weight-bold my-4">Strategy solutions</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-5">
          <MDBCol className="hoverable" md="4">
          <MDBIcon fab icon="react" size="3x" className="red-text"/>
            <h5 className="font-weight-bold my-4">Awesome Support</h5>
            <p className="grey-text mb-md-0 mb-5">
            Some quick example text to build on the card title and make up the bulk of the card's content. 
            Moltin gives you the platform.
            </p>
          </MDBCol>
          <MDBCol className="hoverable" md="4">
            <MDBIcon icon="book" size="3x" className="red-text"/>
            <h5 className="font-weight-bold my-4">Truly Multipurpose</h5>
            <p className="grey-text mb-md-0 mb-5">
            Credibly brand standards compliant users without extensible services. 
            Anibh euismod tincidunt ut laoreet.
            </p>
          </MDBCol>
          <MDBCol className="hoverable" md="4">
          <MDBIcon  icon="plane" size="3x" className="red-text"/>
            <h5 className="font-weight-bold my-4">Easy to costumize</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default Features;