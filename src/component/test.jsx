import React from "react";

function Test() {
  return (
    <div>
      <div
        class="collapse show"
        id="navbarToggleExternalContent"
        data-bs-theme="dark"
        style={{ height: "80px" }}
      >
        <div class="bg-dark p-4">
          <h5 class="text-body-emphasis h4">Collapsed content</h5>
          <span class="text-body-secondary">
            Toggleable via the navbar brand.
          </span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Test;
