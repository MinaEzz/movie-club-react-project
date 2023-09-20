import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <section
      id="intro"
      className="d-flex alig-items-center justify-content-center pd-y"
    >
      <div className="container">
        <div className="intro-content text-center">
          <h1>
            welcome to <span>movie club</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quis
            distinctio assumenda nulla doloremque ut unde incidunt quaerat ipsam
            consectetur iure ex deserunt sint accusantium nobis, asperiores
            quidem necessitatibus ipsa.
          </p>
          <Link to="/contact" className="link-btn">
            contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Intro;
