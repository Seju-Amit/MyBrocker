import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const textStyle = {
    color: isHovered ? "#2a67c9" : "black",
  };

  const [isHovered1, setIsHovered1] = useState(false);

  const textStyle1 = {
    color: isHovered1 ? "#2a67c9" : "black",
  };

  const [isHovered2, setIsHovered2] = useState(false);

  const textStyle2 = {
    color: isHovered2 ? "#2a67c9" : "black",
  };

  const [isHovered3, setIsHovered3] = useState(false);

  const textStyle3 = {
    color: isHovered3 ? "#2a67c9" : "black",
  };

  const [isHovered4, setIsHovered4] = useState(false);

  const textStyle4 = {
    color: isHovered4 ? "#2a67c9" : "black",
  };

  return (
    <nav
      class="navbar navbar-expand-lg border-bottom bg-white"
      style={{
        width: "100%",
        height: "60px",
        zIndex: "10",
        backgroundColor: "#FFF",
        position: "fixed",
        top: "0",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        boxSizing:"border-box",
        padding:"0 20px",
        display:"block",
        lineHeight: "1.7rem",
        fornWeight: "500",
      }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item" id="signup">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/signup"
                  style={textStyle}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/about"
                  style={textStyle1}
                  onMouseEnter={() => setIsHovered1(true)}
                  onMouseLeave={() => setIsHovered1(false)}
                >
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/product"
                  style={textStyle2}
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                >
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/pricing"
                  style={textStyle3}
                  onMouseEnter={() => setIsHovered3(true)}
                  onMouseLeave={() => setIsHovered3(false)}
                >
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/support"
                  style={textStyle4}
                  onMouseEnter={() => setIsHovered4(true)}
                  onMouseLeave={() => setIsHovered4(false)}
                >
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
