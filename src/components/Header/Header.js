import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Progressbar from "../Progressbar/Progressbar";
import UpcomingShows from "../UpcomingShows/UpcomingShows";
import Reviews from "../Reviews/Reviews";

const Header = () => {
  return (
    <div className="HeaderBackgroundImage">
      <Navbar></Navbar>
      <div className="container" id="parent">
        <div className="row" id="child">
          <div className="col-md-6 headerText">
            <h1 className="headerTitleText">Cari Cari</h1>
            <p className="headerDescriptionText">
              Live from their sofa to yours. Get closer to your favorite
              artists, and never miss out.
            </p>
          </div>
        </div>
      </div>
      <Progressbar></Progressbar>
      <UpcomingShows></UpcomingShows>
      <Reviews></Reviews>
    </div>
  );
};

export default Header;
