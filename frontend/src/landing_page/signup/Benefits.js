import React from 'react';

function Benefits() {
    return (
        <div className="container mt-5 pt-5 mb-5 pb-5">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-5 col-md-12 text-center mb-5 mb-lg-0 pe-lg-5">
                    {/* Mock illustration container */}
                    <div className="position-relative mx-auto mb-4" style={{ width: "250px", height: "200px" }}>
                        {/* Abstract circles */}
                        <div className="position-absolute rounded-circle border" style={{ width: "150px", height: "150px", right: "10px", top: "10px", borderColor: "#eee", opacity: 0.5 }}></div>
                        <div className="position-absolute rounded-circle border" style={{ width: "110px", height: "110px", right: "30px", top: "30px", borderColor: "#eee", opacity: 0.5 }}></div>
                        <div className="position-absolute rounded-circle border" style={{ width: "70px", height: "70px", right: "50px", top: "50px", borderColor: "#eee", opacity: 0.5 }}></div>
                        
                        {/* Bars */}
                        <div className="position-absolute rounded-1" style={{ width: "10px", height: "60px", left: "60px", top: "40px", backgroundColor: "#387ed1" }}></div>
                        <div className="position-absolute rounded-1" style={{ width: "10px", height: "40px", left: "80px", top: "80px", backgroundColor: "#e2664d" }}></div>
                        <div className="position-absolute rounded-1" style={{ width: "10px", height: "35px", left: "100px", top: "55px", backgroundColor: "#387ed1" }}></div>
                        
                        {/* Blue block */}
                        <div className="position-absolute rounded" style={{ width: "50px", height: "60px", left: "10px", bottom: "30px", backgroundColor: "#e8eff7" }}></div>
                        <div className="position-absolute rounded shadow-sm" style={{ width: "40px", height: "40px", left: "20px", bottom: "30px", backgroundColor: "#387ed1", borderTopRightRadius: "30px" }}></div>
                        
                        {/* Orange Percentage */}
                        <div className="position-absolute text-warning" style={{ fontSize: "2.5rem", right: "30px", bottom: "10px", fontWeight: "300" }}>%</div>
                        
                        {/* Rupee symbol */}
                        <div className="position-absolute" style={{ fontSize: "1.2rem", right: "80px", top: "60px", opacity: 0.6, color: "#387ed1" }}>₹</div>
                        
                        {/* Dots */}
                        <div className="position-absolute text-danger" style={{ left: "5px", top: "50px", letterSpacing: "2px", lineHeight: "10px" }}>
                            ...<br/>...<br/>...
                        </div>
                    </div>
                    
                    <h3 className="fs-4 mt-4" style={{ color: "#424242", fontWeight: "500" }}>Benefits of opening a Zerodha demat account</h3>
                </div>
                
                <div className="col-lg-6 col-md-12 ps-lg-5 text-start">
                    <div className="mb-4 pb-2">
                        <h4 className="fs-5 mb-3" style={{ color: "#424242", fontWeight: "500" }}>Unbeatable pricing</h4>
                        <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6" }}>
                            Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.
                        </p>
                    </div>
                    
                    <div className="mb-4 pb-2">
                        <h4 className="fs-5 mb-3" style={{ color: "#424242", fontWeight: "500" }}>Best investing experience</h4>
                        <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6" }}>
                            Simple and intuitive trading platform with an easy-to-understand user interface.
                        </p>
                    </div>
                    
                    <div className="mb-4 pb-2">
                        <h4 className="fs-5 mb-3" style={{ color: "#424242", fontWeight: "500" }}>No spam or gimmicks</h4>
                        <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6" }}>
                            Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.
                        </p>
                    </div>
                    
                    <div className="mb-2">
                        <h4 className="fs-5 mb-3" style={{ color: "#424242", fontWeight: "500" }}>The Zerodha universe</h4>
                        <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6", marginBottom: "0" }}>
                            More than just an app — gain free access to the entire ecosystem of our partner products.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
