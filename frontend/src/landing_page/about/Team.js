import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/faizaan.jpg.png"
            alt="MD Faizaan Raza Khan"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">MD Faizaan Raza Khan</h4>
          <h6>MERN STACK DEVELOPER, AI Enthusiast</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Faizaan is a 2nd-year Computer Science Engineering student passionate about coding and building innovative projects.
            Building projects, solving coding challenges, and creating content are what keep him motivated.
          </p>
          <p>
            On 14th June 2026, he launched this website as part of his development journey, showcasing his skills in web development and problem-solving.
          </p>
          <p>His interests include Web Development, AI, Drone Technology, and Software Engineering, with a strong focus on creating practical and impactful solutions.</p>
          <p>
            Connect on <a href="https://github.com/its5zoo">GitHUB</a> / <a href="https://www.linkedin.com/in/md-faizaan-raza-khan/">LinkedIn</a> /{" "}
            <a href="https://www.instagram.com/faizaan_khan_07/">Instagram</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;