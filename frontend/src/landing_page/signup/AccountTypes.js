import React from 'react';

function AccountTypes() {
    return (
        <div className="bg-light py-5 border-top" style={{ backgroundColor: "#fafafa" }}>
            <div className="container">
                <div className="text-center mb-5 pb-3">
                    <h3 className="fs-3 mt-4" style={{ color: "#424242", fontWeight: "500" }}>Explore different account types</h3>
                </div>
                
                <div className="row justify-content-start px-lg-5">
                    {/* Row 1 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 rounded-1" style={{ border: "1px solid #eaeaea", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                            <div className="card-body p-4 text-start">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="me-3 text-primary">
                                        <div className="border border-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px", opacity: 0.8 }}>
                                            <i className="fa-regular fa-user"></i>
                                        </div>
                                    </div>
                                    <h5 className="card-title mb-0" style={{ color: "#424242", fontSize: "1.1rem", fontWeight: "500" }}>Individual Account</h5>
                                </div>
                                <p className="card-text" style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Invest in equity, mutual funds and derivatives
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 rounded-1" style={{ border: "1px solid #eaeaea", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                            <div className="card-body p-4 text-start">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="me-3 text-primary">
                                        <div className="border border-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px", opacity: 0.8 }}>
                                            <i className="fa-solid fa-users"></i>
                                        </div>
                                    </div>
                                    <h5 className="card-title mb-0" style={{ color: "#424242", fontSize: "1.1rem", fontWeight: "500" }}>HUF Account</h5>
                                </div>
                                <p className="card-text" style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Make tax-efficient investments for your family
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 rounded-1" style={{ border: "1px solid #eaeaea", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                            <div className="card-body p-4 text-start">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="me-3 text-primary">
                                        <div className="border border-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px", opacity: 0.8 }}>
                                            <i className="fa-solid fa-globe"></i>
                                        </div>
                                    </div>
                                    <h5 className="card-title mb-0" style={{ color: "#424242", fontSize: "1.1rem", fontWeight: "500" }}>NRI Account</h5>
                                </div>
                                <p className="card-text" style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Invest in equity, mutual funds, debentures, and more
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Row 2 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 rounded-1" style={{ border: "1px solid #eaeaea", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                            <div className="card-body p-4 text-start">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="me-3 text-primary">
                                        <div className="border border-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px", opacity: 0.8 }}>
                                            <i className="fa-solid fa-child-reaching"></i>
                                        </div>
                                    </div>
                                    <h5 className="card-title mb-0" style={{ color: "#424242", fontSize: "1.1rem", fontWeight: "500" }}>Minor Account</h5>
                                </div>
                                <p className="card-text" style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Teach your little ones about money & invest for their future with them
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100 rounded-1" style={{ border: "1px solid #eaeaea", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                            <div className="card-body p-4 text-start">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="me-3 text-primary">
                                        <div className="border border-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "35px", height: "35px", opacity: 0.8 }}>
                                            <i className="fa-regular fa-building"></i>
                                        </div>
                                    </div>
                                    <h5 className="card-title mb-0" style={{ color: "#424242", fontSize: "1.1rem", fontWeight: "500" }}>Corporate / LLP/ Partnership</h5>
                                </div>
                                <p className="card-text" style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6" }}>
                                    Manage your business surplus and investments easily
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default AccountTypes;
