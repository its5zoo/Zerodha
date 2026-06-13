/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Hero() {
  return (
    <section className="container-fluid py-4" id="supportHero">
      <div
        className="d-flex justify-content-between px-5 py-3"
        id="supportWrapper"
      >
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>

      <div className="row px-5 py-4">
        <div className="col-6 pe-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            className="form-control p-3 mb-4"
            placeholder="Eg. how do I activate F&O"
          />

          <div className="d-flex gap-2 flex-wrap">
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>

        <div className="col-6 ps-3">
          <h1 className="fs-3 mb-4">Featured</h1>

          <ol>
            <li className="mb-4">
              <a href="">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>

            <li>
              <a href="">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;