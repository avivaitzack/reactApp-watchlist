import React, { useState } from "react";
import { findUser } from "../serverApi";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function LogIn() {
  const [EmailInputValue, setEmailInputValue] = useState("");
  const [PasswordInputValue, setPasswordInputValue] = useState("");
  const [Respones, setRespones] = useState([]);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  

  const login = async () => {
    let result = await findUser(EmailInputValue, PasswordInputValue);
    setRespones(result.data);
    console.log(Respones);
    if (Respones[0] === "Success") {
      setUser([Respones[1]]);
      localStorage.setItem('user', user)
      navigate("/");
    } else if (Respones === "Not Allowed") {
      alert("password wrong");
    } else {
      alert("something went wrong :(");
    }
  };

  return (
    <div style={{ margin: "130px", width: "100vh" }}>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-100 ">
        <MDBInput
          style={{ backgroundColor: "black" }}
          onChange={(e) => setEmailInputValue(e.target.value)}
          wrapperClass="mb-4"
          label="Email address"
          id="form1"
          type="email"
        />
        <MDBInput
          style={{ backgroundColor: "black" }}
          onChange={(e) => setPasswordInputValue(e.target.value)}
          wrapperClass="mb-4"
          label="Password"
          id="form2"
          type="password"
        />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Remember me"
          />
          <a href="!#">Forgot password?</a>
        </div>

        <MDBBtn onClick={login} className="mb-4">
          Sign in
        </MDBBtn>

        <div className="text-center">
          <p>
            Not a member? <a href="/register">Register</a>
          </p>
          <p>or sign up with:</p>

          <div
            className="d-flex justify-content-between mx-auto"
            style={{ width: "40%" }}
          >
            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
}
