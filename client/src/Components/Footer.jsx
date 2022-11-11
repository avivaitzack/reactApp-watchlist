import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' light bgColor='dark'>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="light"
            color='dark'
            floating
            size="lg"
            className='text-light m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color='dark'
            floating
            size="lg"
            className='text-light m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color='dark'
            floating
            size="lg"
            className='text-light m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color='dark'
            floating
            size="lg"
            className='text-light m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color='dark'
            floating
            size="lg"
            className='text-light m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color='dark'
            floating
            size="lg"
            className='text-light m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-light p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-light' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  )
}
