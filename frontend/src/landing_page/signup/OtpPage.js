import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function OtpPage() {
    const [showNotification, setShowNotification] = useState(false);
    const [otpValue, setOtpValue] = useState("");

    useEffect(() => {
        // Simulate receiving an SMS after 2 seconds
        const timer = setTimeout(() => {
            setShowNotification(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleOtpChange = (e) => {
        const val = e.target.value.replace(/\D/g, '').substring(0, 6);
        setOtpValue(val);
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#fff" }}>
            {/* Simulated SMS Notification */}
            {showNotification && (
                <div className="position-absolute w-100 d-flex justify-content-center" style={{ top: "20px", zIndex: 9999 }}>
                    <div className="bg-white shadow rounded p-3 d-flex align-items-center" style={{ borderLeft: "4px solid #387ed1", width: "350px", animation: "fadeIn 0.5s" }}>
                        <i className="fa-solid fa-message text-primary fs-3 me-3"></i>
                        <div>
                            <div className="fw-bold" style={{ fontSize: "14px", color: "#424242" }}>Messages</div>
                            <div style={{ fontSize: "13px", color: "#666" }}>Your Zerodha verification OTP is <strong>482910</strong>. Do not share this with anyone.</div>
                        </div>
                        <button className="btn-close ms-auto" style={{ fontSize: "10px" }} onClick={() => setShowNotification(false)}></button>
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center py-3 px-5 border-bottom">
                <Link to="/">
                    <img src="/media/images/logo.svg" alt="Zerodha" style={{ width: "130px" }} />
                </Link>
                <div className="text-primary fs-3">
                    <i className="fa-solid fa-circle-user" style={{ color: "#387ed1" }}></i>
                </div>
            </div>

            {/* Main Content */}
            <div className="container flex-grow-1 d-flex align-items-center justify-content-center py-5">
                <div className="row w-100 align-items-center justify-content-center" style={{ maxWidth: "900px" }}>
                    {/* Left: Illustration */}
                    <div className="col-md-6 mb-5 mb-md-0 text-center position-relative d-flex justify-content-center">
                        <div className="position-relative" style={{ width: "300px", height: "200px" }}>
                            <div className="position-absolute bg-white rounded" style={{ width: "180px", height: "100px", top: "50px", left: "60px", border: "1px dashed #b3b3b3", zIndex: 1 }}></div>
                            <div className="position-absolute bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px", top: "10px", left: "10px", zIndex: 2 }}>
                                <div className="rounded-circle bg-primary overflow-hidden position-relative" style={{ width: "50px", height: "50px" }}>
                                    <div className="position-absolute bg-white" style={{ width: "50px", height: "30px", bottom: "-10px", borderRadius: "50%" }}></div>
                                </div>
                            </div>
                            <div className="position-absolute bg-white shadow-sm border rounded p-2 d-flex align-items-center" style={{ width: "160px", height: "50px", top: "40px", left: "70px", zIndex: 3 }}>
                                <div className="rounded border border-warning d-flex align-items-center justify-content-center me-2" style={{ width: "30px", height: "30px" }}>
                                    <i className="fa-regular fa-envelope text-warning"></i>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="bg-primary rounded mb-1" style={{ width: "80%", height: "4px" }}></div>
                                    <div className="bg-secondary rounded" style={{ width: "50%", height: "4px", opacity: 0.5 }}></div>
                                </div>
                            </div>
                            <div className="position-absolute rounded shadow-sm" style={{ width: "60px", height: "40px", backgroundColor: "#f3a536", bottom: "0px", right: "40px", borderRadius: "10px 10px 10px 0", zIndex: 4 }}>
                                <div className="d-flex justify-content-center align-items-center h-100 gap-1 pb-1">
                                    <div className="bg-white rounded-circle" style={{ width: "5px", height: "5px" }}></div>
                                    <div className="bg-white rounded-circle" style={{ width: "5px", height: "5px" }}></div>
                                    <div className="bg-white rounded-circle" style={{ width: "5px", height: "5px" }}></div>
                                    <div className="bg-white rounded-circle" style={{ width: "5px", height: "5px" }}></div>
                                </div>
                                <div className="position-absolute" style={{ width: "0", height: "0", borderTop: "15px solid #f3a536", borderLeft: "15px solid transparent", left: "-10px", bottom: "0" }}></div>
                            </div>
                            <div className="position-absolute bg-light rounded-circle" style={{ width: "100px", height: "100px", bottom: "-10px", left: "40px", zIndex: 0 }}></div>
                            <div className="position-absolute rounded-circle" style={{ width: "6px", height: "6px", backgroundColor: "#387ed1", top: "30px", right: "70px", opacity: 0.8 }}></div>
                            <div className="position-absolute rounded-circle" style={{ width: "4px", height: "4px", backgroundColor: "#387ed1", top: "50px", right: "50px", opacity: 0.6 }}></div>
                            <div className="position-absolute rounded-circle" style={{ width: "6px", height: "6px", backgroundColor: "#387ed1", top: "80px", right: "80px", opacity: 0.8 }}></div>
                        </div>
                    </div>

                    {/* Right: OTP Form */}
                    <div className="col-md-5 ps-md-5 text-start">
                        <h2 className="mb-3" style={{ color: "#424242", fontWeight: "400" }}>Mobile OTP</h2>
                        <p className="mb-4" style={{ color: "#666", fontSize: "14px" }}>
                            Sent to +91 9363259821 <a href="#" style={{ textDecoration: "none", color: "#387ed1" }}>(change)</a>
                        </p>

                        <div className="d-flex align-items-center border rounded mb-4 overflow-hidden position-relative" style={{ height: "60px", maxWidth: "350px" }}>
                            <div className="d-flex align-items-center justify-content-center border-end" style={{ width: "50px", height: "100%", backgroundColor: "#fafafa" }}>
                                <i className="fa-solid fa-mobile-screen text-dark" style={{ fontSize: "1.2rem" }}></i>
                            </div>
                            <input 
                                type="text" 
                                className="form-control border-0 shadow-none px-4 h-100 fs-4 text-center" 
                                placeholder="• • • • • •" 
                                value={otpValue}
                                onChange={handleOtpChange}
                                style={{ letterSpacing: "10px" }}
                                autoFocus
                            />
                        </div>

                        <p style={{ fontSize: "11px", color: "#666", lineHeight: "1.4", marginTop: "10px" }}>
                            Didn't receive OTP?<br />
                            Resend via <a href="#" style={{ textDecoration: "none", color: "#387ed1" }} onClick={(e) => { e.preventDefault(); setShowNotification(true); }}>SMS / Whatsapp</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-top py-3 px-5 d-flex justify-content-end bg-white" style={{ minHeight: "80px" }}>
                <Link to="/email" className={`btn px-4 py-2 ${otpValue.length === 6 ? 'active' : 'disabled'}`} style={{ backgroundColor: otpValue.length === 6 ? "#387ed1" : "#b3b3b3", color: "white", borderRadius: "3px", fontWeight: "500", letterSpacing: "0.5px" }}>
                    Continue
                </Link>
            </div>
        </div>
    );
}

export default OtpPage;
