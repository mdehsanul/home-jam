import React from "react";
import "./UpcomingShows.css";
import BennyDayalImage from "../../image/BennyDayal.png";
import VijayYesudasImage from "../../image/VijayYesudas.png";
import AndreaJeremiahImage from "../../image/AndreaJeremiah.png";
import ShilpaRaoImage from "../../image/ShilpaRao.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltRight,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

const upcomingShows = () => {
  return (
    <div className="container upcomingShows horizontalSlider ">
      <div className="d-flex justify-content-between">
        <h2 className="text-white mb-5 pb-3 upcomingShowsTitle">
          Upcoming Shows
        </h2>
        <p className="text-warning viewallButton">View All</p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 sliderContainer sliderContainer">
        <div className="col-md-3 item">
          <div className="card h-100 cardBackground cardItem">
            <img src={BennyDayalImage} className="card-img-top" alt="..." />
            <div className="card-body cardBody">
              <span className="card-title bg-warning p-1 cardTitle">Folk</span>
              <p className="card-text mt-2 text-light cardText">Benny Dayal</p>
              <span className="cardFooter">More Info</span>
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="ms-2 fa-sm footerLongArrowAltRightIcon"
              />
              <span className="cardFooterIcon">
                <FontAwesomeIcon
                  icon={faClipboardList}
                  className="ms-2 fa-lg footerClipboardListIcon "
                />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-3 item">
          <div className="card h-100 cardBackground cardItem">
            <img src={VijayYesudasImage} className="card-img-top" alt="..." />
            <div className="card-body cardBody">
              <span className="card-title bg-warning p-1 cardTitle">
                Bollywood
              </span>
              <p className="card-text mt-2 text-light cardText">
                Vijay Yesudas
              </p>
              <span className="cardFooter">More Info</span>
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="ms-2 fa-sm footerLongArrowAltRightIcon"
              />
              <span className="cardFooterIcon">
                |{" "}
                <FontAwesomeIcon
                  icon={faClipboardList}
                  className="ms-2 fa-lg footerClipboardListIcon "
                />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-3 item">
          <div className="card h-100 cardBackground cardItem">
            <img src={AndreaJeremiahImage} className="card-img-top" alt="..." />
            <div className="card-body cardBody">
              <span className="card-title bg-warning p-1 cardTitle">Folk</span>
              <p className="card-text mt-2 text-light cardText">
                Andrea Jeremiah
              </p>
              <span className="cardFooter">More Info</span>
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="ms-2 fa-sm footerLongArrowAltRightIcon"
              />
              <span className="cardFooterIcon">
                |{" "}
                <FontAwesomeIcon
                  icon={faClipboardList}
                  className="ms-2 fa-lg footerClipboardListIcon "
                />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-3 item">
          <div className="card h-100 cardBackground cardItem">
            <img src={ShilpaRaoImage} className="card-img-top" alt="..." />
            <div className="card-body cardBody">
              <span className="card-title bg-warning p-1 cardTitle">Folk</span>
              <p className="card-text mt-2 text-light cardText">Shilpa Rao</p>
              <span className="cardFooter">More Info</span>
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="ms-2 fa-sm footerLongArrowAltRightIcon"
              />
              <span className="cardFooterIcon">
                |{" "}
                <FontAwesomeIcon
                  icon={faClipboardList}
                  className="ms-2 fa-lg footerClipboardListIcon "
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default upcomingShows;
