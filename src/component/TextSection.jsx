import React from "react";

function TextSection() {
  return (
    <div className="text-section">
      <div className="container">
        <div className="text-center">
          <h1 style={{ fontFamily: "inherit", fontWeight: "300" }}>
            Album example
          </h1>
          <p style={{ fontWeight: "300", fontSize: "1.25rem" }}>
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </p>
        </div>
        <div className="d-flex justify-content-center ">
          <p className="btn btn-primary m-2">Main call to the action</p>
          <p className="btn btn-secondary m-2">Secondary action</p>
        </div>
      </div>
    </div>
  );
}

export default TextSection;
