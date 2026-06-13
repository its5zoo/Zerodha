import React from 'react';

function StepsToOpen() {
    return (
        <div className="bg-light py-5 border-top" style={{ backgroundColor: "#fafafa" }}>
            <div className="container">
                <div className="row text-center mt-3">
                    <h3 className="fs-3 mb-5 mt-4" style={{ color: "#424242", fontWeight: "500" }}>Steps to open a demat account with Zerodha</h3>
                    
                    <div className="row mt-4 px-lg-5 align-items-center justify-content-center pb-5">
                        <div className="col-lg-6 col-md-12 mb-5 d-flex justify-content-center position-relative">
                            <div className="position-relative" style={{ width: "350px", height: "220px" }}>
                                {/* Decorative elements mimicking the video illustration */}
                                <div className="position-absolute bg-white rounded-circle shadow-sm" style={{ width: "280px", height: "280px", top: "-30px", left: "20px", zIndex: 0 }}></div>
                                
                                <div className="position-absolute rounded shadow-sm border border-light" style={{ width: "220px", height: "130px", backgroundColor: "#e8eff7", top: "50px", left: "100px", zIndex: 1 }}>
                                    <div className="d-flex justify-content-end p-2 mt-4">
                                        <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", backgroundColor: "#387ed1", color: "white" }}>
                                            <i className="fa-solid fa-user"></i>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="position-absolute rounded shadow" style={{ width: "220px", height: "130px", backgroundColor: "#387ed1", top: "30px", left: "20px", zIndex: 2 }}>
                                    <div className="p-3">
                                        <div className="d-flex gap-1 mb-3">
                                            <div className="rounded-circle bg-white" style={{ width: "6px", height: "6px", opacity: 0.8 }}></div>
                                            <div className="rounded-circle bg-white" style={{ width: "6px", height: "6px", opacity: 0.8 }}></div>
                                            <div className="rounded-circle bg-white" style={{ width: "6px", height: "6px", opacity: 0.8 }}></div>
                                        </div>
                                        <div className="bg-warning rounded mb-2" style={{ width: "30%", height: "4px", opacity: 0.9 }}></div>
                                        <div className="bg-light rounded" style={{ width: "60%", height: "4px", opacity: 0.5 }}></div>
                                    </div>
                                </div>
                                
                                <div className="position-absolute d-flex align-items-center justify-content-center w-100 h-100" style={{ zIndex: 3, top: "-10px", left: "10px" }}>
                                    <div className="bg-white rounded px-2 py-1 shadow-sm d-flex align-items-center position-absolute" style={{ top: "0", right: "-10px", fontSize: "10px", zIndex: 4, width: "120px" }}>
                                        Quick Video Guide: How to open Zerodha Account
                                    </div>
                                    <i className="fa-brands fa-youtube text-danger bg-white rounded" style={{ fontSize: "3.5rem", padding: "2px", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.15))" }}></i>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-5 col-md-12 text-start ps-lg-5">
                            <div className="d-flex align-items-center mb-4 pb-3 border-bottom">
                                <div className="rounded-circle border d-flex align-items-center justify-content-center me-4 bg-white" style={{ width: "40px", height: "40px", borderColor: "#eee", color: "#666", minWidth: "40px", fontSize: "14px" }}>
                                    01
                                </div>
                                <h4 className="fs-5 mb-0" style={{ color: "#424242", fontWeight: "400" }}>Enter the requested details</h4>
                            </div>
                            
                            <div className="d-flex align-items-center mb-4 pb-3 border-bottom">
                                <div className="rounded-circle border d-flex align-items-center justify-content-center me-4 bg-white" style={{ width: "40px", height: "40px", borderColor: "#eee", color: "#666", minWidth: "40px", fontSize: "14px" }}>
                                    02
                                </div>
                                <h4 className="fs-5 mb-0" style={{ color: "#424242", fontWeight: "400" }}>Complete e-sign & verification</h4>
                            </div>
                            
                            <div className="d-flex align-items-center mb-2">
                                <div className="rounded-circle border d-flex align-items-center justify-content-center me-4 bg-white" style={{ width: "40px", height: "40px", borderColor: "#eee", color: "#666", minWidth: "40px", fontSize: "14px" }}>
                                    03
                                </div>
                                <h4 className="fs-5 mb-0" style={{ color: "#424242", fontWeight: "400" }}>Start investing!</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StepsToOpen;
