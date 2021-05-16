import React from "react";
import "./Progressbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faFileSignature } from "@fortawesome/free-solid-svg-icons";

const Progressbar = () => {
  return (
    <div className="container ">
      <div className="row sliderContainer">
        <div className="col-md-3 item">
          <div className="progress-container b">
            <svg className="svg1" height="600" width="600">
              <circle
                cx="300"
                cy="300"
                r="100" /**/
                stroke="#FF0080"
                strokeWidth="1"
                fill="transparent"
              ></circle>
            </svg>
            <svg className="svg2" height="600" width="600">
              <circle
                cx="300"
                cy="300"
                r="100"
                stroke="#FFFFFF"
                strokeWidth="1"
                fill="transparent"
              ></circle>
            </svg>
            <div className="progressbarDetail">
              <FontAwesomeIcon
                icon={faHeart}
                className="fa-2x progressBarLoveIcon"
              />
              <p className="fs-4 text-center progressbarCount">456</p>
              <p className="fs-5">Likes everyday</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 item">
          <div className="progress-container x">
            <svg className="svg2" height="600" width="600">
              <circle
                cx="300"
                cy="300"
                r="100"
                stroke="#FFFFFF"
                strokeWidth="1"
                fill="transparent"
              ></circle>
            </svg>
            <div className="progressbarDetail">
              <FontAwesomeIcon icon={faFileSignature} className="ms-5 fa-2x" />
              <p className="fs-4 text-center progressbarCount">745</p>
              <p className="fs-5">Online Events</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 item">
          <div className="progress-container y">
            <svg className="svg2" height="600" width="600">
              <circle
                cx="300"
                cy="300"
                r="100"
                stroke="#FFFFFF"
                strokeWidth="1"
                fill="transparent"
              ></circle>
            </svg>
            <div className="progressbarDetail">
              <FontAwesomeIcon icon={faFileSignature} className="ms-5 fa-2x" />
              <p className="fs-4 text-center progressbarCount">333</p>
              <p className="fs-5">Offline Events</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 item">
          <div className="progress-container z">
            <svg className="svg2" height="600" width="600">
              <circle
                cx="300"
                cy="300"
                r="100"
                stroke="#FFFFFF"
                strokeWidth="1"
                fill="transparent"
              ></circle>
            </svg>
            <div className="progressbarDetail">
              <FontAwesomeIcon
                icon={faFileSignature}
                className="fa-2x fileSignatureIcon"
              />
              <p className="fs-4 text-center progressbarCount">800</p>
              <p className="fs-5">Daily Events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
