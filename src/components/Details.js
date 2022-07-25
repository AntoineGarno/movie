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
    console.log(pop.id);
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

  return (
    <div>
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
            className="imageDetails col-4"
          />
          <div className=" flex-column col-7  d-flex align-items-start px-5">
            <h1 className="d-flex align-items-start mb-5">{pop.title}</h1>
            <p lassName="d-flex align-items-start my-5">{pop.release_date}</p>
            <p>{timeConvert(pop.runtime)} </p>
            <button className=" bg-warning my-5 p-2 px-3 border-0 rounded-pill text-light">
              <i class="fa fa-play-circle-o px-2" aria-hidden="true"></i>
              Bande annonce
            </button>
          </div>
          <div className="col-1">
            <div className="rating">
              <p className="p-0 m-0">{pop.vote_average * 10}%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row ">
        <ul className="d-flex flex-row p-md-1  col-md-2 col-lg-5  liActor">
          <li className="pt-1 m col-md-1 col-lg-3">Résumé</li>
          <li className="pt-1 m col-md-1 col-lg-3">Vidéos</li>
          <li className="pt-1 m col-md-1 col-lg-3">Photos</li>
        </ul>

        <div className="px-4 col-md-4 col-lg-6">
          <ul className="d-flex justify-content-start flex-row p-2 ml-4 col-lg-6 ">
            <li className="px-4 py-2 mx-3 col-lg-4 actoreBadge">Acteur</li>
            <li className="px-4 py-2 mx-3 col-lg-4 actoreBadge">Directeur</li>
            <li className="px-4 py-2 mx-3 col-lg-4 actoreBadge">Producteur</li>
          </ul>
        </div>
      </div>

      <div className="main row d-flex my-5">
        <div className="col-4">
          <p>{pop.overview}</p>
        </div>
        <div className="col-8">
          <Trailer id={slug} />
        </div>
      </div>
    </div>
  );
};

export default Details;
