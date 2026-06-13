/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

function SignupHero() {
    return (
        <div className="container mt-5">
            <div className="row text-center mb-5">
                <h1 className="fs-2 mb-3 mt-5" style={{ color: "#424242" }}>Open a free demat and trading account online</h1>
                <p className="fs-5" style={{ color: "#666" }}>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>
            <div className="row mt-5 d-flex align-items-center mb-5 pb-5 border-bottom">
                <div className="col-lg-7 col-md-12 text-center">
                    <img src="/media/images/signup.png" alt="Zerodha Signup" className="img-fluid" style={{ maxWidth: "80%" }} />
                </div>
                <div className="col-lg-5 col-md-12 mt-5 mt-lg-0 ps-lg-5">
                    <h2 className="mb-2" style={{ color: "#424242", fontWeight: "500" }}>Signup now</h2>
                    <p className="fs-5 mb-4" style={{ color: "#9b9b9b" }}>Or track your existing application</p>
                    
                    <div className="d-flex align-items-center mb-4">
                        <div className="border d-flex align-items-center bg-light px-3 py-2 rounded-start border-end-0" style={{ borderColor: "#eee", color: "#424242" }}>
                            <span className="me-2 fs-5">🇮🇳</span>
                            <span className="fs-5">+91</span>
                        </div>
                        <input 
                            type="text" 
                            className="form-control py-2 fs-5 rounded-end border-start-0 focus-ring" 
                            placeholder="Enter your mobile number" 
                            style={{ boxShadow: 'none', borderColor: "#dee2e6", color: "#424242" }}
                        />
                    </div>
                    
                    <Link to="/otp" className="btn btn-primary w-50 py-2 fs-5 mb-4 rounded-1 fw-bold" style={{ backgroundColor: "#387ed1", border: "none" }}>Get OTP</Link>
                    
                    <p style={{ fontSize: "12px", color: "#666" }}>
                        By proceeding, you agree to the Zerodha <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>terms</a> & <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>privacy policy</a>
                    </p>
                    <p style={{ fontSize: "12px", color: "#666" }}>
                        Looking to open NRI account? <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>Click here</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignupHero;
