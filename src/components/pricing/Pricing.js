import React from "react";
import {  MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBBtn } from "mdbreact";
import "./Pricing.css"

const Pricing = () => {
  return (
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
        OUR PRICING
        </h2>
        <p className="lead grey-text w-responsive mx-auto mb-5">
        Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.
        </p>
        <MDBRow>
        
        <MDBCol md="4">
            
            <h5 className="font-weight-bold my-4">Economy</h5>
            <p className="grey-text mb-md-0 mb-5">
              Billing per month
            </p>
            <hr></hr>
            <MDBListGroup >
                <MDBListGroupItem >Bandwidth: <span >1GB</span></MDBListGroupItem>
                <MDBListGroupItem>Online Space: <span>50MB</span></MDBListGroupItem>
                <MDBListGroupItem>Support: <span>No</span></MDBListGroupItem>
                <MDBListGroupItem><span>1</span> Domain</MDBListGroupItem>
                <MDBListGroupItem><span>No</span> Hidden Fees</MDBListGroupItem>
            </MDBListGroup>
            <MDBBtn className="mt-4" color="red">Join now</MDBBtn>
          </MDBCol>
          <MDBCol md="4">
            
            <h5 className="font-weight-bold my-4">Deluxe</h5>
            <p className="grey-text mb-md-0 mb-5">
              Billing per month
            </p>
            <hr></hr>
            <MDBListGroup >
                <MDBListGroupItem >Bandwidth: <span >10GB</span></MDBListGroupItem>
                <MDBListGroupItem>Online Space: <span>500MB</span></MDBListGroupItem>
                <MDBListGroupItem>Support: <span>Yes</span></MDBListGroupItem>
                <MDBListGroupItem><span>10</span> Domain</MDBListGroupItem>
                <MDBListGroupItem><span>No</span> Hidden Fees</MDBListGroupItem>
            </MDBListGroup>
            <MDBBtn className="mt-4" color="red">Join now</MDBBtn>
          </MDBCol>
          <MDBCol md="4">
            
            <h5 className="font-weight-bold my-4">Ultimate</h5>
            <p className="grey-text mb-md-0 mb-5">
              Billing per month
            </p>
            <hr></hr>
            <MDBListGroup >
                <MDBListGroupItem >Bandwidth: <span >100GB</span></MDBListGroupItem>
                <MDBListGroupItem>Online Space: <span>2GB</span></MDBListGroupItem>
                <MDBListGroupItem>Support: <span>Yes</span></MDBListGroupItem>
                <MDBListGroupItem><span>Unlimited</span> Domain</MDBListGroupItem>
                <MDBListGroupItem><span>No</span> Hidden Fees</MDBListGroupItem>
            </MDBListGroup>
            <MDBBtn className="mt-4" color="red">Join now</MDBBtn>
          </MDBCol>
        
          
        </MDBRow>
      </section>
      
  );
}

export default Pricing;