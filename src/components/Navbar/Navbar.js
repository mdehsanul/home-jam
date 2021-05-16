import React from "react";
import "./Navbar.css";
import navbarImage from "../../image/navbarImage.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBag,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav className="container navbar navbar-expand-lg navbarFont">
        <div className="container-fluid">
          <img src={navbarImage} alt="navbar Image" className="navbar-brand" />
          <div className="d-flex justify-content-center navbarMobileDeviceIcon">
            <a className="nav-link text-light" href="#">
              <FontAwesomeIcon
                icon={faSearch}
                className="navbarMobileDeviceIcon"
              />
            </a>
            <a className="nav-link text-light" href="#">
              <FontAwesomeIcon
                icon={faShoppingBag}
                className="navbarMobileDeviceIcon"
              />
            </a>
          </div>

          <button
            className="navbar-toggler navbarMobileDeviceButton"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-danger">
              <FontAwesomeIcon icon={faBars} className="text-light mt-1" />
            </span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto mb-2 mb-lg-0">
              <a
                className="nav-link text-light me-3"
                aria-current="page"
                href="#"
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-light me-2 navbarDesktopIcon"
                />{" "}
                Search
              </a>
              <a className="nav-link text-light me-3" href="#">
                Help
              </a>
              <a className="nav-link text-light me-3" href="#">
                Account
              </a>
              <a className="nav-link text-light" href="#">
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  className="navbarDesktopIcon"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
