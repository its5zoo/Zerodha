import React from 'react';

function Awards() {
    return ( 
        <div className="container mt-5">
  <div className="row">

    <div className="col-md-6">
      <img
        src="media/images/largestBroker.svg"
        alt="Largest Broker"
        className="img-fluid"
      />
    </div>

    <div className="col-md-6">
      <h1 className='p-2'>Largest stock broker in India</h1>

      <p>
        2+ million Zerodha clients contribute to over
        15% of all retail order volumes in India daily.
      </p>

      <div className="row">

        <div className="col-6 p-4">
          <ul>
            <li><p>Futures and Options</p></li>
            <li><p>Commodity derivatives</p></li>
            <li><p>Currency derivatives</p></li>
          </ul>
        </div>

        <div className="col-6 p-4">
          <ul>
            <li><p>Stocks & IPOs</p></li>
            <li><p>Direct mutual funds</p></li>
            <li><p>Bonds and Growth</p></li>
          </ul>
        </div>
        <img src='media/images/pressLogos.png' alt="Press Logos" className='pt-2' style={{width:"85%"}}/>
      </div>
      
    </div>

  </div>
</div>
     );
}

export default Awards;