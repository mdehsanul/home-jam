import React from "react";
import "./Reviews.css";
import hellen from "../../image/hellen.png";
import isaac from "../../image/isaac.png";
import jummy from "../../image/jummy.png";
import usa from "../../image/usa.png";
import poland from "../../image/poland.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltRight,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  return (
    <div className="container reviews">
      <div className="d-flex justify-content-between align-items-end">
        <h2 className="text-light pb-1 reviewsTitle">Reviews</h2>
        <p className="text-light ms-auto">
          1 <span className="reviewPages">/12</span>
        </p>
        <p>
          <FontAwesomeIcon
            icon={faLongArrowAltLeft}
            className="ms-2 fa-lg reviewPages "
          />
          <FontAwesomeIcon
            icon={faLongArrowAltRight}
            className="ms-2 fa-lg reviewPages"
          />
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 pb-5 sliderContainer">
        <div className="col-md-4 item">
          <div className="card mt-5 reviewCardBackground reviewBacksideCard">
            <div className="d-flex align-items-center mt-4">
              <img className="mx-3" src={hellen} alt="" width="60" />
              <div>
                <h6 className="text-light">Hellen Jummy</h6>
                <small className="cardCountryName">
                  <img src={usa} width="22px" /> Palo Alto, CA
                </small>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text text-secondary mt-4 mb-4 text-light cardDescription a">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                in donec in nisi vitae. Vestibulum pellentesque eget laoreet
                adipiscing.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 item">
          <div className="card mt-5 reviewCardBackground">
            <div className="d-flex align-items-center mt-4">
              <img className="mx-3" src={isaac} alt="" width="60" />
              <div>
                <h6 className="text-light">Isaac Oluwatemilorun</h6>
                <small className="cardCountryName">
                  <img src={poland} width="20px" /> Palo Alto, CA
                </small>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text text-secondary mt-4 mb-4 text-light cardDescription a">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                in donec in nisi vitae. Vestibulum pellentesque eget laoreet
                adipiscing.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 item">
          <div className="card mt-5 reviewCardBackground">
            <div className="d-flex align-items-center mt-4">
              <img className="mx-3" src={jummy} alt="" width="60" />
              <div>
                <h6 className="text-light">Hellen Jummy</h6>
                <small className="cardCountryName">
                  <img src={usa} width="22px" /> Palo Alto, CA
                </small>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text text-secondary mt-4 mb-4 text-light cardDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                in donec in nisi vitae. Vestibulum pellentesque eget laoreet
                adipiscing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
