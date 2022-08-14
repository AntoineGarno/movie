import axios from "axios";
import React from "react";
import imgNotFound from "../images/imgNotFound.jpg";
import Trailer from "./Trailer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  }, [refreshPage]);

  function refreshPage() {
    window.location.reload(false);
  }
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
    <div className="">
      <div className="main row d-flex my-5 main-info">
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
            <h1 className="d-flex align-items-start mb-3">{pop.title}</h1>
            <p className="d-flex align-items-start  fs-4">{pop.release_date}</p>
            <p className="fs-4">{timeConvert(pop.runtime)} </p>
            <button className=" bg-warning p-2 px-3 border-0 rounded-pill text-light btn-details fs-4">
              <i class="fa fa-play-circle-o px-2" aria-hidden="true"></i>
              Trailer
            </button>
          </div>
          <div className="col-1">
            <div className={getBackgroundColor(pop.vote_average)}>
              <p className="p-0 m-0">{(pop.vote_average * 10).toFixed(2)}%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5 px-5">
        <div className="row mx-md-1 mx-5">
          <ul className="d-flex flex-row p-md-1 col-md-3 col-lg-3 liActor mr-md-4 mx-4 mt-2">
            <li className="pt-1 m col-md-5 col-lg-3">Résumé</li>
            <li className="pt-1 m col-md-5 col-lg-3">Vidéos</li>
            <li className="pt-1 m col-md-5 col-lg-3">Photos</li>
          </ul>

          <div className="px-2 col-md-6 col-lg-6">
            <ul className="d-flex justify-content-start flex-row p-2 col-lg-6">
              <li className="px-4 py-2 mx-3 col-md-4 col-lg-4 actoreBadge">
                Acteur
              </li>
              <li className="px-4 py-2 mx-3 col-md-4 col-lg-4 actoreBadge">
                Directeur
              </li>
              <li className="px-4 py-2 mx-3 col-md-4 col-lg-4 actoreBadge">
                Producteur
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="hr my-1" id="hrDetails" />
      <div className="main row d-flex my-5">
        <div className=" col-sm-6 col-md-10 col-lg-4 detailContainer m-5">
          <p>{pop.overview}</p>
        </div>

        <div className=" col-sm-6  col-md-12 col-lg-7 video-mask trailer">
          <Trailer id={slug} />
        </div>
      </div>
      <div className="row">
        <div
          className="d-inline-flex flex-row filmographie py-3 "
          id="FilmoActeurs"
        >
          <h4 className="py-2 mx-2 ">Acteurs</h4>
          <span class="mt-4 degrade-horizontal"></span>
        </div>
      </div>
    </div>
  );
};

export default Details;
