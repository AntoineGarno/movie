import axios from "axios";
import React from "react";
import imgNotFound from "../images/imgNotFound.jpg";
import Trailer from "./Trailer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Genres from "./Genres";

const Details = (props) => {
  const { slug } = useParams();
  const [pop, setPop] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          props.id +
          "?api_key=a67b57849deb687f2cd49d7a8298b366"
      )
      .then((res) => setPop(res.data));
  }, [slug, pop]);

  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hour(s) and " + rminutes + " minute(s).";
  }

  const getBackgroundColor = (value) => {
    let bgColor;
    if (value >= 8) {
      bgColor = "ratingGreen";
    } else if (value >= 6 && value < 8) {
      bgColor = "ratingYellow";
    } else if (value < 6) {
      bgColor = "ratingRed";
    }
    return bgColor;
  };

  return (
    <div>
      <div className="main row d-flex my-5 main-info mb-5">
        <img
          className="bgDetails "
          src={"https://image.tmdb.org/t/p/original" + pop.backdrop_path}
          alt=""
        />
        <div className="row">
          <img
            src={"https://image.tmdb.org/t/p/w200" + pop.poster_path}
            alt="poster"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = imgNotFound;
            }}
            className="imageDetails img-fluid"
          />
          <div className="flex-column col-6 d-flex align-items-start mt-5 ml-2 detailContent">
            <h1 className=" mb-3">{pop.title}</h1>

            <p className="d-flex align-items-start  fs-4">{pop.release_date}</p>
            <p className="fs-4">{timeConvert(pop.runtime)} </p>
            <div className="col-1 ratingMobile ">
              <div className={getBackgroundColor(pop.vote_average)}>
                <p className="p-0 m-0">{(pop.vote_average * 10).toFixed(2)}%</p>
              </div>
            </div>
            <Genres id={slug} />
            <button className="bg-warning text-dark p-2 px-3 border-0 rounded-pill btn-details fs-4">
              <i class="fas fa-play-circle mx-2"></i>
              Trailer
            </button>
          </div>
          <div className="col-1 ratingWeb">
            <div className={getBackgroundColor(pop.vote_average)}>
              <p className="p-0 m-0">{(pop.vote_average * 10).toFixed(2)}%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="main row d-flex my-md-2 my-5 justify-content-center">
        <div className="col-lg-4 m-5">
          <p className="detailContainer">{pop.overview}</p>
        </div>

        <div className="col-lg-7 video-mask trailer">
          <Trailer id={slug} />
        </div>
      </div>
      <div className="row">
        <div
          className="d-inline-flex flex-row filmographie py-3 "
          id="FilmoActeurs"
        >
          <h4 className="py-2 mx-1 ">Actors</h4>
          <span class="mt-4 degrade-horizontal"></span>
        </div>
      </div>
    </div>
  );
};

export default Details;
