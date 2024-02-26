import React from "react";
import { data } from "./data";
function Card() {
  return (
    <>
      <div className="men-section  bg-light">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-wrap">
              {data.map((ele) => (
                <div
                  key={ele.id}
                  className="col-12 col-sm-6 col-md-4 col-lg-4"
                  style={{
                    flex: "33.33%",
                    maxWidth: "33.33%",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                  }}
                >
                  <div className="card " id="card-item">
                    <img
                      src={ele.img}
                      className="card-img-top"
                      alt={ele.text}
                    />
                    <div className="card-body">
                      <p className="card-text">{ele.text}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            type="button"
                          >
                            View
                          </button>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            type="button"
                          >
                            Edit
                          </button>
                        </div>
                        <small className="text-muted">9mins</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
