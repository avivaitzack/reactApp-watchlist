import React, {useState, useNavigate }  from 'react'
import axios from 'axios'
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

export default function SignIn() {
  let navigate = useNavigate();
    const [EmailInputValue, setEmailInputValue] = useState("");
    const [PasswordInputValue, setPasswordInputValue] = useState("");

    const login = ()=>{
       axios.post('http://localhost:3001/login',{
        email: EmailInputValue,
        password:PasswordInputValue ,}).then((res)=>{
          if(res.data === 'success'){
            navigate("/Home", { replace: true })
          }else if(res.data === 'Not Allowed'){
            alert('password wrong')
          }else{
            alert('something went wrong :(')
          }
          ;
        })
      } 
    
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

    <MDBInput  onChange={(e) => setEmailInputValue(e.target.value)} wrapperClass='mb-4' label='Email address' id='form1' type='email' />
    <MDBInput onChange={(e) => setPasswordInputValue(e.target.value)}  wrapperClass='mb-4' label='Password' id='form2' type='password'/>

    <div className="d-flex justify-content-between mx-3 mb-4">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      <a href="!#">Forgot password?</a>
    </div>

    <MDBBtn onClick={login} className="mb-4">Sign in</MDBBtn>

    <div className="text-center">
      <p>Not a member? <a href="#!">Register</a></p>
      <p>or sign up with:</p>

      <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='facebook-f' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='twitter' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='google' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='github' size="sm"/>
        </MDBBtn>

      </div>
    </div>

  </MDBContainer>
  )
}
