import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || "https://zerodha-dashboard.onrender.com";

  return (
    <>
      <nav
        className="navbar navbar-expand-lg border-bottom py-3 position-relative"
        style={{ backgroundColor: "#FFF", zIndex: 1000 }}
      >
        <div className="container px-lg-5">
          <Link className="navbar-brand" to='/'>
            <img
              src="media/images/logo.svg"
              style={{ width: "130px" }}
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 align-items-center" style={{ fontSize: "15px", color: "#666" }}>
              <li className="nav-item">
                {isLoggedIn ? (
                  <a className="nav-link" aria-current="page" href={DASHBOARD_URL}>
                    Dashboard
                  </a>
                ) : (
                  <Link className="nav-link" aria-current="page" to="/signup">
                    Signup
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <i className={isMenuOpen ? "fa-solid fa-times fs-5" : "fa-solid fa-bars fs-5"}></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mega Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="position-absolute bg-white shadow rounded-2" 
          style={{ 
            zIndex: 999, 
            top: "72px", 
            right: "5%", 
            width: "700px",
            border: "1px solid #eee"
          }}
        >
          <div className="p-5">
            {/* Top Row: Platforms */}
            <div className="row text-center mb-5 pb-4 border-bottom">
              <div className="col-3">
                <Link to="#" className="text-decoration-none text-dark d-flex flex-column align-items-center">
                  <div className="mb-3 d-flex align-items-center justify-content-center" style={{ height: "40px" }}>
                     <img src="https://kite.zerodha.com/static/images/kite-logo.svg" alt="Kite" style={{ width: "40px" }} />
                  </div>
                  <h6 className="mb-1 fw-bold text-dark" style={{fontSize: "15px"}}>Kite</h6>
                  <p className="text-muted mb-0" style={{fontSize: "11px"}}>Trading platform</p>
                </Link>
              </div>
              <div className="col-3">
                <Link to="#" className="text-decoration-none text-dark d-flex flex-column align-items-center">
                  <div className="mb-3 d-flex align-items-center justify-content-center">
                    <div className="rounded-circle border border-3 border-primary" style={{width: "32px", height: "32px", borderColor: "#387ed1 !important"}}></div>
                  </div>
                  <h6 className="mb-1 fw-bold text-dark" style={{fontSize: "15px"}}>Console</h6>
                  <p className="text-muted mb-0" style={{fontSize: "11px"}}>Backoffice</p>
                </Link>
              </div>
              <div className="col-3">
                <Link to="#" className="text-decoration-none text-dark d-flex flex-column align-items-center">
                  <div className="mb-3 d-flex align-items-center justify-content-center text-secondary">
                     <i className="fa-solid fa-cube" style={{fontSize: "2rem"}}></i>
                  </div>
                  <h6 className="mb-1 fw-bold text-dark" style={{fontSize: "15px"}}>Kite Connect</h6>
                  <p className="text-muted mb-0" style={{fontSize: "11px"}}>Trading APIs</p>
                </Link>
              </div>
              <div className="col-3">
                <Link to="#" className="text-decoration-none text-dark d-flex flex-column align-items-center">
                  <div className="mb-3 d-flex align-items-center justify-content-center text-warning">
                     <i className="fa-solid fa-coins" style={{fontSize: "2rem"}}></i>
                  </div>
                  <h6 className="mb-1 fw-bold text-dark" style={{fontSize: "15px"}}>Coin</h6>
                  <p className="text-muted mb-0" style={{fontSize: "11px"}}>Mutual funds</p>
                </Link>
              </div>
            </div>

            {/* Bottom Row: Utilities, Updates, Education */}
            <div className="row text-start">
              <div className="col-4">
                <h6 className="fw-bold mb-4" style={{color: "#424242", fontSize: "15px"}}>Utilities</h6>
                <ul className="list-unstyled" style={{fontSize: "13px", lineHeight: "2.4"}}>
                  <li><Link to="#" className="text-decoration-none" style={{color: "#666"}}>Calculators</Link></li>
                  <li><Link to="#" className="text-decoration-none" style={{color: "#666"}}>Brokerage calculator</Link></li>
                  <li><Link to="#" className="text-decoration-none" style={{color: "#666"}}>Margin calculator</Link></li>
                  <li><Link to="#" className="text-decoration-none" style={{color: "#666"}}>SIP calculator</Link></li>
                </ul>
              </div>
              <div className="col-4">
                <h6 className="fw-bold mb-4" style={{color: "#424242", fontSize: "15px"}}>Updates</h6>
                <ul className="list-unstyled" style={{fontSize: "13px", lineHeight: "2.4"}}>
                  <li><Link to="#" className="text-decoration-none" style={{color: "#666"}}>Z-Connect blog</Link></li>
                  <li><Link to="#" className="text-decoration-none" style={{color: "#666"}}>Circulars / Bulletin</Link></li>
                  <li><Link to="#" className="text-decoration-none" style={{color: "#666"}}>IPOs</Link></li>
                  <li><Link to="#" className="text-decoration-none" style={{color: "#666"}}>Markets</Link></li>
                </ul>
              </div>
              <div className="col-4">
                <h6 className="fw-bold mb-4" style={{color: "#424242", fontSize: "15px"}}>Education</h6>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <Link to="#" className="text-decoration-none text-center">
                        <div className="d-flex justify-content-center mb-2">
                           <i className="fa-solid fa-shield text-primary" style={{fontSize: "2rem", opacity: 0.8}}></i>
                        </div>
                        <span style={{color: "#666", fontSize: "13px"}}>Varsity</span>
                    </Link>
                    <Link to="#" className="text-decoration-none text-center">
                        <div className="d-flex justify-content-center mb-2">
                            <i className="fa-regular fa-comments text-info" style={{fontSize: "2rem", opacity: 0.8}}></i>
                        </div>
                        <span style={{color: "#666", fontSize: "13px"}}>Trading Q&A</span>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;