import React from 'react';
import { Link } from 'react-router-dom';

function EmailPage() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#fff" }}>
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
                    {/* Left: Illustration (Same as OTP page) */}
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

                    {/* Right: Email Form */}
                    <div className="col-md-5 ps-md-5 text-start">
                        <h2 className="mb-4" style={{ color: "#424242", fontWeight: "400" }}>What's your e-mail?</h2>

                        {/* Continue with Google Button */}
                        <div className="border rounded d-flex align-items-center justify-content-center py-2 mb-4 cursor-pointer" style={{ maxWidth: "350px", borderColor: "#e0e0e0" }}>
                            <div className="border-end px-3 py-1">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" style={{ width: "20px" }} />
                            </div>
                            <div className="flex-grow-1 text-center" style={{ color: "#666", fontSize: "14px", fontWeight: "500" }}>
                                Continue with Google
                            </div>
                        </div>

                        {/* OR Divider */}
                        <div className="d-flex align-items-center mb-4" style={{ maxWidth: "350px" }}>
                            <div className="flex-grow-1 border-bottom" style={{ borderColor: "#eee" }}></div>
                            <div className="px-3 text-muted" style={{ fontSize: "12px" }}>or</div>
                            <div className="flex-grow-1 border-bottom" style={{ borderColor: "#eee" }}></div>
                        </div>

                        {/* Form Inputs */}
                        <div style={{ maxWidth: "350px" }}>
                            {/* Floating label for Name */}
                            <div className="form-floating mb-3 position-relative">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nameInput"
                                    placeholder="Name"
                                    style={{ border: "1px solid #ccc", boxShadow: "none", borderRadius: "3px", height: "55px", paddingTop: "20px" }}
                                    autoFocus
                                />
                                <label htmlFor="nameInput" style={{ color: "#666", fontSize: "13px", padding: "15px 12px", transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)" }}>Name</label>
                            </div>

                            {/* Floating label for E-mail */}
                            <div className="form-floating mb-2 position-relative">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    placeholder="E-mail"
                                    style={{ border: "1px solid #ccc", boxShadow: "none", borderRadius: "3px", height: "55px", paddingTop: "20px" }}
                                />
                                <label htmlFor="emailInput" style={{ color: "#666", fontSize: "13px", padding: "15px 12px", transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)" }}>E-mail</label>
                            </div>
                        </div>

                        <p className="mt-3" style={{ fontSize: "11px", color: "#999" }}>
                            You will receive an OTP on this email address
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-top py-3 px-5 d-flex justify-content-end bg-white" style={{ minHeight: "80px" }}>
                <Link to="/" className="btn px-4 py-2" style={{ backgroundColor: "#387ed1", color: "white", borderRadius: "3px", fontWeight: "500", letterSpacing: "0.5px" }}>
                    Continue
                </Link>
            </div>
        </div>
    );
}

export default EmailPage;
