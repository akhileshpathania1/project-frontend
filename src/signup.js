import React, { Component, useState } from "react";
import { useNavigate } from "react-router";
import signup from "./signup.css";
import { doc, addDoc, collection, setDoc } from "firebase/firestore";
import { db } from "./firebase";

function SignUp() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const ref = collection(db, "users");
  const createUser = () => {
    addDoc(ref, {
      fname: firstname,
      lname: lastname,
      eId: emailId,
      pd: password
    });
  };
  let navigate = useNavigate();
  return (
    <div>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div className="Signup">
            <form>
              <h3>Sign Up</h3>
              <div className="mb-3">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => {
                    setEmailId(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={createUser}
                >
                  Sign Up
                </button>
              </div>
              <p className="forgot-password text-right">
                Already registered{" "}
                <a
                  href="#"
                  onClick={() => {
                    navigate("/sign-in");
                  }}
                  style={{ textDecoration: "none" }}
                >
                  Sign in?
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
