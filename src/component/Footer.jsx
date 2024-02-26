import React from "react";

function footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <p className="float-right">
            <a href="#" style={{ textDecoration: "none" }}>
              Back to top
            </a>
          </p>
          <p>
            Album example is © Bootstrap, but please download and customize it
            for yourself!
          </p>
          <p>
            New to Bootstrap?
            <a href="#" style={{ textDecoration: "none" }}>
              Visit the homepage
            </a>
            or read our
            <a href="#" style={{ textDecoration: "none" }}>
              getting started guide.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default footer;
