import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBBtn
} from 'mdbreact';
import './AppPage.css';

class AppPage extends React.Component {
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
      <div id='apppage'>
        <Router>
          <div>
            <MDBNavbar
              color='black'
              dark
              expand='md'
              fixed='top'
              scrolling
              transparent
              style={{ marginTop: '15px' }}
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className='white-text ml-1'>Dorsin</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={collapsed} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to='#!'>Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='#!'>Link</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='#!'>Profile</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBBtn rounded color="danger">Try it free</MDBBtn>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {collapsed && overlay}
          </div>
        </Router>
        <MDBView>
          <MDBMask className='white-text gradient' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='d-flex justify-content-center white-text align-items-center'
          >
            <MDBRow>
              <MDBCol className='d-flex flex-column align-items-center text-center mt-xl-5 mb-5'>
                <h1 className="w-responsive mb-5">We help startups launch their products</h1>
                <p className="w-75">Etiam sed.Interdum consequat proin vestibulum className at a euismod mus luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>
                <MDBCol md="6">
                  <input className="form-control" type="email" placeholder="E-Mail" aria-label="Search" />
                  <MDBBtn color="danger" rounded size="l" type="email" className="mr-auto">Subscribe</MDBBtn>
                </MDBCol>
              </MDBCol>

             
            </MDBRow>
            
          </MDBContainer>
        </MDBView>

      </div>
    );
  }
}

export default AppPage;