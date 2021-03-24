import React from "react";

function MainNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/">
          GOOGLE BOOKS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link active text-light"
              aria-current="page"
              href="/search"
            >
              SEARCH
            </a>
            <a className="nav-link active text-light" href="/saved">
              {" "}
              SAVED BOOKS
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/search">
      GOOGLE BOOKS
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/search">
          SEARCH
        </a>
        <a className="nav-link" href="/saved">
          {" "}
          SAVED BOOKS
        </a>
      </div>
    </div>
  </div>
</nav>;
