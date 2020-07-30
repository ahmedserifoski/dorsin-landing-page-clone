import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer
} from 'mdbreact';
import './Build.css';

class Build extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed
    });
  };

  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }

  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  render() {
    const { collapsed } = this.state;

    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id='build'>
        
        <MDBView>
          <MDBMask className='white-text gradient' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem', paddingBottom: "10rem" }}
            className='d-flex justify-content-center white-text align-items-center'
          >
            <MDBRow>
              <MDBCol  className='text-center'>
                
                  <h1 className='h1-responsive font-weight-bold mt-sm-5 mb-sm-5'>
                    Build your dream website today
                  </h1>
                  <h6 className='mb-5'>
                  But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.
                  </h6>
                  <MDBBtn className="mb-5" color="white">Primary</MDBBtn>
                  
                
              </MDBCol>

             
            </MDBRow>
          </MDBContainer>
        </MDBView>

        
      </div>
    );
  }
}

export default Build;