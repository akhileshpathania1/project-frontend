import React, { Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import signup from "./signup.css";

function Login() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div>
            <form>
              <h3>Sign In</h3>
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  Submit
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <p className="forgot-password" style={{ textAlign: "left" }}>
                  <a href="/sign-up" style={{ textDecoration: "none" }}>
                    Sign Up?
                  </a>
                </p>
                <p className="forgot-password">
                  Forgot{" "}
                  <a
                    href="#"
                    onClick={() => {
                      navigate("/sign-up");
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    password?
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
