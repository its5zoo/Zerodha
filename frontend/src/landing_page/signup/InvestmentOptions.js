import React from 'react';

function InvestmentOptions() {
    return (
        <div className="container">
            <div className="row text-center mt-5 pt-3">
                <h3 className="fs-3 mb-5 pb-4" style={{ color: "#424242", fontWeight: "500" }}>Investment options with Zerodha demat account</h3>
                
                <div className="row mt-2 px-lg-5">
                    <div className="col-md-6 mb-5 d-flex justify-content-center">
                        <div className="d-flex align-items-start" style={{ maxWidth: "400px" }}>
                            <div className="me-4" style={{ fontSize: "3rem", width: "80px", color: "#387ed1" }}>
                                <i className="fa-solid fa-chart-column"></i>
                            </div>
                            <div className="text-start">
                                <h4 className="fs-5 mb-2" style={{ color: "#424242", fontWeight: "500" }}>Stocks</h4>
                                <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6" }}>Invest in all exchange-listed securities</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 mb-5 d-flex justify-content-center">
                        <div className="d-flex align-items-start" style={{ maxWidth: "400px" }}>
                            <div className="me-4" style={{ fontSize: "3rem", width: "80px", color: "#387ed1" }}>
                                <i className="fa-solid fa-cubes"></i>
                            </div>
                            <div className="text-start">
                                <h4 className="fs-5 mb-2" style={{ color: "#424242", fontWeight: "500" }}>Mutual funds</h4>
                                <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6" }}>Invest in commission-free direct mutual funds</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 mb-5 d-flex justify-content-center">
                        <div className="d-flex align-items-start" style={{ maxWidth: "400px" }}>
                            <div className="me-4" style={{ fontSize: "3rem", width: "80px", color: "#387ed1" }}>
                                <i className="fa-solid fa-file-invoice-dollar"></i>
                            </div>
                            <div className="text-start">
                                <h4 className="fs-5 mb-2" style={{ color: "#424242", fontWeight: "500" }}>IPO</h4>
                                <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6" }}>Apply to the latest IPOs instantly via UPI</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 mb-5 d-flex justify-content-center">
                        <div className="d-flex align-items-start" style={{ maxWidth: "400px" }}>
                            <div className="me-4" style={{ fontSize: "3rem", width: "80px", color: "#387ed1" }}>
                                <i className="fa-solid fa-chart-pie"></i>
                            </div>
                            <div className="text-start">
                                <h4 className="fs-5 mb-2" style={{ color: "#424242", fontWeight: "500" }}>Futures & options</h4>
                                <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6" }}>Hedge and mitigate market risk through simplified F&O trading</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-3 mb-5 pb-5">
                    <button className="btn btn-primary py-2 px-4 fs-5 rounded-1 fw-bold" style={{ backgroundColor: "#387ed1", border: "none" }}>Explore Investments</button>
                </div>
            </div>
        </div>
    );
}

export default InvestmentOptions;
