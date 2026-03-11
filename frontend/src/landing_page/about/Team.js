import React from "react";

function Team() {
  return (
    <div className="container text-muted">
      <div className="row">
        <h1 className="fs-3 text-center mt-4 mb-5">People</h1>
      </div>

      <div
        className="row"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        {/* Image Section */}
        <div className="col-md-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            className="img-fluid rounded-circle"
            style={{ width: "60%" }}
          />

          <p className="fs-5 mt-4 mb-1">Nithin Kamath</p>
          <p className="fs-6">Founder, CEO</p>
        </div>

        {/* Text Section */}
        <div className="col-md-7">
          <p style={{fontSize:"1rem",marginBottom:"15px"}}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles <br/>he faced during his decade long stint as a trader. Today,<br/>
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p style={{fontSize:"1rem",marginBottom:"15px"}}>
            He is a member of the SEBI Secondary Market Advisory Committee<br/>
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p style={{fontSize:"1rem",marginBottom:"15px"}}>Playing basketball is his zen.</p>

          <p style={{fontSize:"1rem",marginBottom:"15px"}}>
            Connect on
            <a href="#"> Homepage</a> /<a href="#"> TradingQnA</a> /
            <a href="#"> Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
