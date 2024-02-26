import React from "react";
import { Camera } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.css";
function Navbar() {
  return (
    <div>
      <div className="navbar navbar-dark bg-dark">
        <div className="container d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <Camera color="#fff" size={25} />
            <strong
              className="text-light p-2 fw-bold"
              style={{ fontSize: "20px", fontWeight: "200" }}
            >
              Album
            </strong>
          </div>
          <div>
            <div class="pos-f-t">
              <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                  <h4 class="text-white">Collapsed content</h4>
                  <span class="text-muted">
                    Toggleable via the navbar brand.
                  </span>
                </div>
              </div>
              <nav class="navbar navbar-dark bg-dark">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarToggleExternalContent"
                  aria-controls="navbarToggleExternalContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
