import React from 'react';

import {MDBRow,MDBCol,MDBBtn,MDBContainer} from 'mdbreact';


class AppPage extends React.Component {
  
  render() {
    
    return (
      <div>
        
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '1rem' }}
            className='digital-web d-flex justify-content-center blue-grey-text align-items-center'
          >
            <MDBRow className="digital-web grey lighten-5">
              <MDBCol md='6' className=' digital-web text-center text-md-left mt-1 mt-xl-5 mb-5'>
                    <h1 className='h1-responsive font-weight-bold mt-sm-5'>
                    A digital web design studio creating modern & engaging online experiences
                    </h1>
                    <h6 className='mb-4'>
                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </h6>
                    <ul className="grey lighten-5" >
                        <li className="">Cras justo odio</li>
                        <li className="">Dapibus ac facilisis in</li>
                        <li className="">Morbi leo risus</li>
                        <li className="">Porta ac consectetur ac</li>
                        <li className="">Vestibulum at eros</li>
                    </ul>
                  <MDBBtn rounded color="danger">Learn More</MDBBtn>
              </MDBCol>

              <MDBCol md='6' xl='6' className=' mt-xl-5 pt-xl-5'>
                
                  <img
                    
                    src="http://dorsin.react.themesbrand.com/images/online-world.svg"
                    alt=''
                    className='img-fluid'
                  />
                
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        

      </div>
    );
  }
}

export default AppPage;